import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { selectOrgin } from '@/features/navSlice';
import Map from '@/components/Map';
import NavigationCard from '@/components/NavigationCard';
import RideOptionCard from '@/components/RideOptionCard';


export type RootStackParamList = {
    NavigationCard:undefined
    RideOptionCard:undefined
  }
const MapScreen:React.FC = () => {
    const orgin=useSelector(selectOrgin)
    const Stack= createNativeStackNavigator<RootStackParamList>()

  return (
    <View>
    <View className='h-1/2'>
     <Map/>
    </View>
    <View className='h-1/2'>
     <Stack.Navigator>
         <Stack.Screen name='NavigationCard' component={NavigationCard} options={{headerShown:false}} />
         <Stack.Screen name='RideOptionCard' component={RideOptionCard} options={{headerShown:false}} />
     </Stack.Navigator>
    </View>
 </View>
  )
}

export default MapScreen

