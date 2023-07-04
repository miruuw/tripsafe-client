import React from 'react'
import { Stack } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native'
import { Icon, Image, COLORS } from '../constant';
import {SplashSC, LoginSC, RegisterSC, HomeSC, KeranjangSC, MapsSC, AktivitasSC, ProfilSC} from '../screen';
import {BottomNavigation} from '../components/BottomNavigation';


const RouteApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: COLORS.greenPrimary
                    }
                }}
            >
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashSC}
                    options={{ headerShown: false }} />

                <Stack.Screen
                    name="HomeSC"
                    component={BottomNavigation}
                    options={{ headerShown: false }} />
z
                <>
                    <Stack.Screen
                        name="Login"
                        component={LoginSC}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Register"
                        component={RegisterSC}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="MapsMenu"
                        component={MapsSC}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="MapsDetail"
                        component={MapsDetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Merchant"
                        component={Merchant}
                        options={{
                            title: "Profil Merchant",
                            headerTintColor: 'white',
                            headerTitleAlign: 'center'
                        }} />
                    <Stack.Screen
                        name="KatalogMerchant"
                        component={KatalogMerchant}
                        options={{
                            title: "Katalog Merchant",
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center'
                        }} />
                    <Stack.Screen
                        name="DetailProduk"
                        component={DetailProduk}
                        options={({ navigation }) => ({
                            title: "Detail Produk",
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center',
                            headerRight: () => (
                                <View>
                                    {RenderUserMenu(navigation)}
                                </View>
                            ),
                        })}
                    />
                    <Stack.Screen
                        name="DaftarPesanan"
                        component={DaftarPesanan}
                        options={() => ({
                            title: "Daftar Pesanan",
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center'
                        })}
                    />
                    <Stack.Screen
                        name="PembayaranPesanan"
                        component={Pembayaran}
                        options={() => ({
                            title: "Pembayaran",
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center'
                        })}
                    />
                    <Stack.Screen
                        name="VerifikasiPembayaran"
                        component={VerifikasiPembayaran}
                        options={() => ({
                            title: "Verifikasi Pembayaran",
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center'
                        })}
                    />
                    <Stack.Screen
                        name="ResetPasswordScreen"
                        component={ResetPasswordScren}
                    />
                </>


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RouteApp