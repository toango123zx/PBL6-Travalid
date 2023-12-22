import { StyleSheet, Dimensions , StatusBar} from "react-native";
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

const styleForgotPassPage = StyleSheet.create({
    View: {
        height: height,
        width: width,
        backgroundColor: '#FFF',
        position: 'absolute',
        top: statusBarHeight,
    },
    viewTop: {
        height: '33%',
        width: '100%',
        borderWidth: 0
    },
    viewMid: {
        height: '20%',
        width: '100%',
        borderWidth: 0
    },
    viewBot: {
        height: '40%',
        width: '100%',
        borderWidth: 0
    },
    viewTopChange: {
        height: '25%',
        width: '100%',
        borderWidth: 0
    },
    viewMidChange: {
        height: '28%',
        width: '100%',
        borderWidth: 0
    },
})
const styleTopFPPage = StyleSheet.create({
    View: {
        height: '100%',
        width: '100%',
        borderWidth: 0,
    },
    viewButton: {
        height: 48.273,
        width: 48.273,
        marginLeft: 21.94,
        borderRadius: 50,
        backgroundColor: '#F7F7F9',
        marginTop: 20,
        borderWidth: 0,
        
    },
    viewText: {
        height: '55%',
        width: '100%',
        marginTop: height*0.25*0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
    },
    viewText1: {
        height: '55%',
        width: '100%',
        marginTop: height*0.25*0.1,
        justifyContent: 'left',
        alignItems: 'left',
        borderWidth: 0,
    },
    text1: {
        color: '#1B1E28',
        fontSize: 28.525,
        fontFamily: 'Montserrat SemiBold',
        lineHeight: 70
    },
    buttonBack: {
        width: '100%',
        height: '100%',
        borderWidth: 0,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text2: {
        color: '#7D848D',
        fontSize: 17.55,
        fontFamily: 'Montserrat Regular',
        lineHeight: 30
    },
    text3: {
        color: '#7D848D',
        fontSize: 17.55,
        fontFamily: 'Montserrat Bold',
        lineHeight: 20,
    },

})
const styleMidFPPage = StyleSheet.create({
    View: {
        height: '100%',
        width: '100%',
        borderWidth: 0,
    },
    viewUserName: {
        height: 61.5,
        width: 367.5,
        marginLeft: (width - 367.5)/2,
        marginTop: height*0.3*0.05,
        marginBottom: height*0.3*0.05,
        backgroundColor: '#F7F7F9',
        borderRadius: 16,
        justifyContent:'center',
        borderWidth: 0
    },
    viewPassword: {
        height: 61.5,
        width: 367.5,
        marginLeft: (width - 367.5)/2,
        marginTop: height*0.3*0.05,
        marginBottom: height*0.3*0.05,
        backgroundColor: '#F7F7F9',
        borderRadius: 16,
        flexDirection: 'row',
        borderWidth: 0
    },
    OTPStyle: {
        backgroundColor: '#F7F7F9',
        borderRadius: 16,
        height: 61.5,
        width: 61.5,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 1
    },
    viewOTP: {
        height: 61.5,
        width: 367.5,
        marginLeft: (width - 367.5)/2,
        marginTop: height*0.5*0.05,
        marginBottom: height*0.3*0.05,
        borderRadius: 16,
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 0
    },
    textInputUserName: {
        color: '#1B1E28',
        fontFamily: 'Montserrat Regular',
        fontSize: 16,
        
        marginLeft: (height*0.3*0.25)/2-12
    },
    textInputPass: {
        color: '#1B1E28',
        fontFamily: 'Montserrat Regular',
        fontSize: 16,
        width: 380,
        marginLeft: (height*0.3*0.25)/2-12
    },    
    touchHiddenPass: {
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
        borderWidth: 0,
        position: 'absolute',
        marginRight: (height*0.3*0.25)/2-12 ,
        right: 0
    },
    viewText: {
        height: '55%',
        width: '100%',
        marginTop: height*0.25*0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
    },
    text1: {
        color: '#7D848D',
        fontSize: 15.36,
        marginLeft: (width - 367.5)/2,
        fontFamily: 'Montserrat',
        lineHeight: 40
    },
    text2: {
        color: '#7D848D',
        fontSize: 17.55,
        marginLeft: (width - 367.5)/2,
        fontFamily: 'Montserrat Bold',
        lineHeight: 40
    },

})
const styleBotFPPage = StyleSheet.create({
    View: {
        height: '100%',
        width: '100%',
        borderWidth: 0,
    },
    viewButtonNext: {
        height: 61.5,
        width: 367.5,
        marginLeft: (width - 367.5)/2,
    },
    buttonNext: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF852C'
    },
    textNext: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Montserrat SemiBold'
    },

    view1:{
        marginTop: '10%',
        height: '30%',
        width: '100%',
        borderWidth: 0
    },
    view11: {
        height: '40%',
        width: '100%',
        borderWidth: 0,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textSignIn: {
        fontSize: 14,
        color: '#FF6B00',
        fontFamily: 'Montserrat Medium'
    },
    text1: {
        fontSize: 14,
        color: '#707B81',
        fontFamily: 'Montserrat Regular'
    },
    view2:{
        width: '100%',
        height: 44,
        flexDirection: 'row',
        position: 'absolute',
        bottom: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0
    },
    button: {
        width: 44,
        height: 44,
        marginLeft: '2.5%',
        marginRight: '2.5%'
    }
})
export {styleBotFPPage,styleMidFPPage,styleForgotPassPage,styleTopFPPage}