import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import 'react-native-gesture-handler'
import { Provider } from 'react-redux';
import { store } from '@/store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export type RootRootStackParamList = {
  HomeScreen: undefined
}


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

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
        {/* <Stack.Navigator> */}
        <HomeScreen/>
        {/* </Stack.Navigator> */}
    </Provider>

  );
}


