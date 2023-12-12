import { StyleSheet, Dimensions , StatusBar} from "react-native";
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

const styleSignUpPage = StyleSheet.create({
    View: {
        height: height,
        width: width,
        backgroundColor: '#FFF',
        position: 'absolute',
        top: statusBarHeight,
        
    },
    viewTop: {
        height: '25%',
        width: '100%',
        borderWidth: 0
    },
    viewMid: {
        height: '40%',
        width: '100%',
        borderWidth: 0
    },
    viewBot: {
        height: '30%',
        width: '100%',
        borderWidth: 0
    }

})
const styleTopSUPage = StyleSheet.create({
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
        justifyContent: 'center',
        alignItems: 'center',
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
    text1: {
        color: '#1B1E28',
        fontSize: 28.525,
        fontFamily: 'Montserrat SemiBold',
        lineHeight: 37.3
    },
    text2: {
        color: '#7D848D',
        fontSize: 17.55,
        fontFamily: 'Montserrat Regular',
        lineHeight: 40
    },
    buttonBack: {
        width: '100%',
        height: '100%',
        borderWidth: 0,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0
    }
})
const styleMidSUPage = StyleSheet.create({
    View: {
        height: '100%',
        width: '100%',
        borderWidth: 0,
    },
    viewUserName: {
        height: 61.5,
        width: 367.5,
        marginLeft: (width - 367.5)/2,
        
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
        justifyContent:'center',
        borderWidth: 0
    },
    viewForgotPass: {
        height: '10%',
        width: '90%',
        borderWidth: 0,
        marginLeft: '5%',
        marginTop: height*0.3*0.02
    },
    touchForgotPass: {
        height: '100%',
        width: '40%',
        marginLeft: '60%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textForgotPass: {
        color: '#FF6B00',
        fontFamily: 'Montserrat Medium',
        fontSize: 14,
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
        marginLeft: (height*0.3*0.25)/2-12
    },

    // Drop down supplier
    dropdown: {
        width: 367.5,
        height: 61.5,
        borderWidth: 0,
        backgroundColor: '#F7F7F9',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: (width - 367.5)/2,
        marginTop: height*0.3*0.05,
    },
    icon: {
        marginRight: 0,
    },
    placeholderStyle: {
        color: '#7D848D',
        fontFamily: 'Montserrat Regular',
        fontSize: 16,
        marginLeft: (height*0.3*0.25)/2-12 + 4,
        
    },
    selectedTextStyle: {
        color: '#1B1E28',
        fontFamily: 'Montserrat Regular',
        fontSize: 16,
        marginLeft: (height*0.3*0.25)/2-12 + 4
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight : 18,
    },
    inputSearchStyle: {
        height: 23,
        fontSize: 16,
        fontFamily: 'Montserrat SemiBold',
    },
    itemDropStyle: {
        color: '#1B1E28',
        fontFamily: 'Montserrat Regular',
        fontSize: 16,
        padding: 0,
        position: 'absolute',
        textAlign: 'center',
        left: (height*0.3*0.25)/2-12 + 3,
       

    },
    itemsStyle: {
        height: 30,
        justifyContent: 'center',
         borderRadius: 17.5,
        
       
        
    },
    dropStyle: {
        borderRadius: 16,
        backgroundColor: '#F7F7F9'
    }


})
const styleBotSUPage = StyleSheet.create({
    View: {
        height: '100%',
        width: '100%',
        borderWidth: 0,
    },
    viewButtonSignIn: {
        height: 61.5,
        width: 367.5,
        marginLeft: (width - 367.5)/2,
    },
    buttonSignIn: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF852C'
    },
    textSignIn: {
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
    text1: {
        fontSize: 14,
        color: '#707B81',
        fontFamily: 'Montserrat Regular'
    },
    textSignUp: {
        fontSize: 14,
        color: '#FF6B00',
        fontFamily: 'Montserrat Medium'
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
        width: 50,
        height: 50,
        marginLeft: '2.5%',
        marginRight: '2.5%',
        borderWidth: 0,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export {styleBotSUPage,styleMidSUPage,styleSignUpPage,styleTopSUPage}