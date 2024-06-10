import { View, Text } from 'react-native'
import React from 'react'
import { selectOrgin } from '@/features/navSlice'
import { useSelector } from 'react-redux'

const Map: React.FC = () => {

  const orgin = useSelector(selectOrgin)

  return (
      <MapView className='flex-1' mapType='mutedStandard'
          initialRegion={{
              latitude: orgin?.location.lat,
              longitude: orgin?.location.lng,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
          }}>
          {orgin?.location.lat && orgin?.location.lng && (
              <Marker coordinate={{
                  latitude: orgin.location.lat,
                  longitude: orgin.location.lng
              }}
                  title={orgin?.description}
                  identifier='orgin'
              />)}
      </MapView>

  )
}

export default Map