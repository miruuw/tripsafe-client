import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './login.style';
import { LogoApp } from '../../constant/images';
import { addPlus, lock, google } from '../../constant/icons';
import client from '../../api/client';
import { useLogin } from '../../context/LoginProvider';
import { isValidEmail, isValidObjField, updateError } from '../../utils/method'
import FormInput from '../../components/FormInput/FormInput';


const LoginSC = ({ navigation }) => {
  const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { email, password } = userInfo

  const [fontsLoaded] = useFonts({
    DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('semua form wajib diisi !', setError);

    if (!isValidEmail(email)) return updateError('email anda salah!', setError);

    if (!password.trim() || password.length < 8)
      return updateError('password terlalu pendek!', setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post('/sign-in', { ...userInfo });

        console.log('Response from server:', res);

        if (res.data.success) {
          setUserInfo({ email: '', password: '' });
          setProfile(res.data.user);
          setIsLoggedIn(true);
        } else {
          setError(res.data.message);
        }

      } catch (error) {
        console.log(error);
        setError('Terjadi kesalahan');
      }
    }
  };



  return (
    <View>
      <View style={styles.WrapperJudul}>
        <Image source={LogoApp} style={styles.logo} />
      </View>

      <View style={styles.WrapperRegister}>
        <Text style={styles.TxtRegis}>Selamat Datang</Text>
        <Text style={styles.TxtRegis2}>Masuk ke akun anda</Text>
      </View>


      <View style={styles.WrapperInput}>
        <FormInput
          value={email}
          onChangeText={value => handleOnChangeText(value, 'email')}
          label='Email'
          placeholder='pengguna@email.com'
          autoCapitalize='none'
        />

        <FormInput
          value={password}
          onChangeText={value => handleOnChangeText(value, 'password')}
          label='Password'
          placeholder='********'
          autoCapitalize='none'
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.viewButton}
        onPress={submitForm}
      >
        <Text style={styles.textLogin}>Masuk</Text>
      </TouchableOpacity>

      {/* 
      <Text style={styles.TxtBtm}>Masuk Dengan</Text>

      <TouchableOpacity>
        <Image style={styles.google} source={google} />
      </TouchableOpacity> */}

      <View style={styles.clBlAkun}>
        <Text style={styles.txtBlakun}>Belum Memiliki Akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.txtDfCurrent}>Daftar Sekarang</Text>
        </TouchableOpacity>
      </View>

      
      {/* Tampilkan pesan kesalahan jika ada */}
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}

    </View>
  );
};

export default LoginSC;
