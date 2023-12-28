import React, { useEffect, useState } from "react";
import {
    ScrollView,View,Text, TouchableOpacity, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styleInfoPage} from "../../themes/styleDetailsPage";
import Schedule from "./Schedule";
import { useFocusEffect } from "@react-navigation/core";
export default InfoPage = ({product,scheduleData, navigate}) => {
    

    useEffect (()=>{
        console.log(product.image);
    },[])
    return(
        
        <ScrollView style = {styleInfoPage.scrollView}>
            <View style = {styleInfoPage.viewLocation}>
                <Text style = {styleInfoPage.textDes}>{product.name}</Text>
                <Icon Icon style = {styleInfoPage.iconLocation} name="location-outline" color="#7D848D" size={16}/>
                <Text style = {styleInfoPage.textLocation}>{product.city}</Text>
            </View>
            <View style = {styleInfoPage.viewRate}>
                <Icon Icon style = {styleInfoPage.iconStar} name="star" color="#FFD336" size={16}/>
                <Text style = {styleInfoPage.textRate}>{product.avg_rate}</Text>
                <Text style = {styleInfoPage.textSoLuong}>({product.count_rate})</Text>
            </View>
            <ScrollView style = {styleInfoPage.viewImage}>
                <Image style = {{width: 100, height: 100, borderRadius: 10}} source={{
                    uri: product.image
                    }}/>
            </ScrollView>
            <View style = {styleInfoPage.viewMota}>
                <Text style = {styleInfoPage.textMota}>{product.description}</Text>
                <TouchableOpacity><Text style = {styleInfoPage.textReadmore}>Read more</Text></TouchableOpacity>
            </View>
            <View style = {styleInfoPage.viewInfo}>
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Destination</Text>
                    <Text style = {styleInfoPage.textDetails2}>{product.city}</Text>
                </View>
                
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Time</Text>
                    <Text style = {styleInfoPage.textDetails2}>{product.time} hours</Text>
                </View>
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Quantily</Text>
                    <Text style = {styleInfoPage.textDetails2}>{product.quantity}</Text>
                </View>
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Count compelete</Text>
                    <Text style = {styleInfoPage.textDetails2}>24</Text>
                </View>
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Location on Map</Text>
                    <Text style = {styleInfoPage.textDetails2}>{product.location_map}</Text>
                </View>
            </View>

            {(scheduleData).map((scheduleData) => (
                <Schedule key={scheduleData.id_schedule_product} scheduleData={scheduleData} product = {product} navigate = {navigate} />
            ))}
            <View style = {{height: 100}}>
                
            </View>
        </ScrollView>   
       
                        
    )
}