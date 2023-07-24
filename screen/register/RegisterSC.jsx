
import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './register.style'

import {
  user,
  addPlus,
  lock,
  google
} from '../../constant/icons';

const RegisterSC = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.WrapperRegister}>
        <Text style={styles.TxtRegis}>Selamat Datang</Text>
        <Text style={styles.TxtRegis2}>Silahkan Buat Akun Anda</Text>
      </View>

      <View style={styles.WrapperInput}>

        <View style={styles.Flex}>
          <View style={styles.FlexIcon}>
            <Image
              source={user}
              style={styles.icoAdd} />
          </View>

          <TextInput
            placeholder="Nama"
            style={styles.textInput}
          />
        </View>

        <View style={styles.Flex}>
          <View style={styles.FlexIcon}>
            <Image
              source={addPlus}
              style={styles.icoAdd} />
          </View>

          <TextInput
            placeholder="Email"
            style={styles.textInput}
          />
        </View>

        <View style={styles.Flex}>
          <View style={styles.FlexIcon}>
            <Image
              source={lock}
              style={styles.icoLock} />
          </View>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry
          // value={password}
          // onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.Flex}>
          <View style={styles.FlexIcon}>
            <Image
              source={lock}
              style={styles.icoLock} />
          </View>
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            secureTextEntry
          // value={Confpassword}
          // onChangeText={text => setConfPassword(text)}
          />
        </View>



        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.textLogin}>Daftar</Text>
        </TouchableOpacity>
        <Text style={styles.TxtBtm}>Daftar Dengan</Text>
        <TouchableOpacity>
          <Image
            style={styles.google}
            source={google} />
        </TouchableOpacity>
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