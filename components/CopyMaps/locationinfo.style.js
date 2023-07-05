import { StyleSheet } from 'react-native';
import {
    greenPrimary,
    greenThird
} from '../../constant/color';
const styles = StyleSheet.create({
    container: {
        height: '10%',
        flexDirection: 'row',
        elevation: 3,
        paddingHorizontal: 10,
        backgroundColor: greenPrimary
    },
    detInfo: {
        left: -10,
        padding: 5,
        justifyContent: 'center'
    },
    locationText: {
        fontFamily: 'DMBold',
        marginBottom: 10,
        fontSize: 16
    },
    txtKoor: {
        fontSize: 11
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        left: 10,
    },
    iconButton: {
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor: greenThird,
        elevation:1
    },
    icon: {
        margin: 5,
        width: 30,
        height: 30,
    },
});

export default styles;
