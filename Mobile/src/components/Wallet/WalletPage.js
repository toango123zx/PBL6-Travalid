import React from "react";
import { useState, useEffect } from "react";
import {
    Dimensions,
    StatusBar,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'

const { width, height } = Dimensions.get('window');

const statusBarHeight = StatusBar.currentHeight || 0;
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../../API/auth";
export default WalletPage = ({route}) =>{
    const {id} = route.params
    const navigation = useNavigation()
    const [balance, setBalance] = useState(null);
    const [price, setPrice] = useState(100000);
    const [b, setB] = useState(null)
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
        const getProfileUser = async () =>{

            // const token = "bearer " + await AsyncStorage.getItem('userToken')
            // //     console.log(token)
            // axios.get('http://10.0.2.2:8000/user/me', {
            //     headers:{
            //         'token': token
            //     }})
            //     .then((res)=>{
            //         console.log(res.data)
            //     })
            //     .catch((err)=>{
            //         console.log(err)
            //     })
            try {
                
                const token = "bearer " + await AsyncStorage.getItem('userToken')
                console.log(token)
                const res = await authApi.getProfileUser({
                    "token" : token,
                })
                setB(res.data.data.balance)
                
                
            } catch (error) {
                console.log(error)
            }
        }
        getProfileUser();
        console.log(b)
        fetchBalance();
    }, [b]); 
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
                <Text style = {style.textBalance}>{b !== null ? b: '0'}</Text>
                <Text style = {{...style.textBalance, fontSize: 20, fontFamily: 'Montserrat Medium', position: 'absolute', bottom: 0, right: 0}}>VND</Text>
            </View>
            <TouchableOpacity style = {style.btnHistory}>
                <Text style = {style.textHisory}>History</Text>
            </TouchableOpacity>
            <View style = {style.view}>
                <TouchableOpacity style = {style.touch} onPress={()=> {setPrice(100000)}}>
                    <Text style = {style.textP}>100000</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.touch} onPress={()=> {setPrice(200000)}}>
                    <Text style = {style.textP}>200000</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.touch} onPress={()=> {setPrice(500000)}}>
                    <Text style = {style.textP}>500000</Text>
                </TouchableOpacity>

            </View>
            <View style = {style.view}>
                <TouchableOpacity style = {style.touch} onPress={()=> {setPrice(1000000)}}>
                    <Text style = {style.textP}>1000000</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.touch} onPress={()=> {setPrice(2000000)}}>
                    <Text style = {style.textP}>2000000</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.touch} onPress={()=> {setPrice(5000000)}}>
                    <Text style = {style.textP}>5000000</Text>
                </TouchableOpacity>

            </View>
            <Image style = {{width: 350, height: 500}} source={{
                    uri: "https://img.vietqr.io/image/MB-0332039626-print.png?addInfo=NAP"+id+"&accountName=NGUYEN%20NHO%20QUOC%20VIET&amount="+price+"&fbclid=IwAR3QJqcmWzWSxtY0Ajf4l0zGb-6eInCkQE0jz1d4GuvVPmSG1T0JFTpGmWg"
                    }}/>
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
        marginTop: 20,
        marginBottom: 10
    }
    ,textHisory: {
        fontFamily: 'Montserrat SemiBold',
        color: '#FFF',
        fontSize: 17
    }
    ,view: {
        width: 330,
        height: 40,
        marginTop: 10,
        borderWidth: 0,
        justifyContent: 'space-between',
        flexDirection: 'row'

    }
    ,touch: {
        width: 102,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }
    ,textP: {
        fontFamily: 'Montserrat Medium',
        fontSize: 17,
        color: '#000'
    }
})