import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from "expo-font";
import HomeScreen from '../screen/home/HomeSC';
import CartScreen from '../screen/keranjang/KeranjangSC';
import MapsScreen from '../screen/maps/MapsSC';
import ActivityScreen from '../screen/aktivitas/AktivitasSC';
import ProfileScreen from '../screen/profil/ProfilSC';

import {
    home,
    cart,
    mapsNav,
    history,
    profil
} from '../constant/icons';

import {
    greenPrimary
} from '../constant/color';

const Tab = createBottomTabNavigator();

const BottomTab = ({ navigation }) => {

    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: greenPrimary,
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        height: 65,
                        display: 'flex',
                        paddingBottom: 5,
                        paddingTop: 3
                    },
                    tabBarLabelStyle: styles.tabBarLabel
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Image source={home} style={{ width: 26, height: 26, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Image source={cart} style={{ width: 26, height: 26, tintColor: color }} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Maps"
                    component={MapsScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Image source={mapsNav} style={{ width: 22, height: 32, tintColor: color }} />
                        ),
                        headerTitle: 'Lokasi Anda Saat Ini',
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 14,
                            color: 'white',
                            fontFamily: 'DMBold',
                        },
                        headerStyle: {
                            backgroundColor: greenPrimary,
                            height: 60
                        }

                    }}
                />
                <Tab.Screen
                    name="Activity"
                    component={ActivityScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Image source={history} style={{ width: 24, height: 25, tintColor: color }} />
                        ),

                    }}

                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Image source={profil} style={{ width: 26, height: 26, tintColor: color }} />
                        ),
                    }}
                />
            </Tab.Navigator>
    );
};

export default BottomTab;

const styles = StyleSheet.create({
    tabBarLabel: {
        fontFamily: 'DMBold',
        fontSize: 14, 
    },
});
