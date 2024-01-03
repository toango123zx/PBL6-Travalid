import React, { useEffect, useState } from "react";
import { 
    View,
    Dimensions,
    StatusBar, 
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native'
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import Bill from "./Bill";
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../../API/auth";
import { useNavigation } from "@react-navigation/native";
export default OrderHistoryPage = ({route}) =>{
    const navigation = useNavigation()
    const {user} = route.params;
    const [page1, setPage1] = useState(1)
    const [bill, setBill] = useState([])
    useEffect(()=>{
        const getBill = async ()=> {
            try {
                
                const token = "bearer " + await AsyncStorage.getItem('userToken')
                //console.log(token)

                if (user.role === 'traveller') {
                    const res = await authApi.getPurchaseBill(page1,{
                        "token" : token,
                    })
                    //console.log(JSON.stringify(res.data.data,null, 3))
                    setBill(res.data.data)
                } else {
                    const res = await authApi.getSellBill({
                        "token" : token,
                    })
                    //console.log(JSON.stringify(res.data.data,null, 3))
                    setBill(res.data.data)
                }
                
                
                
            } catch (error) {
                console.log(error)
            }
        }

        getBill();
        //console.log(bill);
        
    },[page1])

    return(
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack} onPress={()=> {navigation.goBack()}}>
                    <Icon name = 'chevron-back' size = {25} color = '#FFF'/>
                </TouchableOpacity>
                <Text style = {style.textOderHistory}>Order History</Text>
            </View>
            <ScrollView contentContainerStyle = {style.scrollView} >
                {bill.map((bill)=>(     
                    <Bill key={bill.id_bill} billData = {bill}  role ={user.role}/>
                ))}
                <View style = {style.viewPage}>
                    <TouchableOpacity style = {style.btnPage} 
                    onPress={()=> {
                        if (page1>1) setPage1(page1-1) 
                    }}>
                        <Icon name = 'arrow-back' color = '#FFF' size = {25}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {style.btnPage} 
                    onPress={()=>{
                        setPage1(page1+1)
                    }}>
                        <Icon name = 'arrow-forward' color = '#FFF' size = {25}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        width: width,
        height: height,
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginTop: statusBarHeight
    }
    ,scrollView: {
        width: width,
        alignItems: 'center'
    }
    ,viewHeader: {
        width: 380,
        height: 48,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10
    }
    ,btnBack: {
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF852C',
        position: 'absolute',
        left: 0,

    }
    ,textOderHistory: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        fontSize: 20,
    }
    ,viewPage: {
        width: 200,
        height: 40,
        borderWidth: 0,
        marginBottom: 0,
        
        bottom: 0,
        borderRadius: 20,
        
        elevation: 0,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    }
    ,btnPage: {
        height: 40,
        width: 70,
        borderRadius: 20,
        backgroundColor: '#FF852C',
        justifyContent: 'center',
        alignItems: 'center'
    }
})