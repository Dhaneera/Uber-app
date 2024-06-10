import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import NavOption from '@/components/NavOption'
import { useNavigation } from 'expo-router'

const HomeScreen:React.FC = () => {
  const navigation = useNavigation()

      
  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    })
}, [navigation])
  
  return (
    <SafeAreaView className='h-full'>
     <View className='p-5'>
      <Image
      source={{
        uri: 'https://links.papareact.com/gzs',
      }}style={{width:100,height:100,resizeMode:'contain'}} 
      />
     <NavOption/>

     </View>
    </SafeAreaView>
  )
}

export default HomeScreen