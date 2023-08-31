
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './register.style'
import client from '../../api/client';
import { useLogin } from '../../context/LoginProvider';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useFonts } from 'expo-font';

import FormInput from '../../components/FormInput/FormInput';

const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, 'Nama tidak valid!')
    .required('Nama wajib diisi!'),
  email: Yup.string().email('Email tidak valid!').required('Email wajib diisi!'),
  password: Yup.string()
    .trim()
    .min(8, 'Kata sandi terlalu pendek!')
    .required('Kata sandi wajib diisi!'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Kata sandi tidak cocok!'
  ),
});

const RegisterSC = ({navigation}) => {

  const { setProfile, setIsLoggedIn } = useLogin();

  const [fontsLoaded] = useFonts({
    DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const signUp = async (values, formikActions) => {
    try {
      const res = await client.post('/create-user', { ...values });

      if (res.data.success) {
        const signInRes = await client.post('/sign-in', {
          email: values.email,
          password: values.password,
        });

        if (signInRes.data.success) {
          setProfile(res.data.user);
          setIsLoggedIn(true);
        }
      }

      formikActions.resetForm();
      formikActions.setSubmitting(false);
    } catch (error) {
      console.error('Error during sign up:', error.message);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error occurred during sign up.',
      });

      formikActions.setSubmitting(false);
    }
  };
  return (
    <View style={styles.Container}>
      <View style={styles.WrapperRegister}>
        <Text style={styles.TxtRegis}>Selamat Datang</Text>
        <Text style={styles.TxtRegis2}>Silahkan Buat Akun Anda</Text>
      </View>

      <View style={styles.WrapperInput}>

      <Formik
        initialValues={{
          fullname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={signUp}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <>
            <FormInput
              value={values.fullname}
              error={touched.fullname && errors.fullname}
              onChangeText={handleChange('fullname')}
              onBlur={handleBlur('fullname')}
              label='Nama Lengkap'
              placeholder='masukan nama anda'
            />
            <FormInput
              value={values.email}
              error={touched.email && errors.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              autoCapitalize='none'
              label='Email'
              placeholder='pengguna@email.com'
            />
            <FormInput
              value={values.password}
              error={touched.password && errors.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              autoCapitalize='none'
              secureTextEntry
              label='Password'
              placeholder='********'
            />
            <FormInput
              value={values.confirmPassword}
              error={touched.confirmPassword && errors.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              autoCapitalize='none'
              secureTextEntry
              label='Confirm Password'
              placeholder='********'
            />
            <TouchableOpacity 
            submitting={isSubmitting}
            onPress={handleSubmit}
            style={styles.viewButton}>
          <Text style={styles.textLogin}>Daftar</Text>
        </TouchableOpacity>
          </>
        )}
      </Formik>


        {/* <Text style={styles.TxtBtm}>Daftar Dengan</Text>
        <TouchableOpacity>
          <Image
            style={styles.google}
            source={google} />
        </TouchableOpacity> */}
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>Sudah Memiliki Akun?</Text>
          <TouchableOpacity
            onPress={() => navigation.replace('Login')}>
            <Text style={{ color: "#00AA13", fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default RegisterSC;