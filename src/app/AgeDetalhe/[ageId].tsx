import React from 'react';
import { TouchableOpacity, View, Image, Text, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link, useLocalSearchParams } from 'expo-router';

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

const AgeDetalhe = ({ data }:any) => {
  const navigation = useNavigation<AgendaProps>();
  const { ageId } = useLocalSearchParams();


    
  return (
    <>
      
    </>
  );
};
  
export default AgeDetalhe;