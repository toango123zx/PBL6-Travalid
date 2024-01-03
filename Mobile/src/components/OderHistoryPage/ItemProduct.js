import React, { useEffect } from "react";
import {useState} from "react"
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image
    
} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Ionicons'
import authApi from "../../API/auth";
const { width, height } = Dimensions.get('window');
export default ItemInCart = ({data}) => {
    const [image, setImage] = useState(null)
    const start = new Date (data.start_time)
    const end = new Date (data.end_time)
    useEffect(()=>{
        console.log(data);
        const getProduct = async () => {
            try {
                const res = await authApi.getDetailProduct(data.id_product);
                setImage(res.data.data.image)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct();
        console.log(image)
    },[])
    return(
        <View style = {style.View}>
            <View style = {style.viewTop}>
                
                <View style = {style.viewImage}>
                    {image !== null ? (<Image style = {{width: 90, height: 80, borderRadius: 10}} source={{
                        uri: image
                        }}/>): null}
                </View>
                <View style = {style.viewInfo}>
                    <View style = {style.viewName}>
                        <Text style = {style.textName}>{data.product_name}</Text>
                    </View>
                    <View style = {style.viewLocation}>
                        <Icon1 name = 'location-outline' size = {18} color = '#6F757C'/>
                        <Text style = {style.textLocation}>{data.city_name}</Text>
                        
                    </View>
                    <View style = {style.viewPrice}>
                            <Text style = {style.textPrice}>{data.price} VND</Text>
                        </View>
                    
                </View>
                
            </View>
            <View style = {style.viewBottom}>
                <Text style = {style.text}> {start.getUTCDate()}/{start.getUTCMonth()+1}/{start.getUTCFullYear()}, {start.getUTCHours()}:{start.getUTCMinutes()}    To    {end.getUTCDate()}/{end.getUTCMonth()+1}/{end.getUTCFullYear()}, {end.getUTCHours()}:{end.getUTCMinutes()}  </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        width: width,
        height: 110,
        borderWidth: 0,
        
        backgroundColor: 'rgba(0,0,0,0.0)',
        marginTop: 10,
        marginBottom: 5,
        
        borderBottomWidth: 0.2
    },
    viewTop: {
        width: width,
        height: 80,
        borderWidth: 0,
        flexDirection: 'row',
        
    },
    viewBottom: {
        width: width,
        height: 30,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewCheckBox: {
        width: 20,
        height: 80,
        borderWidth: 0,
        justifyContent: 'center'
    },
    viewInCheckBox:{
        width: 13,
        height: 13,
        borderRadius: 3,
        backgroundColor: '#FFF'
    },
    viewImage: {
        width: 90,
        height: 80,
        borderWidth: 0,
        marginLeft: (width -380)/2,
        
        borderRadius: 5,
    },
    viewInfo:{
        width: 205,
        height: 80,
        borderWidth: 0,
        marginLeft: 15,
    },
    viewBtnDelete: {
        width: 25,
        height: 80,
        borderWidth: 0,
        position: 'absolute',
        right: 0,
        
    },
    btnDelete: {
        width: 25,
        height: 25,
        backgroundColor: '#FFF',
        borderWidth: 0
    },
    viewName: {
        width: 205,
        height: 25,
        borderWidth: 0,
        marginTop: 2.5,
        justifyContent: 'center'
    },
    viewLocation: {
        width: width - 90 - (width -380)/2 - 15,
        height: 25,
        
        alignItems: 'center',
        flexDirection: 'row'
    },
    viewPrice: {
        
        height: 25,
        borderWidth: 0,
        justifyContent: 'center',
        
        
    },
    textLocation: {
        color: '#6F757C',
        fontFamily: 'Montserrat Medium',
        fontSize: 15,
    },
    textName: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 18,
    },
    textPrice: {
        color: '#FF6B00',
        fontFamily: 'Montserrat Medium',
        fontSize: 18,
    },
    viewBtnCheck: {
        width: 20, 
        height: 20,
        borderWidth: 1,
        borderColor: '#FF6B00',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 17
    },
    
})