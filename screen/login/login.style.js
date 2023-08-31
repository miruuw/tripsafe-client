import { StyleSheet } from "react-native";
import {
    greenPrimary,
    greenSecondary,
    black
} from '../../constant/color';

const styles = StyleSheet.create({
    Flex: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    FlexIcon: {
        alignSelf: 'center',
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: greenPrimary,
        height: 60,
        paddingVertical: 5,
        flexDirection: 'row'
    },
    icoAdd: {
        width: 28,
        height: 28,
        maxWidth: 40,
        maxHeight: 40,
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    icoLock: {
        width: 28,
        height: 38,
        maxWidth: 40,
        maxHeight: 40,
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textInput: {
        width: 318,
        height: 60,
        borderColor: greenPrimary,
        alignSelf: 'center',
        marginVertical: 2.33,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 18
    },
    logo: {
        alignSelf: 'center',
        marginTop: 120
    },
    WrapperRegister: {
        alignItems: 'center',
        marginTop: 30,
    },
    TxtRegis: {
        fontFamily: 'DMBold',
        fontSize: 20,
        color: greenPrimary,
    },
    TxtRegis2: {
        fontFamily: 'DMMedium',
        fontSize: 14,
        color: greenSecondary
    },
    WrapperInput: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 10,
        width: 370
    },
    viewButton: {
        width: 370,
        height: 60,
        alignItems: 'center',
        backgroundColor: greenPrimary,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 3
    },
    textLogin: {
        color: 'white',
        fontFamily: 'DMMedium',
        fontSize: 18
    },
    TxtBtm: {
        textAlign: 'center',
        marginTop: 20,
        color: black
    },
    google: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        alignSelf: 'center',
        marginTop: 30
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgot: {
        fontSize: 13,
        color: '#000',
    },
    clBlAkun: {
        flexDirection: 'row', 
        alignSelf: 'center', 
        marginTop: 30
    },
    txtBlakun: {
        fontSize: 15, 
        fontWeight: '500' 
    },
    txtDfCurrent: {
        color: greenPrimary, 
        fontSize: 15, 
        fontFamily: 'DMBold',
        marginLeft: 10
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: 'yellow',
        borderRadius: 5,
        padding: 3
      },

})

export default styles;