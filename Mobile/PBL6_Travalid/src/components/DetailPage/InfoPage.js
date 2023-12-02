import React from "react";
import {
    ScrollView,View,Text, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styleInfoPage} from "../../themes/styleDetailsPage";
export default InfoPage = ({attractionData}) => {
    return(
        
        <ScrollView style = {styleInfoPage.scrollView}>
            <View style = {styleInfoPage.viewLocation}>
                <Text style = {styleInfoPage.textDes}>{attractionData.name}</Text>
                <Icon Icon style = {styleInfoPage.iconLocation} name="location-outline" color="#7D848D" size={16}/>
                <Text style = {styleInfoPage.textLocation}>{attractionData.location}</Text>
            </View>
            <View style = {styleInfoPage.viewRate}>
                <Icon Icon style = {styleInfoPage.iconStar} name="star" color="#FFD336" size={16}/>
                <Text style = {styleInfoPage.textRate}>4.7</Text>
                <Text style = {styleInfoPage.textSoLuong}>(2322)</Text>
            </View>
            <ScrollView style = {styleInfoPage.viewImage}>

            </ScrollView>
            <View style = {styleInfoPage.viewMota}>
                <Text style = {styleInfoPage.textMota}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</Text>
                <TouchableOpacity><Text style = {styleInfoPage.textReadmore}>Read more</Text></TouchableOpacity>
            </View>
            <View style = {styleInfoPage.viewInfo}>
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Destination</Text>
                    <Text style = {styleInfoPage.textDetails2}>Quang Ninh</Text>
                </View>
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Departure</Text>
                    <Text style = {styleInfoPage.textDetails2}>Lien Chieu dist, Da Nang</Text>
                </View>
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Time</Text>
                    <Text style = {styleInfoPage.textDetails2}>14 hours</Text>
                </View>
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Quantily</Text>
                    <Text style = {styleInfoPage.textDetails2}>1</Text>
                </View>
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Count compelete</Text>
                    <Text style = {styleInfoPage.textDetails2}>24</Text>
                </View>
                <View style = {styleInfoPage.viewDetails}>
                    <Text style = {styleInfoPage.textDetails1}>Location on map</Text>
                    <Text style = {styleInfoPage.textDetails2}>24</Text>
                </View>
            </View>
        </ScrollView>   
       
                        
    )
}