import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './profil.style';
import { useLogin } from '../../context/LoginProvider'; 

const ProfilSC = () => {
    const { setIsLoggedIn, profile } = useLogin();// Get the profile data from the context

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: profile.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{profile.fullname}</Text>
      <Text style={styles.email}>{profile.email}</Text>
      <TouchableOpacity
        style={styles.logout}
        onPress={() => setIsLoggedIn(false)}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
        
    </View>
  );
};

export default ProfilSC;
