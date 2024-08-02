import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams } from 'expo-router';

type Nav = {
    navigate: (value: string) => void;
}

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

const DetAgenda = ({ data }:any) => {
  const navigation = useNavigation<AgendaProps>();
  
  const { idUsr, name, title } = useLocalSearchParams();

  const handleProLinha = async () => {
          
  }
  
  return (
    <>
          <View className=''>
            <View className='flex w-full rounded-lg mt-2 border border-blue-700 p-1'>
              <View className='flex flex-row justify-between'>
                <View className='flex flex-row justify-between'>
                  <Text className='mt-2 text-amber-500 text-[10px] font-semibold'>Pedido:</Text>
                  <Text className='mt-2 ml-1 text-amber-500 text-[10px] font-semibold'>{data.ageId}</Text>
                </View>
                <View className='flex flex-row justify-between'>
                  <Text className='mt-2 text-amber-500 text-[10px] font-semibold'>Titulo:</Text>
                  <Text className='mt-2 ml-1 text-amber-500 text-[10px] font-semibold'>{data.ageTitulo}</Text>
                </View>
              </View>
              <View className='flex flex-row justify-between'>
                <View className='flex flex-row justify-between'>
                  <Text className='mt-2 text-amber-500 text-[14px] font-semibold'>Contato:</Text>
                  <Text className='mt-2 ml-1 text-amber-500 text-[14px] font-semibold'>{data.ageContato}</Text>
                </View>   
                <View className='flex flex-row justify-between'>
                  <Text className='mt-2 text-amber-500 text-[14px] font-semibold'>Celular:</Text>
                  <Text className='mt-2 ml-1 text-amber-500 text-[14px] font-semibold'>{data.ageCelular}</Text>
                </View>             
              </View>
              <View className='flex flex-row justify-end'>
                <View className='flex flex-row justify-between'>
                  <Text className='mt-5 text-green-500 text-[10px] font-semibold'>Hora Entrega:</Text>
                  <Text className='mt-2 ml-1 text-green-500 text-[20px] font-semibold'>{data.ageHora}</Text>
                </View>                
              </View>
              <View className='flex flex-row justify-end'>
                <View className='flex flex-row justify-between'>
                  <Text className='mt-5 text-green-500 text-[10px] font-semibold'>Descrição:</Text>
                  <Text className='mt-2 ml-1 text-green-500 text-[20px] font-semibold'>{data.ageDescricao}</Text>
                </View>                
              </View>
            </View>             
          </View>  
    </>
  );
};
  
export default DetAgenda;