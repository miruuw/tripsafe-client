import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import SplashSC from './screen/splash/SplashSC';
import HomeSC from './screen/home/HomeSC';
import BottomTab from './navigation/BottomTab';

export default function App() {

  const [fontsLoaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <BottomTab/>
     </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontFamily: 'DMMedium'
  }
});
