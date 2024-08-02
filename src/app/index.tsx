import { View, Text } from 'react-native'
import Calendary from '../components/Calendary'

export default function Home(){
    return (
        <View className='flex-1 bg-blue-950 flex-col p-2'>
            <Calendary />
        </View>
    )
}
