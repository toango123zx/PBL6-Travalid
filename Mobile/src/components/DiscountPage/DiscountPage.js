import React from "react";
import {useState, useEffect} from 'react';

import{ 
    View, 
    Text, 
    Image, 
    StatusBar, 
    ScrollView, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    SafeAreaView} from 'react-native'
import DiscountsComp from "./Discounts";
import Icon from 'react-native-vector-icons/Ionicons'
const statusBarHeight = StatusBar.currentHeight || 0;
const { width, height } = Dimensions.get('window');
import authApi from "../../API/auth";
export default DiscountPage = () => {
    const [discountData, setDiscountData] = useState([]);
    
    useEffect(() => {
        const getDiscount = async () => {
        
            // const data = {
            //     method: 'GET',
            //     headers: {
            //         //'Cache-Control': 'no-cache',
            //         //Pragma: 'no-cache',
            //         //Expires: 0,
            //         //Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            // }
            //     fetch('http://192.168.33.207:8000/discount/all', data)
            //     .then((response) => 
            //     {
            //         return response.json()
            //     }
            //     //response.json()
            //     )
            //     .then( res => {
            //         // Chuyển đổi mỗi chuỗi JSON thành đối tượng JavaScript
            //         setDiscountData(res.data);
                    
            //     })
            //     .catch((err)=>{console.log(err)})
            try {
                const res = await authApi.getAllDiscount()
                setDiscountData(res.data.data)
            } catch (error) {
                console.log(error)
            }
                
            }
        getDiscount();
        
    }, [])
    
    return(
        <View style = {{width: "100%",height: "100%", backgroundColor: '#FFF', top : statusBarHeight}}>
            <StatusBar translucent backgroundColor="transparent"/>
            
            <ScrollView contentContainerStyle = {style.ScrollView}>
                <View style = {style.viewBestDeal}>
                    <View style = {style.viewText}>
                        <Text style = {style.textBestDeal}>Best Deal</Text>
                    </View>
                    {discountData.slice(120,122).map((discountData)=>(
                        <DiscountsComp key={discountData.id_discount} discountData = {discountData}/>
                    ))}
                </View>
                <View style = {style.viewDiscounts}>
                    <View style = {style.topDiscount}>
                        <Text style = {style.textBestDeal} >Discounts</Text>
                        <TouchableOpacity style ={{flexDirection: 'row', borderWidth: 0, alignItems: 'center'}}>
                            <Text style = {style.textSeeAll}>See all </Text>
                            <Icon name = 'arrow-forward' color = '#FF6B00' size ={15}/>
                        </TouchableOpacity>
                    </View>
                    <View style = {{alignItems: 'center', height: 770}}>
                        {discountData.slice(38,43).map((discountData)=>(
                            
                            <DiscountsComp key={discountData.id_discount} discountData = {discountData}/>
                        ))}
                    </View>
                    
                </View>
                
            </ScrollView>
            
            <View style = {style.top}>
                <TouchableOpacity style = {style.btnThongBao}>
                    <Icon name = 'notifications-outline' color = '#000' size = {30}/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    ScrollView: {
        width: width,
        alignItems: 'center',
        marginTop : 10,
    },
    // best deal
    viewBestDeal: {
        height: 290,
        width: width,
        alignItems: 'center',
        borderWidth: 0,
        marginTop: 50
    },
    viewText: {
        width: 380,
        height: 25,
        marginLeft: 0,
        borderWidth: 0
    },
    textBestDeal: {
        color: '#191C1F',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 16,
        marginBottom: 5,
        //marginLeft: (width-380)/2
        
    },
    //Discounts
    viewDiscounts:{
        width: width
    },
    //Top 
    topDiscount: {
        width: 380,
        height: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: (width-380)/2,
        alignItems: "center",
        borderWidth: 0
        
    },
    textSeeAll: {
        color: '#FF6B00',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 13,

    },
    top: {
        width: 380,
        height: 48,
        marginLeft: (width-380)/2,
        marginTop: 10,
        marginBottom: 10,
        position: 'absolute'
        
    }
    ,btnThongBao: {
        width: 48, 
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: '#FFF',
        position: 'absolute',
        right: 0,
        elevation: 5
    }
})

