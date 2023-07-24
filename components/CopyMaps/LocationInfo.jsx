import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert, Share, Clipboard } from 'react-native';
import styles from './locationinfo.style';
import { useFonts } from 'expo-font';

import { copy, share } from '../../constant/icons';

const LocationInfo = ({ latitude, longitude }) => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleCopyLocation = () => {
    const locationString = `Latitude: ${latitude}, Longitude: ${longitude}`;
    Clipboard.setString(locationString);
    Alert.alert('Lokasi Disalin', 'Lokasi telah disalin ke papan klip.');
  };

  const handleShareLocation = async () => {
    try {
      const locationString = `Latitude: ${latitude}, Longitude: ${longitude}`;
      await Share.share({
        message: locationString,
      });
    } catch (error) {
      console.log('Error sharing location:', error);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.detInfo}>
        <Text style={styles.locationText}>Titik Koordinat Lokasi Anda:</Text>
        <Text style={styles.txtKoor}>
          Latitude: {latitude}, Longitude: {longitude}
        </Text>
      </View>


      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={handleCopyLocation}>
          <Image source={copy} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={handleShareLocation}>
          <Image source={share} style={styles.icon} />
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default LocationInfo;
