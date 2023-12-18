import React from "react";

import{
    View,
    TouchableOpacity,
    Text,
    Image,
    SafeAreaView,
    StatusBar,
    Dimensions
} from 'react-native';
import {styleProfilePage} from "../../themes/styleProfilePage";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get('window');
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
                <Icon name ='person-outline' color = '#808080' size = {70}/>
            </View>
            <View style = {styleProfilePage.viewName}>
                <Text style = {styleProfilePage.textName}>Not Signed</Text>
            </View>
            <Text style = {{textAlign: 'center', marginTop: 140, color: '#808080', fontFamily: 'Montserrat Medium', fontSize: 18}}>Sign in to view your profile</Text>
            
            <View style = {{width: 125, height: 50, borderRadius: 20, marginTop: 20}}> 
                <TouchableOpacity 
                    style = {{
                        width: 120, 
                        height: 50, 
                        borderRadius: 20, 
                        backgroundColor: '#FF852C', 
                        marginLeft: (width/2)-60,
                        justifyContent: 'center',
                        alignItems: 'center' }} onPress={()=>{
                    ;
                    navigation.navigate('SignInPage')
                }}> 
                    <Text style = {{color: '#FFF', fontFamily: 'Montserrat SemiBold', fontSize: 18}}>Sign In</Text>
                    
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
