import React from "react";

import{
    View,
    TouchableOpacity,
    Text,
    Image,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import {styleProfilePage} from "../../themes/styleProfilePage";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
export default ProfilePage = () =>{
    const navigation = useNavigation(); // Sử dụng hook navigation

    const handlePressProfile = () => {
      navigation.navigate('ProfileDetails');
    };
    return(
        <View style = {styleProfilePage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleProfilePage.viewText}>
                <Text style = {styleProfilePage.textProfile}>Profile</Text>
            </View>
            <View style = {styleProfilePage.viewAvatar}>
                
            </View>
            <View style = {styleProfilePage.viewName}>
                <Text style = {styleProfilePage.textName}>Kham Thuan</Text>
            </View>
            <View style = {styleProfilePage.viewBtnProfile}>
                <TouchableOpacity style = {styleProfilePage.BtnProfile} onPress={handlePressProfile}>
                    <Icon style = {styleProfilePage.icon1} name="person-outline" color="#7D848D" size={25}/>
                    <Text style = {styleProfilePage.text1}>Profile</Text>
                    <Icon style = {styleProfilePage.iconChevronforward} name="chevron-forward" color="#7D848D" size={25}/>
                </TouchableOpacity>
            </View>
            <View style = {styleProfilePage.viewBtnBill}>
                <TouchableOpacity style = {styleProfilePage.BtnProfile}>
                    <Icon style = {styleProfilePage.icon1} name="earth-outline" color="#7D848D" size={25}/>
                    <Text style = {styleProfilePage.text1}>Oder History</Text>
                    <Icon style = {styleProfilePage.iconChevronforward} name="chevron-forward" color="#7D848D" size={25}/>
                </TouchableOpacity>
            </View>
            
            <View style = {styleProfilePage.viewBtnBill}>
                <TouchableOpacity style = {styleProfilePage.BtnProfile}>
                    <Icon style = {styleProfilePage.icon1} name="chatbox-outline" color="#7D848D" size={25}/>
                    <Text style = {styleProfilePage.text1}>Contact Us</Text>
                    <Icon style = {styleProfilePage.iconChevronforward} name="chevron-forward" color="#7D848D" size={25}/>
                </TouchableOpacity>
            </View>
            <View style = {styleProfilePage.viewBtnVersion}>
                <TouchableOpacity style = {styleProfilePage.BtnProfile}>
                    <Icon style = {styleProfilePage.icon1} name="card-outline" color="#7D848D" size={25}/>
                    <Text style = {styleProfilePage.text1}>Card</Text>
                    <Icon style = {styleProfilePage.iconChevronforward} name="chevron-forward" color="#7D848D" size={25}/>
                </TouchableOpacity>
            </View>
            <View style = {styleProfilePage.viewBtnSetting}>
                <TouchableOpacity style = {styleProfilePage.BtnProfile}>
                    <Icon style = {styleProfilePage.icon1} name="settings-outline" color="#7D848D" size={25}/>
                    <Text style = {styleProfilePage.text1}>Setting</Text>
                    <Icon style = {styleProfilePage.iconChevronforward} name="chevron-forward" color="#7D848D" size={25}/>
                </TouchableOpacity>
            </View>
            <View style = {styleProfilePage.viewBtnLogout}> 
                <TouchableOpacity style = {styleProfilePage.BtnLogout}> 
                    <Text style = {styleProfilePage.textLogout}>Log out</Text>
                    <Icon style = {styleProfilePage.iconLogout} name="log-out-outline" color="#FFF" size={25}/>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
