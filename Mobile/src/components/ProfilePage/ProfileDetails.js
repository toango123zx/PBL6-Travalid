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

import {styleProfileDetails, styleProfilePage} from "../../themes/styleProfilePage";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const statusBarHeight = StatusBar.currentHeight || 0;
export default ProfileDetails = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
        // Thực hiện chuyển hướng về trang trước đó
        navigation.goBack();
      };
    return(
        
        <View style = {styleProfileDetails.View}>
            <StatusBar translucent backgroundColor="transparent" />
           
            <ScrollView style = {styleProfileDetails.ScrollView}>
                <View style = {{...styleProfilePage.viewAvatar, marginTop: 45+48}}>
                    
                </View>
                <View style = {{...styleProfilePage.viewName, marginBottom: 25}}>
                    <Text style = {styleProfilePage.textName}>Kham Thuan</Text>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Username</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>viettrung2002</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Name</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>viettrung2002</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Date of birth</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>viettrung2002</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Gender</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>viettrung2002</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Mobile Number</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>viettrung2002</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Email</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>viettrung2002</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Password</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>viettrung2002</Text>
                    </View>
                </View>
                <View style = {styleProfileDetails.viewPersonalInfo}>
                    <Text style = {styleProfileDetails.textPersonalInfo}>Address</Text>
                    <View style = {styleProfileDetails.view}>
                        <Text style = {styleProfileDetails.text}>viettrung2002</Text>
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