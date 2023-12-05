import { StyleSheet, Dimensions , StatusBar} from "react-native";
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
export const styleHomePage =  StyleSheet.create({
    View: {
        width: width,
        height: height, 
        backgroundColor: '#FFF',
        position: 'absolute',
        top: statusBarHeight,
    },
    view: {
        width: 380,
        height: 48,
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: (width - 380)/2,
        marginTop: 10,
        position: 'absolute',
    },
    ScrollView: {
        position: 'relative',
    },
    viewUser: {
        width: 165,
        height: 48,
        borderWidth: 0,
        flexDirection: 'row',
        borderRadius: 24,
        alignItems: 'center',
        backgroundColor: '#F7F7F9',
        elevation: 10
    },
    viewUserName: {
        width: 117,
        height: 48,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    imageUser: {
        width: 48,
        height: 48,
        borderWidth: 0,
        borderRadius: 24,
        backgroundColor: '#000'
    },
    textUserName: {
        color: '#1B1E28',
        fontSize: 15.36,
        fontFamily: 'Montserrat Medium',
    },
    viewNofitication: {
        width: 48,
        height: 48,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor : '#FFF',
        elevation: 5
    },
    viewImage: {
        width: 330,
        height: 330,
        borderWidth: 0,
        marginTop: 28,
        marginLeft: (width-330)/2
    },
    viewLogo:{
        width: 110,
        height: 110,
        borderWidth: 0,
        position: 'absolute',
        borderRadius: 60,
        backgroundColor: '#E9FF62',
        elevation: 5
    },
    logo: {
        width: 110,
        height: 110,
        
    },
    viewImageBg: {
        width: 330,
        height: 330,
        borderWidth: 0,
        position: 'absolute',
        
    },
    viewImage1: {
        width: 110,
        height: 110,
        borderWidth: 0,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 55,
        
        elevation: 5
    },
    imagebg: {
        width: 330,
        height: 330, 
    },
    image1: {
        width: 110,
        height: 110,
    }

    
})

export const styleTopDestination = StyleSheet.create({
    ViewText: {
        width: 380,
        height: 32,
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: (width-380)/2,
        marginTop: 44
    },
    textTopDes: {
        fontSize: 27,
        fontFamily: 'Montserrat SemiBold',
        color: '#FF6B00',
        textAlignVertical: 'center'
    },
    textViewAll: {
        color: '#0D6EFD',
        fontSize: 15.36,
        fontFamily: 'Montserrat Regular',
        textAlignVertical: 'center'
    },
    ViewDes: {
        width: 380,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: (width-380)/2,
        justifyContent: 'space-between',
        marginTop: 20,
        flexWrap: 'wrap', 
    }


})

export const styleService = StyleSheet.create({
    ViewText: {
        width: 380,
        height: 55,
        borderWidth: 0,
        marginLeft: (width-380)/2,
        marginTop: 44
    },
    textServices: {
        fontSize: 27,
        fontFamily: 'Montserrat SemiBold',
        color: '#FF6B00',
        textAlignVertical: 'center'
    },
    text: {
        color: '#000',
        fontSize: 17.554,
        fontFamily: 'Montserrat SemiBold',
        textAlignVertical: 'center'
    },
    ViewAllServices: {
        width: 380,
        height: 288 + 95,
        marginLeft: (width-380)/2,
        marginTop: 10,
        borderWidth: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
         
    },
    ViewServices: {
        width: 110,
        height: 110,
        marginTop: 18,
        borderWidth: 0,
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: "#000",
        borderRadius: 11,
        backgroundColor: '#FFF',
        elevation: 4,
        
        
    },
    ViewIcon: {
        width: 38,
        height: 38,
        borderWidth: 0,
        marginTop : 22,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems:'center',
    },
    text: {
        color: '#000',
        fontSize: 11,
        fontFamily: 'Montserrat SemiBold',
    },
    image: {
        width: 38,
        height: 38,
    }
})