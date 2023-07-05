import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '90%',
      },
      locationButton: {
        position: 'absolute',
        bottom: 90,
        right: 16,
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 8,
      },
      locationButtonIcon: {
        width: 24,
        height: 24,
        tintColor: 'black',
      },
})

export default styles;