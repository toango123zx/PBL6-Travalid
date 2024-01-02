import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image , Dimensions, TouchableOpacity} from 'react-native'
const { width, height, scale } = Dimensions.get('window');
const windowDimensions = Dimensions.get('window');
import {styleAttraction} from "../themes/styleAttractionPage";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
export default AttractionComponent = ({productData}) => {
    const navigation = useNavigation(); // Sử dụng hook navigation
    
    const handlePress = () => {
        const id = productData.id_product
        const rate = productData.avg_rate
        const count = productData.count_complete
      navigation.navigate('DetailsPage',{id, rate, count});
    };
    useEffect(()=>{
        console.log(productData.image)
    },[])
    return(
        <TouchableOpacity onPress={handlePress} style = {{...styleAttraction.View, marginTop: 5}}>
            <View style = {styleAttraction.viewPicture}>
                <Image style = {{...styleAttraction.image, borderRadius: 10}} source={{
                    uri: productData.image
                    }}/>
            </View>
            <View style = {styleAttraction.viewName}>
                <Text style = {styleAttraction.name} >{productData.name}</Text>
            </View>
            <View style = {styleAttraction.viewLocation}>
                <Icon name="location-outline" color="#6F757C" size={16}/>
                <Text style = {styleAttraction.location}> {productData.city}</Text>
            </View>
            <View style = {styleAttraction.viewRate}> 
                <Icon name="star" color="#FFD336" size={16}/>
                <Text style = {styleAttraction.rate}> {productData.avg_rate} </Text>
            </View>
            {/* <View style = {styleAttraction.viewPrice}>
                <Text style = {styleAttraction.price}>{attractionData.price}</Text>
            </View> */}

           
        </TouchableOpacity>
        
    )
}
