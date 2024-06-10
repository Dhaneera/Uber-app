import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import NavOption from '@/components/NavOption'
import { useNavigation } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setdestination, setOrgin } from '@/features/navSlice';
import { GOOGLE_MAPS_APIKEY } from '@env';
const HomeScreen: React.FC = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

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
          }} style={{ width: 100, height: 100, resizeMode: 'contain' }} />

        <GooglePlacesAutocomplete
          placeholder='from'
          styles={{
            container: {
              flex: 0,
              width: 350,
            },
            textInput: {
              fontSize: 18,
              fontWeight: 800,
            }
          }}
          onPress={(data, detils) => {
            dispatch(setOrgin({
              location: {
                lat: detils?.geometry.location.lat,
                lng: detils?.geometry.location.lng

              },
              description: data.description
            }))
            dispatch(setdestination(null))
          }}
          fetchDetails={true}
          // returnKeyType={'search'}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}


        />
        <NavOption />

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen