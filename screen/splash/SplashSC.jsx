import React, { useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { Images } from '../../constant/images';
import styles from './splash.style';

const SplashSC = () => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    })
    
    return (
        <View>
            <View style={styles.flexRoot}>
                {/* <Image source={Images.LogoApp} /> */}
            </View>
            <View>
                <Text style={styles.Text4}>Powered by Said Amirudin</Text>
            </View>
        </View>
    )
}

export default SplashSC