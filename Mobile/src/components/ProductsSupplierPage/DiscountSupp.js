import React from "react";
import { StyleSheet, Vibration, View, Dimensions, Text, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";

export default ProductSupp = ({data, role})=> {
    const start = new Date (data.start_time);
    const end = new Date (data.end_time);
    
    return (
        <View style = {style.View}>
            <View style = {{...style.view, marginTop: 5}}>
                
                <Text style = {style.textTime}>{start.getUTCDate()}/{start.getUTCMonth()}/{start.getUTCFullYear()}, {start.getUTCHours()}:{start.getUTCMinutes()}</Text>
                <Text style = {style.textTime}>{end.getUTCDate()}/{end.getUTCMonth()}/{end.getUTCFullYear()}, {end.getUTCHours()}:{end.getUTCMinutes()}</Text>
            </View>
            <View style = {{...style.view, justifyContent: 'flex-start'}}>
                <View style = {style.viewName}>
                    <Text numberOfLines={1} ellipsizeMode="tail"  style = {style.textName}>{data.name}</Text>
                </View>
                <Text style = {style.textValue}>-{data.value}%</Text> 
                
            </View>
            <View style = {style.view}>
                <View style = {style.viewPoint}>
                    <Icon/>
                    <Text style = {style.textQuantity}>{data.point} Added</Text>
                </View>
                
                {data.status === 'active'? <Text style = {style.textStatusAvailable}>AVAILABLE</Text> : <Text style = {style.textStatusCanceled}>CANCELED</Text>}

                { role === 'admin' ?(<TouchableOpacity style = {style.btnDelete}>
                    <Icon name = 'trash-outline' size = {25} color = '#000'/>
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
        fontSize: 22,
    }
    ,viewName: {
        height: 30,
        width: 250,
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
        borderRadius: 7,
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