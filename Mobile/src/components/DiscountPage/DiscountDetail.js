import React from "react";
import {
    View,
    Image,
    Text,
    StatusBar,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import Discounts from "./Discounts";
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import { useEffect, useState } from "react"; 'react'
import authApi from "../../API/auth";
export default DiscountDetail = ({route}) => {
    const [product, setProduct] = useState([])
    const {discountData} = route.params
    const navigation = useNavigation();
    const startTime = new Date(discountData.start_time)
    const endTime = new Date(discountData.end_time)

    useEffect(()=>{
        
        const getDetailProduct = async () => {
            try {
                const res = await authApi.getDetailProduct(discountData.id_product)
                setProduct(res.data.data)
                console.log(product)
            } catch (error) {
                console.log(error)
            }
        }
        
        getDetailProduct();
    },[])

    return(
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent"/>
            <View style = {style.top}>
                <TouchableOpacity style = {style.btnBack} onPress={() => {navigation.goBack()}}>
                    <Icon name="chevron-back" color="#FFF" size={25}/>
                </TouchableOpacity>
            </View>
            <View style = {{ width: width, height:720, borderWidth: 0, elevation: 0}}>
                <View style = {{alignItems: 'center'}}>
                    <Discounts discountData={discountData}/>
                </View>

                <View style = {style.viewValidPeriod}>
                    <Text style = {style.textTitle}>Valid Period</Text>
                    <View style = {style.view1}>
                        <Text style = {style.text1}>From </Text>
                        <Text style = {{...style.text2, position: 'absolute', left: 60}}>{startTime.getUTCHours()}:{startTime.getUTCMinutes()}, {startTime.getUTCDay()}/{startTime.getUTCMonth()+1}/{startTime.getUTCFullYear()}</Text>
                    </View>
                    <View style = {style.view1}>
                        <Text style = {style.text1}>To </Text>
                        <Text style = {{...style.text2, position: 'absolute', left: 60}}>{endTime.getUTCHours()}:{endTime.getUTCMinutes()}, {endTime.getUTCDay()}/{endTime.getUTCMonth()+1}/{endTime.getUTCFullYear()}</Text>
                    </View>
                </View>
                <View style = {style.viewValue}>
                    <Text style = {style.textTitle}>Value</Text>
                    <Text style = {{...style.text2, marginTop: 5}}>Discount {discountData.value}%</Text>
                </View>
                <View style = {style.viewRemainingAmount}>
                    <Text style = {style.textTitle} >Remaining Amount</Text>
                    <Text style = {{...style.text2, marginTop: 5}}>{discountData.quantity} code left</Text>
                </View>
                <View style = {style.viewMoreDetails}>
                    <Text style = {style.textTitle}>More Details</Text>
                    <View style = {style.view1}>
                        <Text style = {style.text1}>Discount name: </Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style = {{...style.text2, position: 'absolute', left: 140}}>{discountData.name}</Text>
                    </View>
                    <View style = {style.view1}>
                        <Text style = {style.text1}>Provide name: </Text>
                        <Text   style = {{...style.text2, position: 'absolute', left: 140}}>{discountData.supplier === 'travel_supplier'? 'SUPPLIER' : 'TRAVALID'}</Text>
                    </View>
                    
                    <View style = {style.view1}>
                        <Text style = {style.text1}>Destinatiion: </Text>
                        <Text style = {{...style.text2, position: 'absolute', left: 140}}>{product.city}</Text>
                    </View>
                    <View style = {style.view1}>
                        <Text style = {style.text1}>Rate: </Text>
                        <Text style = {{...style.text2, position: 'absolute', left: 140}}>{product.avg_rate}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        width: width,
        height: height,
        top: statusBarHeight,
        backgroundColor: '#FFF'
    }
    ,top: {
        width: 380,
        height: 48,
        marginLeft: (width - 380) / 2,
        backgroundColor: 'rgba(0,0,0,0,1)',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20
    }
    ,btnBack: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF852C'
    }
    ,viewValidPeriod: {
        width: 380,
        marginLeft: (width-380)/2,
        borderWidth: 0,
        height: 100,
        marginTop: 30
    }
    ,viewValue: {
        width: 380,
        marginLeft: (width-380)/2,
        borderWidth: 0,
        height: 60, 
        marginTop: 30
    }
    ,viewRemainingAmount: {
        width: 380,
        marginLeft: (width-380)/2,
        borderWidth: 0,
        height: 60,
        marginTop: 30
    }
    ,viewMoreDetails: {
        width: 380,
        marginLeft: (width-380)/2,
        borderWidth: 0,
        height: 300,
        marginTop: 30
    }
    ,textTitle: {
        color: '#FF6B00',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 16,
        marginBottom: 5
    }
    ,text1: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 15
    }
    ,text2: {
        color: '#000',
        fontFamily: 'Montserrat Regular',
        fontSize: 15,
        width: 210,
        
        
    }
    ,view1: {
        flexDirection: 'row',
        height: 30,
        alignItems : 'center'
    }
})