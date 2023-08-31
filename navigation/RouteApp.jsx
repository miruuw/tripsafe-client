import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SplashSC from '../screen/splash/SplashSC';
import Login from '../screen/login/LoginSC'
import Register from '../screen/register/RegisterSC'
import BottomTab from './BottomTab';
import { useLogin } from '../context/LoginProvider';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
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
      </Stack.Navigator>
  )
}

const RouteApp = () => {
  const { isLoggedIn } = useLogin()
  return isLoggedIn ? <BottomTab/> : <StackNavigator/>
}

export default RouteApp;