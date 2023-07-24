import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SplashSC from '../screen/splash/SplashSC';
import Login from '../screen/login/LoginSC'
import Register from '../screen/register/RegisterSC'
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const RouteApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
        
      }}
      >
        <Stack.Screen name="SplashScreen" component={SplashSC} />
        <Stack.Screen 
        name="Login" component={Login} />
        <Stack.Screen 
        name="Register" component={Register} />
        <Stack.Screen  name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouteApp;