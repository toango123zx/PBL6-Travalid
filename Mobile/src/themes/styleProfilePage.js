import { StyleSheet, Dimensions , StatusBar} from "react-native";
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

export const styleProfilePage = StyleSheet.create({
    View: {
        width: width,
        height: height,
        backgroundColor: '#FFF',
        position: 'absolute',
        top: statusBarHeight,
    },
    viewText: {
        width: 80,
        height: 48,
        marginTop: 10,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: (width-80)/2
    },
    textProfile: {
        color: '#1B1E28',
        fontSize: 20,
        fontFamily: 'Montserrat SemiBold'
    },
    viewAvatar: {
        width: 105,
        height: 105,
        marginTop: 0 + statusBarHeight,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 52.5,
        backgroundColor: '#E4E4E4',
        marginLeft: (width-105)/2
    },
    viewName: {
        width: 300,
        height: 38,
        marginTop: 9,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: (width-300)/2
    },
    textName: {
        color: '#1B1E28',
        fontSize: 26.331,
        fontFamily: 'Montserrat Medium'
    },
    viewBtnProfile: {
        width: 370,
        height: 55,
        marginTop: 24,
        borderWidth: 0,
        marginLeft: (width-370)/2 ,
        
        
    },
    BtnProfile: {
        width: 370,
        height: 55,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0,
        borderRadius: 15,
        backgroundColor: '#F7F7F9',
        elevation: 5,
    },
    viewBtnBill: {
        width: 370,
        height: 55,
        marginTop: 13.2,
        borderWidth: 0,
        marginLeft: (width-370)/2 
    },
    viewBtnSetting: {
        width: 370,
        height: 55,
        marginTop: 13.2,
        borderWidth: 0,
        marginLeft: (width-370)/2 
    },
    viewBtnVersion: {
        width: 370,
        height: 55,
        marginTop: 13.2,
        borderWidth: 0,
        marginLeft: (width-370)/2 
    },
    viewBtnLogout: {
        width: 165,
        height: 43,
        marginTop: 25,
        marginLeft: (width-165)/2        
    },
    icon1: {
        position: 'absolute',
        left: 18,
    },
    text1: {
        position: 'absolute',
        color: '#1B1E28',
        left: 60,
        fontSize: 17.55,
        fontFamily: 'Montserrat Medium'
    },
    iconChevronforward: {
        position: 'absolute',
        right: 18
    },
    textLogout: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Montserrat Medium',
        position: 'absolute',
        left: 30

    },
    iconLogout: {
        position: 'absolute',
        right: 30,
    },
    BtnLogout: {
        width: 165,
        height: 43,
        marginTop: 0,
        borderWidth: 0,
        borderRadius: 11,
        backgroundColor: '#FF852C',
        flexDirection: 'row',
        alignItems: 'center',
    }

})

export const styleProfileDetails = StyleSheet.create({
    View: {
        width: width,
        height: height,
        top: statusBarHeight,
        backgroundColor: '#FFF'
    },
    viewTop:{
        width: 380,
        height: 48,
        marginLeft: (width-380)/2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        top: 10 ,
        alignItems: 'center',
        
        
    },
    btnBack: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(255, 133, 44, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textProfile: {
        color: '#1B1E28',
        fontSize: 20,
        fontFamily: 'Montserrat SemiBold'
    },
    btnEdit: {
        width: 48,
    },
    textEdit:{
        fontSize: 17.554,
        color: '#FF6B00',
        fontFamily: 'Montserrat SemiBold'    
    },
    ScrollView: {
        width: width,
        position: 'relative',
        
        
    },
    viewPersonalInfo: {
        height: 90,
        width: 380,
        marginLeft: (width-380)/2,
        borderWidth: 0,
        marginTop: 16,
    },
    textPersonalInfo: {
        color: '#1B1E28',
        fontFamily: 'Montserrat Medium',
        fontSize: 20,
        letterSpacing: 0.5,
    },
    view: {
        width: 380,
        height: 52,
        borderWidth: 0,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#F7F7F9',
        justifyContent: "center"
        
    },
    text: {
        color: '#1B1E28',
        fontFamily: 'Montserrat Regular',
        fontSize: 17.55,
        letterSpacing: 0.3,
        marginLeft: 23,
        
    }

})