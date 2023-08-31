import { StyleSheet } from "react-native";
import { black, greenPrimary, greenSecondary} from '../../constant/color';

const styles = StyleSheet.create({
    Container: {
        paddingTop: 20
    },
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
        marginVertical: 25
    },
    TxtRegis: {
        fontFamily: 'DMBold',
        fontSize: 24,
        color: greenPrimary,
    },
    TxtRegis2: {
        fontFamily: 'DMMedium',
        fontSize: 16,
        color: greenSecondary
    },
    WrapperInput: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 15,
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
        color: black,
        fontFamily: 'DMRegular'
    },
    google: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignSelf: 'center',
        marginTop: 20
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})

export default styles;