import React from "react";
import { 
    View,
    Dimensions,
    StatusBar, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import { useNavigation } from "@react-navigation/native";

export default OrderComplete = () => {
    const navigation = useNavigation()
    return(
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <TouchableOpacity style = {style.btnHome}>

            </TouchableOpacity>
            <Text style = {style.textOderComplete}>
                Order complete
            </Text>
            <Text style = {style.textThankYou}>
                Thank You For Your Purchase
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        width: width,
        height: height,
        marginTop: statusBarHeight,
        backgroundColor: '#FFF',
        alignItems: 'center'
    }
    , textOderComplete: {
        fontFamily: 'Montserrat SemiBold',
        color: '#FF6B00',
        fontSize: 25,
        marginTop: 60
    }
    ,textThankYou: {
        fontFamily: 'Montserrat Regular',
        color: '#000',
        fontSize: 16,
        marginTop: 10
    },
    btnHome: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FF852C',
        position: 'absolute',
        top: 10,
        left: (width-380)/2
    }
})