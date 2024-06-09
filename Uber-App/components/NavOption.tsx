import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { selectOrgin } from '@/features/navSlice'
import { useSelector } from 'react-redux'
import { useNavigation } from 'expo-router'


const data=[
    {
        id:1,
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
    },
    {
        id:2,
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen"
    }
]

const NavOption:React.FC = () => {
    const navigation=useNavigation()
    const orgin = useSelector(selectOrgin)
    
  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item)=>item.id}
    renderItem={(item)=>(  
        <TouchableOpacity 
        onPress={()=>navigation.navigate('MapScreen')} 
        disabled={!orgin}
        >
            <View className={`${!orgin && 'opacity-10'}`}>
                <Image
                 source={{uri:item.item.image}}
                 style={{width:120,height:120,resizeMode:'contain'}}/>
                 <Text className='mt-2 text-lg font-semibold ml-4'>{item.item.title}</Text>
                 {/* <Icon name='arrowright' color='white' type='antdesign' className=' p-2 bg-black rounded-full w-10 mt-4 ml-3'/> */}
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOption