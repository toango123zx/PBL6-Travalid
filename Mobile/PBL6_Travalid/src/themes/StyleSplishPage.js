import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
const styleSplishPage = StyleSheet.create({
    View: {
        width: width,
        height: height,
        
    },
    ViewLogo: {
        width: '75%',
        height: '12%',
        borderWidth: 0,
        flexDirection : 'row',
        marginLeft: '12.5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        
        marginBottom : '15%',
        position: 'absolute',
    },
    ViewUserCount1: {
        width: '65%',
        height: '8%',
        justifyContent: 'center',
        left: '5%',
        top: '25%',
        position: 'absolute',
        borderWidth: 0
    },
    ViewUserCount2: {
        width: '65%',
        height: '8%',
        justifyContent: 'center',
        left: '5%',
        top: '35%',
        position: 'absolute',
        borderWidth: 0
    },
    View1: {
        width: '75%',
        height: '7.5%',
        marginLeft: '12.5%',
        borderWidth: 0,
        position: 'absolute',
        bottom: width*0.125
    },
    TouchableOpacity: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#FF852C',
        alignItems: 'center',
        justifyContent: 'center'   
    },
    TextT: {
        color: '#FF6B00',
        fontFamily: 'OleoScript Regular',
        fontSize: 64
    },
    TextRAVALID: {
        color: '#000',
        fontFamily: 'OleoScript Regular',
        fontSize: 64
    },
    TextUserCount: {
        color: '#000',
        fontFamily: 'Mogra Regular',
        fontSize: 32,
        lineHeight: 32
    },
    Text: {
        color: '#000',
        fontFamily: 'Montserrat Regular',
        fontSize: 20,
    },
    Text1: {
        color: '#FFF',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 20
    },
    Background:{
        width: '100%',
        height: '100%'
    },
    Image1: {

    }
})

export {styleSplishPage}