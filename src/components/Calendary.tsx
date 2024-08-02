import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { Calendar, DateData, LocaleConfig } from "react-native-calendars"
import { DayState } from "react-native-calendars/src/types"

import api from "./Services/api"

import { Feather } from "@expo/vector-icons"

import { ptBR } from "../utils/localeCalendarConfig"
import LisAgenda from "./ListAgenda"

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

type AgendaProps = {
    "ageId": string; 
    "ageData": string; 
    "ageHora": string;  
    "ageIdUsr": number;
    "ageTitulo": string;
    "ageDescricao": string;
    "ageContato": string;
    "ageCelular": string;
    "ageLogradouro": string;
    "ageComplemento": string;
    "ageBairro": string;
    "ageCidade": string;
    "ageUf": string;
    "ageCep": string;
    "ageStatus": string;
}
  
export default function Calendary() {
    const [agenda, setAgenda] = useState<Array<AgendaProps>>();
    const [day, setDay] = useState<DateData>();

    useEffect(() => {   
        let dia = '01';
        let mes = '08';
        let ano = '2024';
        let datNow = ano + '-' + mes + '-' + dia;

        console.log('Data Inicial', datNow);
    
        api.post("/agenda",{
            datAgenda: datNow,
        }).then(response => {
            setAgenda(response.data)
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });    
    }, [])  

    useEffect(() => {   
        //let dia = new Date().getDate();
        //let mes = new Date().getMonth() + 1;
        //let ano = new Date().getFullYear();
    
        let dia = '01';
        let mes = '08';
        let ano = '2024';
        let datNow = ano + '-' + mes + '-' + dia;
   
        if (!day) {
            let dia = '01';
            let mes = '08';
            let ano = '2024';
            let datNow = ano + '-' + mes + '-' + dia;
        }else {
            datNow = day?.dateString;
        }
    
        console.log('Data Selecionada',datNow)

        api.post("/agenda",{
            datAgenda: datNow,
        }).then(response => {
            setAgenda(response.data)
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });    

    }, [day])  

    function handleDetAgenda(row: any){
    
    }

    return (
        <View >
            <Calendar
                renderArrow={(direction: "right" | "left") => (
                    <Feather size={24} color="#E8E8E8" name={`chevron-${direction}`} />
                )}
                headerStyle={{
                borderBottomWidth: 0.5,
                borderBottomColor: "#E8E8E8",
                paddingBottom: 10,
                marginBottom: 10,
                }}
                theme={{
                    textMonthFontSize: 18,
                    monthTextColor: "#E8E8E8",
                    todayTextColor: "#F06543",
                    selectedDayBackgroundColor: "#F06543",
                    selectedDayTextColor: "#E8E8E8",
                    arrowColor: "#E8E8E8",
                    calendarBackground: "transparent",
                    textDayStyle: { color: "#E8E8E8" },
                    textDisabledColor: "#717171",
                    arrowStyle: {
                        margin: 0,
                        padding: 0,
                    },
                }}                
                hideExtraDays
                onDayPress={setDay}
                markedDates={
                    day && {
                        [day.dateString]: { selected: true },
                    }
                }       
            />
        
            <Text className="text-white text-xl mt-3">Data selecionada: {day?.dateString}</Text>
            <View className="flex flex-col items-center bg-slate-900 ">            
                <FlatList
                    data={agenda}
                    className='w-full ml-1 mb-0'
                    horizontal={false}
                    renderItem={({ item }) => <LisAgenda data={item} />}
                    keyExtractor={(item) => item.ageId}
                />     
            </View>
            
        </View>
    )
}