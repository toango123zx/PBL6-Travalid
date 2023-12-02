import React from "react";
import { Text, View, StyleSheet, Image , Dimensions, TouchableOpacity} from 'react-native'
const { width, height, scale } = Dimensions.get('window');
const windowDimensions = Dimensions.get('window');
import {styleAttraction} from "../themes/styleAttractionPage";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
export default AttractionComponent = ({attractionData}) => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    
    const handlePress = () => {
      navigation.navigate('DetailsPage',{attractionData});
    };
    return(
        <TouchableOpacity onPress={handlePress} style = {styleAttraction.View}>
            <View style = {styleAttraction.viewPicture}>
                
            </View>
            <View style = {styleAttraction.viewName}>
                <Text style = {styleAttraction.name} >{attractionData.name}</Text>
            </View>
            <View style = {styleAttraction.viewLocation}>
                <Icon name="location-outline" color="#6F757C" size={16}/>
                <Text style = {styleAttraction.location}> {attractionData.location}</Text>
            </View>
            <View style = {styleAttraction.viewRate}> 
                <Icon name="star" color="#FFD336" size={16}/>
                <Text style = {styleAttraction.rate}> {attractionData.rate} </Text>
            </View>
            {/* <View style = {styleAttraction.viewPrice}>
                <Text style = {styleAttraction.price}>{attractionData.price}</Text>
            </View> */}

           
        </TouchableOpacity>
        
    )
}
