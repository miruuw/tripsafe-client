import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native';
import { useFonts } from 'expo-font';
import axios from 'axios';
import styles from './login.style';
import { LogoApp } from '../../constant/images';
import { addPlus, lock, google } from '../../constant/icons';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const LoginSC = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:8000/api/v1/users/login', {
        email: email,
        password: password
      });
      setIsLoading(false);
  
      if (response && response.data && response.data.token) {
        const { token } = response.data;
        // Simpan token ke AsyncStorage atau Redux untuk digunakan di seluruh aplikasi (opsional)
        await AsyncStorage.setItem('userToken', token); // Simpan token ke AsyncStorage dengan key 'userToken'
  
        // Navigasi ke halaman yang sesuai setelah berhasil login
        navigation.navigate('BottomTab');
      } else {
        showToast('Login gagal: Respon tidak valid');
      }
    } catch (error) {
      setIsLoading(false);
      showToast('Login gagal: ' + error.message);
    }
  };
  

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <View style={styles.WrapperJudul}>
        <Image source={LogoApp} style={styles.logo} />
      </View>

      <View style={styles.WrapperRegister}>
        <Text style={styles.TxtRegis}>Selamat Datang</Text>
        <Text style={styles.TxtRegis2}>Masuk ke akun anda</Text>
      </View>

      <View style={styles.WrapperInput}>
        <View style={styles.Flex}>
          <View style={styles.FlexIcon}>
            <Image source={addPlus} style={styles.icoAdd} />
          </View>

          <TextInput
            style={styles.textInput}
            label='Email'
            placeholder='example@email.com'
            autoCapitalize='none'
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.Flex}>
          <View style={styles.FlexIcon}>
            <Image source={lock} style={styles.icoLock} />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder='********'
            autoCapitalize='none'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

      </View>

      <TouchableOpacity
      style={styles.viewButton}
      onPress={handleLogin}>
          <Text style={styles.textLogin}>Masuk</Text>
      </TouchableOpacity>

      <Text style={styles.TxtBtm}>Masuk Dengan</Text>

      <TouchableOpacity>
        <Image style={styles.google} source={google} />
      </TouchableOpacity>

      <View style={styles.clBlAkun}>
        <Text style={styles.txtBlakun}>Belum Memiliki Akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.txtDfCurrent}>Daftar Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginSC;
