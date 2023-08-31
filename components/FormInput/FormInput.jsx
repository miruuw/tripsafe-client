import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { greenPrimary } from '../../constant/color';

const FormInput = props => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>{label}</Text>
        {error ? (
          <Text style={{
            color: 'red', 
            fontSize: 12,
            backgroundColor: 'yellow',
            borderRadius: 5,
            padding: 3
          }}>{error}</Text>
        ) : null}
      </View>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: greenPrimary,
    height: 50,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default FormInput;
