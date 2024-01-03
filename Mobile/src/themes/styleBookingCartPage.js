import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import { styleAttraction } from './styleAttractionPage';
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

export const styleCartPage = StyleSheet.create ({
    View: {
        width: width,
        height: height,
        backgroundColor: '#FFF',
        position: 'absolute',
        top: statusBarHeight,

    },
    viewTop: {
        width: 380,
        height: 48,
        borderWidth: 0,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: (width-380)/2,
        justifyContent: 'center',
        alignItems : 'center'
    },
    textHeader: {
        color: '#FF6B00',
        fontSize: 22,
        fontFamily: 'Montserrat SemiBold',

    },
    viewBottom: {
        width: width,
        height: 140,
        backgroundColor: '#FFF',
        elevation: 10,
        flexDirection: 'row'
    },

    //Quantity
    viewQuantity: {
        width: 110,
        height: 75,
        borderWidth: 0,
        marginTop: 3,
        marginLeft: (width-280-100)/2
    },
    textQuantity: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 14,
        marginTop: 5
    },
    viewAddQuantity: {
        width: '100%',
        height: 30,
        borderWidth: 0,
        marginTop: 10,
        flexDirection: 'row'
    },
    btnTru: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnCong: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 80,
    },
    inputQuantity: {
        width: 110 - 60,
        height: 30,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.5)',
       
    },
    inputQuantity1: {
        width: 110 - 60,
        height: 30,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        position: 'absolute',
        bottom: -0,
        fontFamily: 'Montserrat Medium',
        fontSize: 22,
        textAlign: 'center',
        color: '#000'
       
    },
    view1: {
        width: width,
        height: 75,
        borderWidth: 0,
        flexDirection: 'row'
    },
    view11: {
        width: 255,
        height: 75,
        borderWidth: 0,
        marginLeft: 15,
        marginTop: 8
    },

    //Voucher 
    viewVoucher: {
        width: '100%',
        height: 25,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textVoucher: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 14,
    },
    btnSelectVoucher: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        height: 25,
        borderWidth: 0,
        alignItems: 'center'
    },
    textSelect: {
        color: '#6F757C',
        fontFamily: 'Montserrat Medium',
        fontSize: 12,
    },
    //Seved
    viewSaved: {
        width: '100%',
        height: 25,
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textSaved1: {
        fontFamily: 'Montserrat Medium',
        fontSize: 14,
        color: '#000'
    },
    textSaved2: {
        fontFamily: 'Montserrat Regular',
        fontSize: 14,
        color: '#FF6B00'
    },
    //Total
    viewSubTotal: {
        width: 100,
        height: 60,
        borderWidth: 0,
        
        marginTop: 10,
        
        position: 'absolute',
        left: (width-380)/2,
        
    },
    textTotal1: {
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
        color: '#000',
        
    },
    textTotal2: {
        fontFamily: 'Montserrat SemiBold',
        fontSize: 20,
        color: '#FF6B00',
        
    },
    view2: {
        width: 380,
        height: 45,
        borderWidth: 0,
        marginLeft: (width-380)/2,
        marginTop: 15,
        flexDirection: 'row'
    },
    viewCheckBoxAll:{
        width: '25%',
        height: '100%'
    },
    btnCheckOut: {
        width: 250,
        height: 50,
        backgroundColor: '#FF852C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
        marginTop: 10,
        position: 'absolute',
        right: (width-380)/2
        
    },
    textCheckOut: {
        fontFamily: 'Montserrat SemiBold',
        fontSize: 18,
        color: '#FFF',
        

    }
    

})