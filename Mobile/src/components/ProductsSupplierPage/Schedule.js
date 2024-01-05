import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export default Discount = ({data, deleteEvent}) => {
    const startTime = new Date(data.start_time)
    const formattedDateStart = `${startTime.getFullYear()}/${String(startTime.getMonth() + 1).padStart(2, '0')}/${String(startTime.getDate()).padStart(2, '0')} ${String(startTime.getHours()).padStart(2, '0')}:${String(startTime.getMinutes()).padStart(2, '0')}`;
    const endTime = new Date(data.end_time)
    const formattedDateEnd = `${endTime.getFullYear()}/${String(endTime.getMonth() + 1).padStart(2, '0')}/${String(endTime.getDate()).padStart(2, '0')} ${String(endTime.getHours()).padStart(2, '0')}:${String(endTime.getMinutes()).padStart(2, '0')}`;
    return(
        <View style = {style.View}>
            <View style = {style.time}>
                <View style = {style.time1}>
                    <Text style = {style.text}>Start:</Text>
                    <Text style = {style.textTime}>{formattedDateStart}</Text>
                </View>
                <View style = {style.time1}>
                    <Text style = {style.text}>End:</Text>
                    <Text style = {style.textTime}>{formattedDateEnd}</Text>
                </View>
            </View>
            <View style = {style.price}>
                <Text style = {style.textPrice}>{data.price}</Text>
                <Text style = {{...style.textPrice, fontSize: 13, marginTop: 3}}> VND</Text>
            </View>
            <TouchableOpacity style= {style.delete} onPress={()=>{deleteEvent(data.key)}}>
                <Icon name = 'trash-outline' size = {20} color = '#000'/>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    View: { 
        width: 359,
        height: 50,
        backgroundColor: '#EEEEFF',
        borderRadius: 7,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
        
    }
    ,time: {
        width: 150,
        height: 40,
        borderWidth: 0,
        marginLeft: 10,
        justifyContent: 'space-between'
    }
    ,time1: {
        width: '100%',
        height: '45%',
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,text: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 13,
        letterSpacing: 0.5
    }
    ,textTime: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 12,
        position: 'absolute',
        left: 40,
        top: 1,
        letterSpacing: 0.5
    }
    ,price: {
        width: 135,
        height: 50,
        borderWidth: 0,
        marginLeft: 10,
        //justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,textPrice: {
        fontFamily: 'Montserrat SemiBold',
        fontSize: 18,
        color: '#FF6B00',
        letterSpacing: 0.5
    }
    ,delete: {
        width: 35,
        height: 35,
        borderRadius: 15,
        borderWidth: 1,
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
        
    }
})