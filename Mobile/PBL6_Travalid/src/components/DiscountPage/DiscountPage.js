import React from "react";
import {useState} from 'react';
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
import Discounts from "./Discounts";
import Icon from 'react-native-vector-icons/Ionicons'
const statusBarHeight = StatusBar.currentHeight || 0;
const { width, height } = Dimensions.get('window');
export default DiscountPage = () => {
    return(
        <View style = {{width: "100%",height: "100%", backgroundColor: '#FFF', top : statusBarHeight}}>
            <StatusBar translucent backgroundColor="transparent"/>
            
            <ScrollView contentContainerStyle = {style.ScrollView}>
                <Discounts/>
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
        height: height,
        alignItems: 'center',
        marginTop :10
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

