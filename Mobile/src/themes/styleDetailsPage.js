import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import { styleAttraction } from './styleAttractionPage';
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
export const styleDetailsPage = StyleSheet.create({
    View: {
        width: width,
        backgroundColor: '#FFF',
        position: 'absolute',
        top: 245.75 + 42,
    },
    viewTop: {
        height: 48,
        width: 380,
        marginLeft: (width-380)/2,
        position: 'absolute',
        borderWidth: 0,
        top: statusBarHeight,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        
    },
    btnChevron:{
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FF852C',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
    },
    btnTB:{
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F7F7F9',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0
    },
    viewMenu: {
        width: width - 9,
        height: 65,
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 4.5,
    },
    viewBtnMenu: {
        width: (width-18)/3,
        height: 65,
        backgroundColor: '#E4E4E4',
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'row'
    },
    icon: {

    },
    text: {
        color: '#4A4A4A',
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        fontSize: 15.36,
    },
    textDetails: {
        color: '#FFF',
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        fontSize: 20,
    },
    viewAddTour: {
        position: 'absolute',
        width: 350,
        height: 50,
        borderWidth: 1,
        backgroundColor: '#FFF',
        marginLeft: (width-350)/2,
        borderRadius: 30,
        bottom: 35,
        flexDirection: 'row'
    },
    viewDateTime: {
        width: 80,
        height: 40,
        borderWidth: 0,
        marginTop: 5,
        marginLeft: 15,
        
    },
    viewTopDateTime: {
        width: 80, 
        height: 20,
        borderWidth: 0,
        flexDirection : 'row',
        alignItems: 'center'
    },
    viewBotDateTime:{
        width: 80, 
        height: 20,
        borderWidth: 0,
    },
    btnCalendar: {
        height: 20,
        width: 45, 
        flexDirection: 'row',
        borderWidth: 0,
        alignItems: 'center'
    },
    textStartEnd: {
        color: '#4A4A4A',
        fontSize: 11,
        fontFamily: 'Montserrat Medium'
    },
    textTime: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'Montserrat Bold'
    },
    textDate: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'Montserrat Bold'
    },
    viewPrice: {
        width: 80,
        height: 40,
        borderWidth: 0,
        marginTop: 5,
        marginLeft: 10,
    },
    textPrice: {
        color: '#4A4A4A',
        fontSize: 11,
        fontFamily: 'Montserrat Medium',
    },
    textP: {
        color: 'rgba(255, 107, 0, 1)',
        fontSize: 12,
        fontFamily: 'Montserrat Medium'
    },
    btnAdd: {
        width: 60,
        height: 30,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 133, 44, 1)',
        position: 'absolute',
        right: 10,
        top: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textAdd: {  
        color: '#FFF',
        fontSize: 13.165,
        fontFamily: 'Montserrat SemiBold'

    }

    
})
export const styleInfoPage = StyleSheet.create({
    scrollView: {
        width: width,
        backgroundColor: '#FFF',
        position: 'relative',
    },
    viewLocation: {
        width: 380,
        height: 41,
        borderWidth: 0,
        marginTop: 18.65,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: (width-380)/2
    },
    viewRate: {
        width: 380,
        height: 22,
        borderWidth: 0,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: (width-380)/2

    },
    viewImage: {
        height: 100,
        borderWidth: 0 ,
        marginTop: 16.65,
        flexDirection: 'row',
        marginLeft: (width-380)/2
    },
    

    viewMota: {
        width: 380,
        height: 156,
        borderWidth: 0,
        marginTop: 30,
        marginLeft: (width-380)/2
        
    },
    viewInfo: {
        width: 380,
        height: 230,
        borderWidth: 0,
        marginLeft: (width-380)/2,
        marginBottom: 0,
        
    },
    textDes: {
        color: '#1B1E28',
        fontSize: 17.55,
        fontFamily: 'Montserrat SemiBold',
        position: 'absolute'
    },
    iconLocation: {
        position: 'absolute',
        left: 240,

    },
    textLocation: {
        color: '#6F757C',
        fontSize: 15.36,
        fontFamily: 'Montserrat SemiBold',
        position: 'absolute',
        left: 258
    },
    iconStar: {

    },
    textRate: {
        color: '#1B1E28',
        fontSize: 15.36,
        fontFamily: 'Montserrat Regular',
        position: 'absolute',
        left: 20,
    },
    textSoLuong: {
        color: '#7D848D',
        fontSize: 15.36,
        fontFamily: 'Montserrat Regular',
        position: 'absolute',
        left: 46
    },
    textMota: {
        color: '#7D848D',
        fontSize: 15.36,
        lineHeight: 22,
        fontFamily: 'Montserrat Regular',
        letterSpacing: 0.329
    },
    textReadmore: {
        color: '#FF852C',
        fontSize: 15.36,
        lineHeight: 22,
        fontFamily: 'Montserrat Regular',
        letterSpacing: 0.329
    },
    viewDetails: {
        width: 380,
        height: 20,
        borderWidth: 0, 
        flexDirection :'row',
        alignItems :'center',
        marginTop: 20,
    },
    textDetails1: {
        color: '#FF6B00',
        fontSize: 14,
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1
    },
    textDetails2: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'Montserrat Regular',
        position: 'absolute',
        left: 150
    },
    
})
export const styleRaittingsPage = StyleSheet.create({
    View: {
        width: width,
        borderWidth: 0,
    },
    view: {
        marginTop : 15,
        height: 75,
        width: 380,
        borderWidth: 0,
        flexDirection : 'row',
        marginLeft: (width-380)/2,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    viewLeft: {
        width: 170,
        height: 75,
        borderWidth: 0,
    },
    viewRight: {
        width: 120,
        height: 75,
        borderWidth: 0,
    },
    viewProductRatings: {
    },
    viewTextPR: {
        width: 170,
        height: 27,
        justifyContent: 'center',
        borderWidth: 0,
    },
    textPR: {
        fontSize: 17.554,
        fontFamily: 'Montserrat Bold',
        color: '#1B1E28',
        
    },
    viewTextRaitting: {
        width: 150,
        height: 26,
        borderWidth: 0,
        justifyContent: 'center',
    },
    textRaitings: {
        fontSize: 15.36,
        fontFamily: 'Montserrat Regular',
        color: '#FF6B00'
    },
    viewIconStar: {
        width: 150,
        height: 17,
        flexDirection :'row',
        borderWidth: 0,
        alignItems: 'center'
    },
    btnReview: {
        width: 70,
        height: 25,
        borderRadius: 9.33,
        backgroundColor: '#FF852C',
        alignItems: 'center',
        position: 'absolute',
        right: 0
        
        
    },
    textReview: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'Montserrat SemiBold',
        lineHeight: 22,
        position: 'absolute',
        top: 2,
    },
    dropdown: {
        width: 120,
        height: 23,
        borderWidth: 1,
        position: 'absolute',
        borderRadius: 17.5,
        bottom: 0,
        alignItems: 'center'
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        marginLeft: 13,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 13,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight : 5,
    },
    inputSearchStyle: {
        height: 23,
        fontSize: 16,
        fontFamily: 'Montserrat SemiBold',
    },
    itemDropStyle: {
        fontSize: 16,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
        padding: 0,
        position: 'absolute',
        textAlign: 'center',
        left: 13,
       

    },
    itemsStyle: {
        height: 30,
        justifyContent: 'center',
         borderRadius: 17.5,
        
       
        
    },
    dropStyle: {
        borderRadius: 17.5,
    }


})