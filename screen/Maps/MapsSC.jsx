import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './maps.style';

import {
  currentmaps
} from '../../constant/icons'

const MapsSC = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    // Mendapatkan izin lokasi dari pengguna
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Izin lokasi tidak diberikan');
        return;
      }

      // Mendapatkan posisi perangkat
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleGetCurrentLocation = async () => {
    // Meminta izin lokasi dari pengguna jika belum diberikan
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Izin lokasi tidak diberikan');
      return;
    }

    // Mendapatkan posisi perangkat saat ini
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      {location && (
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        />
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
      <TouchableOpacity style={styles.locationButton} onPress={handleGetCurrentLocation}>
        <Image source={currentmaps} style={styles.locationButtonIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default MapsSC;
