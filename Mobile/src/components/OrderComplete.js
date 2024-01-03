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
import Icon from 'react-native-vector-icons/Ionicons'
export default OrderComplete = () => {
    const navigation = useNavigation()
    return(
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <TouchableOpacity style = {style.btnHome} onPress={()=>{navigation.navigate('Home1')}}>
                <Icon name = 'home-outline' size = {25} color ='#FFF'/>
            </TouchableOpacity>
            <Text style = {style.textOderComplete}>
                Order complete
            </Text>
            <Text style = {style.textThankYou}>
                Thank You For Your Purchase
            </Text>
            <TouchableOpacity style ={style.btnOrderH}>
                <Text style = {style.textOrderH}>Order History</Text>
            </TouchableOpacity>
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
        marginTop: 200
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
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        left: (width-380)/2
    }
    ,btnOrderH: {
        width: 150,
        height: 50,
        backgroundColor: '#FF852C',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    }
    ,textOrderH: {
        color: '#FFF',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 18
    }
})