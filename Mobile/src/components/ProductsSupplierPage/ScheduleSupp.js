import React from "react";
import { StyleSheet, Vibration, View, Dimensions, Text, TouchableOpacity, Alert } from 'react-native'

const { width, height } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../../API/auth";
const DeleteSchedule = async (id_schedule) => {
    try {
        const token = "bearer " + await AsyncStorage.getItem('userToken')
        const res = await authApi.deleteSchedule(id_schedule,{
            "token": token
        })
        console.log(res.status)
        Alert.alert("Delete done")
    } catch (error) {
        console.log(error)
    }
}

export default ScheduleSupp = ({data, role})=> {
    
    const startTime = new Date (data.start_time);
    const endTime = new Date (data.end_time);
    const formattedDateStart = `${startTime.getFullYear()}/${String(startTime.getMonth() + 1).padStart(2, '0')}/${String(startTime.getDate()).padStart(2, '0')}, ${String(startTime.getHours()).padStart(2, '0')}:${String(startTime.getMinutes()).padStart(2, '0')}`;
    
    const formattedDateEnd = `${endTime.getFullYear()}/${String(endTime.getMonth() + 1).padStart(2, '0')}/${String(endTime.getDate()).padStart(2, '0')}, ${String(endTime.getHours()).padStart(2, '0')}:${String(endTime.getMinutes()).padStart(2, '0')}`;
    return (
        <View style = {style.View}>
            <View style = {{...style.view, marginTop: 5}}>
                
                <Text style = {style.textTime}>{formattedDateStart}</Text>
                <Text style = {style.textTime}>{formattedDateEnd}</Text>
            </View>
            <View style = {{...style.view, justifyContent: 'flex-start'}}>
                <View style = {style.viewName}>
                    <Text numberOfLines={1} ellipsizeMode="tail"  style = {style.textName}>{data.name}</Text>
                </View>
                <Text style = {style.textValue}>{data.price} VND</Text> 
                
            </View>
            <View style = {style.view}>
                <View style = {style.viewPoint}>
                    
                    <Text style = {style.textQuantity}>{data.quantity} people</Text>
                </View>
                
                {data.status === 'active'? <Text style = {style.textStatusAvailable}>AVAILABLE</Text> : <Text style = {style.textStatusCanceled}>CANCELED</Text>}

                { role === 'travel_supplier' ?(<TouchableOpacity style = {style.btnDelete} onPress={()=>{DeleteSchedule(data.id_schedule_product)}}>
                    <Icon name = 'trash-outline' size = {20} color = '#000'/>
                </TouchableOpacity>): null}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        width: 380,
        height: 100,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: '#FFF',
        marginTop: 10,
        marginBottom: 10,
        elevation: 5
    }
    ,view: {
        width: 350,
        height: 30,
        borderWidth: 0,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    ,viewPoint: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,

    textTime: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 17
    }
    ,textValue: {
        color: '#FF6B00',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 20,
    }
    ,viewName: {
        height: 30,
        width: 200,
        justifyContent: 'center',
        borderWidth: 0

    }
    ,textName: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
    }
    ,textCity: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
        marginLeft: 2
    }
    ,textQuantity: {
        color: '#5F6C72',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
    }
    ,textStatusAvailable: {
        color: '#2DB224',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
    },
    textStatusCanceled: {
        color: '#FF0000',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
    }
    ,btnDelete: {
        flexDirection: 'row',
        height: 30,
        width: 30,
        borderRadius: 10,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0
    }
    ,textEdit: {
        color: '#2DA5F3',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
    }

})