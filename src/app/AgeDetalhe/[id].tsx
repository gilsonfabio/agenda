import React, { useState, useEffect} from 'react'
import { View, Text, Image, FlatList } from "react-native"
import { useLocalSearchParams, Link } from 'expo-router';

import api from '../../components/Services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetAgenda from '@/src/components/DetAgenda';

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

type paramsProps = {
    id: string;
}

export default function AgeDetalhe(){
    const [agenda, setAgenda] = useState<Array<AgendaProps>>([]);
    const { id } = useLocalSearchParams<paramsProps>();
    
    useEffect(() => {
    
        let idAge = id;
        api({
            method: 'get',    
            url: `ageDetalhe/${idAge}`,                 
        }).then(function(response) {
            setAgenda(response.data)        
        }).catch(function(error) {
            alert(`Falha no acesso a agenda! Tente novamente.`);
        })       
                                  
    }, []);

    return(
        <View className="flex-1 flex-col bg-slate-800">
            <FlatList
                data={agenda}
                className='ml-3'
                horizontal={false}
                renderItem={({ item }) => <DetAgenda data={item} />}
                keyExtractor={(item) => item.ageId}
            />     
        </View>
    )
}
