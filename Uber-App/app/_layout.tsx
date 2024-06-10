import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler'
import { Provider } from 'react-redux';
import { store } from '@/store';
import HomeScreen from './HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler'
import MapScreen from './MapScreen';


SplashScreen.preventAutoHideAsync();

export type RootRootStackParamList = {
  HomeScreen: undefined
  MapScreen: undefined
}


// Prevent the splash screen from auto-hiding before asset loading is complete.


const RootLayout:React.FC=()=>{

  const Stack = createNativeStackNavigator<RootRootStackParamList>();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          <Stack.Screen name='MapScreen'  component={MapScreen}/>
        </Stack.Navigator>
      </SafeAreaProvider>
    </Provider>

  );
}

export default RootLayout
