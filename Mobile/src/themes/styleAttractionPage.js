import { StyleSheet, Dimensions , StatusBar} from "react-native";
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
export const styleAttraction = StyleSheet.create({
    View: {
        width: 175,
        height: 236,
        backgroundColor: '#FFF',
        marginLeft: 0,
        borderRadius: 17.5,
        marginBottom: 26,
        borderWidth: 0,
        elevation: 4
    },
    viewPicture: {
        width: 150,
        height: 136,    
        marginLeft: 12.5,
        marginTop: 12.5,
        
        borderRadius: 17.5,
    },
    image: {
        width: 150,
        height: 136
    },
    viewName: {
        width: 160,
        height: 18,
        marginTop: 8.7,
        borderWidth: 0,
        marginLeft: 14,
        justifyContent: 'center'
    },
    viewLocation: {
        width: 160,
        height: 20,
        borderWidth: 0,
        marginLeft: 14,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 7,
    },
    viewRate: {
        width: 160,
        height: 20,
        borderWidth: 0,
        marginLeft: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3
    },
    viewPrice: {
        width: 160,
        height: 20,
        borderWidth: 0,
        marginLeft: 10,
        justifyContent: 'center'
    },
    
    name: {
        color: '#1B1E28',
        fontSize: 13.165,
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 0.56,
    },
    location: {
        color: '#6F757C',
        fontSize: 13.165,
        fontFamily: 'Montserrat Medium'
    },
    rate: {
        color: '#1B1E28',fontSize: 13.165,
        fontFamily: 'Montserrat Regular',
        letterSpacing: 0.3
    },
    price: {
        color: '#1B1E28'
    }
})

export const styleAttractionPage = StyleSheet.create({
    View: {
        width: width,
        height: height,
        backgroundColor: '#FFF'
    },
    viewText: {
        width: '100%',
        height: 20,
        borderWidth: 0,
        marginTop: 30
    },
    text: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        textAlign: 'center'
    },
    viewSearchPlace: {
        width: 380,
        height: 55,
        borderWidth: 0,
        marginLeft: (width - 380) / 2,
        borderRadius: 16,
        backgroundColor: '#F7F7F9',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    viewTextInput: {
        width: 230,
        height: 55,
        borderWidth: 0,
        marginLeft: 20,
        justifyContent: 'center'
    },
    textInputSeach: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Montserrat Regular',
        letterSpacing: 0.5
    },
    touchPlace:{
        width: 130,
        height: 30,
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 2,
        borderLeftColor: '#7D848D'
    },
    textPlace: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Montserrat Medium',
        
    },
    viewModal: {
        backgroundColor: '#F7F7F9',
        width: 130,
        height: 300,
        borderRadius: 16,
        position: 'absolute',
        top: 118,
        left: (width - 380) / 2 + 250 

    },
    viewListPlace: {
        borderWidth: 0,
        marginTop: 2
    },
    textListPlace: {
        color: '#000',
        fontFamily: 'Montserrat Regular',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 25,
    },

    viewFilterPrice: {
        width: 380,
        height: 55,
        borderWidth: 0,
        marginLeft: (width - 380) / 2,
        borderRadius: 16,
        flexDirection: 'row',
        marginTop: 35
    },
    textPrice: {
        marginLeft : 14,
        color: '#000',
        fontFamily: 'Montserrat Regular',

    },
    viewPrice: {
        width: 140,
        height: 55, 
        borderWidth: 0,
        marginRight: 22.5,
        borderRadius: 16,
        backgroundColor : '#F7F7F9',
        justifyContent: 'center'
        
    },
    viewButtonSearch: {
        width: 55,
        height: 55,
        borderWidth: 0,
        borderRadius: 50,
        
    },
    buttonSearch: {
        width: 55,
        height: 55,
        borderWidth: 0,
        borderRadius: 50,
        backgroundColor: '#FF852C'
    },

    viewAttractions: {
        width: 380,
        marginLeft: (width - 380) / 2,
        justifyContent: 'space-between',
        flexDirection: 'row', 
        flexWrap: 'wrap', 
    }

}) 