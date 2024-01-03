import React, { useEffect } from "react";

import {
    View,
    Text,
    Dimensions,
    StatusBar,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { useState } from "react";
import useFocusEffect from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import { useDispatch } from "react-redux";
import { setSharedData } from "../../reducers/actions";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import authApi from "../../API/auth";

export default Schedule = ({scheduleData, product, navigate}) => {
    const startDate = new Date (scheduleData.start_time);
    const endDate = new Date (scheduleData.end_time);
    const [showAdd, setShowAdd] = useState(false)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    useEffect(()=>{
        const currentDate = new Date()
        console.log(currentDate)
        console.log(startDate)
        if (startDate>currentDate) {
            setShowAdd(true)
        } else setShowAdd(false)
    },[])
    const addScheduleToCart = async () => {
        try {
            console.log(scheduleData.id_schedule_product)
            const token = "bearer " + await AsyncStorage.getItem('userToken')
            const res = await authApi.addScheduleToCart({
                id_schedule_product: scheduleData.id_schedule_product
            },{
                "token": token
            })
            console.log(res.status)
        } catch (error) {
            console.log(error)
        }
    }
    const dataToSend = {
        id: product.id_product,
        id_schedule: scheduleData.id_schedule_product,
        name: product.name,
        city: product.city,
        image: product.image,
        location: product.location,
        price: scheduleData.price,
        yearStart: startDate.getUTCFullYear(),
        monthStart: startDate.getUTCMonth()+1,
        dayStart: startDate.getUTCDate(),
        hourStart: startDate.getUTCHours(),
        minStart: startDate.getUTCMinutes(),
        yearEnd: endDate.getUTCFullYear(),
        monthEnd: endDate.getUTCMonth()+1,
        dayEnd: endDate.getUTCDate(),
        hourEnd: endDate.getUTCHours(),
        minEnd: endDate.getUTCMinutes(),
    }
    const goToCart = ()=> {
        dispatch(setSharedData(dataToSend));
        console.log ('Data da gui di: '+dataToSend)
        if(navigate===false) navigation.navigate('SignInPage')
    }
    return(
        <View style = {style.View}>
            <View style = {style.viewTop}>
                <View style = {style.viewStartTime}>
                    <Icon name = 'calendar-start' color = '#000' size = {30}/>
                    <View style = {{marginLeft: 7}}>
                        <Text style = {style.text}>Start </Text>
                        <Text style = {style.text1}>{startDate.getUTCHours()}:{startDate.getUTCMinutes()}, {startDate.getUTCDate()}/{startDate.getUTCMonth()+ 1}/{startDate.getUTCFullYear()}</Text>
                    </View>
                </View>
                <View style = {style.viewEndTime}>
                    <Icon name = 'calendar-end' color = '#000' size = {30}/>
                    <View style = {{marginLeft: 7}}>
                        <Text style = {style.text}>End </Text>
                        <Text style = {style.text1}>{endDate.getUTCHours()}:{endDate.getUTCMinutes()}, {endDate.getUTCDate()}/{endDate.getUTCMonth()+1}/{endDate.getUTCFullYear()}</Text>
                    </View>
                </View>
            </View>
            <View style = {style.viewMid}>
                <View style = {style.viewBooked}>
                    <Icon name = 'calendar-start' color = '#000' size = {30}/>
                    <View style = {{marginLeft: 7}}>
                        <Text style = {style.text}>Booked</Text>
                        <Text style = {style.text1}>{scheduleData.booked}</Text>
                    </View>
                </View>
                <View style = {style.viewPrice}>
                    <Text style = {style.textPrice}>{scheduleData.price}</Text>
                    <Text style = {style.textVND}> VND</Text>
                </View>
            </View>
            <View style = {style.viewBottom}>
                <View style = {style.viewStatus}>
                    <Icon name = 'check-circle-outline' color = '#01AB31' size = {25}/>
                    <Text style = {style.textStatus}>{scheduleData.status === 'active' ? 'Active' :  null}</Text>
                </View>
                {showAdd === false ? (
                    <TouchableOpacity style = {style.btnAdd} >
                    <Text style = {style.textAdd}>Add</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style = {style.btnAdd} onPress={addScheduleToCart}>
                    <Text style = {style.textAdd}>Add</Text>
                    </TouchableOpacity>
                )}
                
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    View: {
        width: width,
        height: 168,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 0,
        backgroundColor: '#FFF',
        elevation: 4
    }
    //Top
    ,viewTop: {
        height: 50,
        width: 380,
        marginLeft: (width-380)/2,
        borderWidth: 0,
        marginTop: 9,
        flexDirection: 'row'
    }
    ,viewStartTime: {
        height: 50, 
        width: 180,
        marginRight: 10,
        borderWidth: 0,
        alignItems: 'center',
        flexDirection: 'row'

    }
    ,viewEndTime: {
        height: 50, 
        width: 180,
        marginLeft: 10,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,text: {
        fontSize: 12,
        color: 'rgba(74, 74, 74, 1)',
        fontFamily: 'Montserrat Medium'
    }
    ,text1: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Montserrat Bold'
    }
    //Mid
    ,viewMid: {
        height: 50,
        width: 380,
        marginLeft: (width-380)/2,
        borderWidth: 0,
        flexDirection: 'row'
    }
    ,viewBooked:{
        height: 50,
        width: 180,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,viewPrice: {
        height: 50,
        width: 180,
        flexDirection: 'row',
        
        
        
    }
    ,textPrice: {
        fontFamily: 'Montserrat Medium',
        color: 'rgba(255, 107, 0, 1)',
        fontSize: 30,
        position: 'absolute',
        bottom: 8
    }
    ,textVND: {
        fontFamily: 'Montserrat Medium',
        color: 'rgba(255, 107, 0, 1)',
        fontSize: 18,
        position: 'absolute',
        bottom: 11,
        right: 8
        
    }
    //Bottom
    ,viewBottom: {
        height: 50,
        width: 380,
        marginLeft: (width-380)/2,
        borderWidth: 0,
        flexDirection: 'row'
    }
    ,viewStatus: {
        height: 50,
        width: 180,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,textStatus: {
        fontFamily: 'Montserrat SemiBold',
        color: '#01AB31',
        fontSize: 15,
        marginLeft: 5
    }
    ,btnAdd: {
        height: 30,
        width: 100,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 133, 44, 1)',
        marginTop: 10,
        marginLeft: 40 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,textAdd: {
        color: '#FFF',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 15
    }

})