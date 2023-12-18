import React from "react";

import{
    View,
    TouchableOpacity,
    Text,
    Image,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';
import { useEffect, useState } from "react";
import {styleProfileDetails, styleProfilePage} from "../../themes/styleProfilePage";
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import authApi from "../../API/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const statusBarHeight = StatusBar.currentHeight || 0;
export default ProfileDetails = () => {
    const navigation = useNavigation();
    const [user, setUser]= useState([]);
    const dateOfBirth = new Date(user.date_of_birth)
    const handleBackPress = () => {
        // Thực hiện chuyển hướng về trang trước đó
        navigation.goBack();
      }; 
      
    useEffect( ()=>{
        
        const getProfileUser = async () =>{

            // const token = "bearer " + await AsyncStorage.getItem('userToken')
            // //     console.log(token)
            // axios.get('http://10.0.2.2:8000/user/me', {
            //     headers:{
            //         'token': token
            //     }})
            //     .then((res)=>{
            //         console.log(res.data)
            //     })
            //     .catch((err)=>{
            //         console.log(err)
            //     })
            try {
                const token = "bearer " + await AsyncStorage.getItem('userToken')
                
                const res = await authApi.getProfileUser({
                    "token" : token,
                })
                setUser(res.data.data)
                
                
            } catch (error) {
                console.log(error)
            }
        }
        getProfileUser()
        console.log(user.image)
    },[])
    
    return(
        
        <View style = {styleProfileDetails.View}>
            <StatusBar translucent backgroundColor="transparent" />
           
            <ScrollView style = {styleProfileDetails.ScrollView}>
                <View style = {{...styleProfilePage.viewAvatar, marginTop: 45+48}}>
                    <Image style = {{width:105, height: 105}} source={{
                        uri: user.image
                        }}/>

                </View>
                <View style = {{...styleProfilePage.viewName, marginBottom: 25}}>
                    <Text style = {styleProfilePage.textName}>{user.name}</Text>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Username</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>{user.username}</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Name</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>{user.name}</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Date of birth</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>{dateOfBirth.getUTCDate()}/{dateOfBirth.getUTCMonth()+ 1}/{dateOfBirth.getUTCFullYear()}</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Gender</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>{user.gender === true ? 'Male' : 'Female'}</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Mobile Number</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>{user.phone_number}</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Email</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>{user.email}</Text>
                    </View>
                </View>
                
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Address</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>{user.address}</Text>
                    </View>
                </View>
                
            </ScrollView> 
            <View style = {styleProfileDetails.viewTop}>
                <TouchableOpacity style = {styleProfileDetails.btnBack} onPress={handleBackPress}><Icon name= 'chevron-back-outline' color = '#1B1E28' size = {25} /></TouchableOpacity>
                <View style = {{width: 90, height: 33, borderRadius: 15, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {styleProfileDetails.textProfile}>Profile</Text>
                </View>
                
                <TouchableOpacity style = {styleProfileDetails.btnEdit} onPress={()=>{navigation.navigate('EditProfile')}}>
                    <Text style = {styleProfileDetails.textEdit}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}