import React from 'react'
import { View, Text} from 'react-native'
import {useFonts} from 'expo-font';
import styles from './home.style'

const Home = () => {

    const [fontsLoaded] = useFonts({
        DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
      });
    
      if (!fontsLoaded) {
        return null;
      }
    
  return (
    <View>
        <Text style={styles.text1}>Ini Halaman Home</Text>
    </View>
  )
}

export default Home;