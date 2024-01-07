import React, { useEffect, useState } from "react";
import { 
    View,
    StatusBar,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons'
import { PermissionsAndroid } from "react-native";
import {launchImageLibrary} from 'react-native-image-picker'

import {decode} from 'base64-js'
import authApi from "../../API/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default AnalysisPage = () => {
    const navigation = useNavigation()
    const [image, setImg] = useState()
    const [Arr, setArr] = useState([])
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
            const result = await launchImageLibrary({mediaType:'photo'})
            setImg(result.assets[0]);
            console.log(result.assets[0])
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
    };  
    const requestCameraPermission2 = async () => {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
            const result = await launchImageLibrary({mediaType:'photo'})
            setArr([...Arr, result.assets[0]])
            console.log(result.assets[0])
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
    };  
    const updateImage = async (id) => {
        try {
            const imageData = new FormData
            imageData.append('image',{
                uri: image.uri,
                name: image.fileName,
                type: image.type
            });
            Arr.forEach((image, index)=>{
                imageData.append('images_description',{
                    uri: image.uri,
                    name: image.fileName,
                    type: image.type
                })
            })
            
            const token = "bearer " + await AsyncStorage.getItem('userToken')
            //console.log(token)
            const res = await authApi.upImage(4,imageData, {
                "token": token,
                'Content-Type': 'multipart/form-data',
            })
            console.log(res.status)

        } catch (error) {
            console.log(error)
        }
    
    }
    useEffect(()=> {
        console.log(image)
    },[image])
    return(
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack} onPress={()=> {navigation.goBack()}}>
                    <Icon name = 'chevron-back' size = {25} color = '#FFF'/>
                </TouchableOpacity>
                <Text style = {style.textOderHistory}>Analysis</Text>
            </View>
            <TouchableOpacity style = {{backgroundColor: '#000', width: 100, height: 200}} onPress={()=> {requestCameraPermission()}}></TouchableOpacity>
            <TouchableOpacity style = {{backgroundColor: '#000', width: 100, height: 200}} onPress={()=> {requestCameraPermission2()}}></TouchableOpacity>
            
            <TouchableOpacity style = {{backgroundColor: '#000', width: 100, height: 200}} onPress={updateImage}></TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    View: {
        width: width,
        height: height,
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginTop: statusBarHeight
    }
    ,viewHeader: {
        width: 380,
        height: 48,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10
    }
    ,btnBack: {
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF852C',
        position: 'absolute',
        left: 0,

    }
    ,textOderHistory: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        fontSize: 20,
    }
})