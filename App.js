import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import {Home} from './screen';

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
    // <View style={styles.container}>
    //   {/* <Text style={styles.text1}>Open up App.js to start working on your app!
    //     ayok semangat SAID!!
    //   </Text> */}
    //   <Home/>
    //   <StatusBar style="auto" />
    // </View>
    <Home/>
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
