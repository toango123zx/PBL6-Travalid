import React from "react";
import { useState, useEffect } from "react";
import {
    Dimensions,
    StatusBar,
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native'

const { width, height } = Dimensions.get('window');

const statusBarHeight = StatusBar.currentHeight || 0;
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default WalletPage = () =>{
    const navigation = useNavigation()
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        // Fetch the balance from AsyncStorage
        const fetchBalance = async () => {
        try {
            const storedBalance = await AsyncStorage.getItem('balance');
            // Parse the storedBalance to a number if needed
            const balanceValue = parseFloat(storedBalance);
            setBalance(balanceValue);
            
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
        };

        fetchBalance();
    }, []); 
    return(
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack} onPress={()=>{navigation.goBack()}}>
                    <Icon name = 'chevron-back' color = '#FFF' size = {25}/>
                </TouchableOpacity>
                <Text style = {style.textAddProduct}>Wallet</Text>
                
            </View>
            <View style = {style.viewBalance}>
                <Text style = {style.textBalance}>{balance !== null ? balance: '0'}</Text>
                <Text style = {{...style.textBalance, fontSize: 20, fontFamily: 'Montserrat Medium', position: 'absolute', bottom: 0, right: 0}}>VND</Text>
            </View>
            <TouchableOpacity style = {style.btnHistory}>
                <Text style = {style.textHisory}>History</Text>
            </TouchableOpacity>
            <View>

            </View>
        </View>
    )
}
const style = StyleSheet.create({
    View: {
        width: width,
        height: height,
        marginTop: statusBarHeight,
        alignItems: 'center',
        backgroundColor: "#FFF"
    }
    ,viewHeader: {
        marginTop: 10,
        width: 380,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,btnBack: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FF852C',
        position: 'absolute',
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,textAddProduct: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        fontSize: 20,
    }
    ,btnAdd: {
        position: 'absolute',
        right: 0
    }
    ,textAdd: {
        color: '#FF6B00',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 18
    }
    ,viewBalance: {
        
        height: 70,
        marginTop: 40
        ,borderWidth: 0
    }
    ,textBalance: {
        color: '#FF852C',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 40,
        textAlign: 'center',
        
    }
    ,btnHistory: {
        width: 120,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#FF852C',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
    ,textHisory: {
        fontFamily: 'Montserrat SemiBold',
        color: '#FFF',
        fontSize: 17
    }
})