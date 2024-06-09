import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import NavOption from '@/components/NavOption'

const HomeScreen:React.FC = () => {
  return (
    <SafeAreaView>
     <View className='p-5'>
      <Image
      source={{
        uri: 'https://links.papareact.com/gzs',
      }}style={{width:100,height:100,resizeMode:'contain'}} 
      />
     </View>
     <NavOption/>
    </SafeAreaView>
  )
}

export default HomeScreen