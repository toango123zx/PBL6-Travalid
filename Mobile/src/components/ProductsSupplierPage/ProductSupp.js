import React, { useState } from "react";
import { StyleSheet, Vibration, View, Dimensions, Text, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";

export default ProductSupp = ({data})=> {
    const navigation = useNavigation()
    const [idP, setIdP] = useState(data.id_product)
    return (
        <View style = {style.View}>
            <View style = {{...style.view, marginTop: 5}}>
                <Text style = {style.textName}>{data.name}</Text>
                <Text style = {style.textStatus}>AVAILABLE</Text>
            </View>
            <View style = {{...style.view, justifyContent: 'flex-start'}}>
                <Icon name = 'location-outline' size = {15} color = '#6F757C'/>
                <Text style = {style.textCity}>{data.city}</Text>
                <TouchableOpacity style = {style.btnAddSchedule} onPress={()=>{
                    navigation.navigate('AddSchdule',{idP, name: data.name})
                }}>
                    <Text style = {style.textAddSchedule}>Add schdule</Text>
                </TouchableOpacity>
            </View>
            <View style = {style.view}>
                <Text style = {style.textQuantity}>{data.quantity} people</Text>
                <Text style = {style.textTime}>{data.time} hours</Text>
                <TouchableOpacity style = {style.btnEdit}>
                    <Text style = {style.textEdit}>Edit </Text>
                    <Icon name = 'arrow-forward' size = {18} color = '#2DA5F3'/>
                </TouchableOpacity>
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
    ,btnAddSchedule: {
        height: 20,
        width: 100,
        backgroundColor: '#FF852C',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0
    }
    ,textAddSchedule: {
        color: '#FFF',
        fontFamily: 'Montserrat Medium',
        fontSize: 14,
        
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
    ,

    textName: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 17
    }
    ,textStatus: {
        color: '#2DB224',
        fontFamily: 'Montserrat Medium',
        fontSize: 16
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
    ,textTime: {
        color: '#5F6C72',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
    }
    ,btnEdit: {
        flexDirection: 'row'
    }
    ,textEdit: {
        color: '#2DA5F3',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
    }
})