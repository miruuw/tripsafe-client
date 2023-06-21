
import React from 'react';
import {COLOR, Icon} from '../../constant'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: COLOR.greenPrimary,
                tabBarInactiveTintColor: COLOR.grey,
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingBottom: 10
                },
                tabBarStyle: { height: 70, elevation: 5, paddingTop: 10 }
            }}>

            <Tab.Screen name="Beranda" component={Home} options={{
                headerShown: false,
                tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={Icon.home} />
            }}
            />
            <Tab.Screen name="Keranjang" component={Keranjang} options={{
                headerShown: false,
                tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={Icon.cart} />
            }}
            />
            <Tab.Screen name="Maps" component={Maps} options={{
                headerShown: false,
                tabBarIcon: () => <Image source={Icon.maps} />
            }}
            />
            <Tab.Screen name="Aktivitas" component={History} options={{
                headerShown: false,
                tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={Icon.history} />
            }}
            />
            <Tab.Screen name="Profil" component={Profil} options={{
                headerShown: false,
                tabBarIcon: () => <Image style={{ width: 30, height: 30 }} source={Icon.profil} />
            }}
            />

        </Tab.Navigator>
  )
}

export default BottomNavigation