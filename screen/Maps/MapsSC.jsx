import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './maps.style';
import { currentmaps } from '../../constant/icons';
import LocationInfo from '../../components/CopyMaps/LocationInfo';

const MapsSC = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const getCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Izin lokasi tidak diberikan');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

      // Zoom otomatis ke lokasi saat ini
      if (mapRef.current) {
        mapRef.current.animateCamera({
          center: {
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
          },
          zoom: 15,
        });
      }
    };

    getCurrentLocation();
  }, []);

  const handleGetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Izin lokasi tidak diberikan');
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);

    // Perbarui tampilan peta ke lokasi saat ini
    if (mapRef.current) {
      mapRef.current.animateCamera({
        center: {
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
        },
        zoom: 15,
      });
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} ref={mapRef}>
        {location?.coords && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            anchor={{ x: 0.5, y: 0.5 }}
            flat
            rotation={location.coords.heading}
          />
        )}
      </MapView>
      {errorMsg && <Text>{errorMsg}</Text>}

      {/* -------------------------------- */}
      
      <TouchableOpacity style={styles.locationButton} onPress={handleGetCurrentLocation}>
        <Image source={currentmaps} style={styles.locationButtonIcon} />
      </TouchableOpacity>

      {/* ------------------------------- */}

      {location?.coords && (
        <LocationInfo
          latitude={location.coords.latitude}
          longitude={location.coords.longitude}
        />
      )}
    </View>
  );
};

export default MapsSC;
