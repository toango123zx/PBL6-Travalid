import React from "react";

import {
    SafeAreaView, 
    View,
    StatusBar,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    Text

} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const statusBarHeight = StatusBar.currentHeight || 0;
const { width, height } = Dimensions.get('window');

export default EditProfile = () =>{
    const navigation = useNavigation();
    return(
        <SafeAreaView style = {style.View}>
            
                <ScrollView style = {style.ScrollView}>
                    <View style = {style.viewAvata}>

                    </View>
                    <View style = {style.viewName}>
                        <Text style = {style.textName}>Viet Trung</Text>
                        <TouchableOpacity style = {style.btnChangePicture}>
                            <Text style = {style.textChangePicture}>Change Profile Picture</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style = {style.viewEditUserName}>
                        <Text style = {style.textUserName}>Username</Text>
                        <View style = {style.viewInput}></View>
                    </View>
                </ScrollView>
                <View style = {style.viewHeader}>
                    <TouchableOpacity style = {style.btnBack} onPress={()=>{navigation.goBack()}}>
                        <Icon name = 'chevron-back-outline' color = '#FFF' size = {30}/>
                    </TouchableOpacity>
                    <Text style = {style.textEditProfile}>Edit Profile</Text>
                    <TouchableOpacity style = {{position: 'absolute', right: 0}} >
                        <Text style = {style.textSave}>Save</Text>
                    </TouchableOpacity>
                    
                </View>
            
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    View: {
        top: statusBarHeight,
        width: width,
        height: height,
        backgroundColor: '#FFF'
    }
    ,viewHeader:{
        position: 'absolute',
        width: 380,
        height: 48,
        borderWidth: 0,
        marginTop: 10,
        marginLeft: (width-380)/2,
        justifyContent: 'center'
    }
    ,btnBack: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(255, 133, 44, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    }
    ,textEditProfile: {
        color: '#1B1E28',
        fontSize: 20,
        fontFamily: 'Montserrat SemiBold',
        textAlign: 'center'
    }
    ,textSave:{
        fontSize: 17.554,
        color: '#FF6B00',
        fontFamily: 'Montserrat SemiBold'    
    }
    ,ScrollView: {
        width: width,
        position: 'relative',
        marginTop: statusBarHeight+ 10,
        
    }
    ,viewAvata: {
        width: 105,
        height: 105,
        borderRadius: 52.5,
        marginTop: 45 + statusBarHeight,
        backgroundColor: 'rgba(0,0,0,0.1)',
        marginLeft: (width-105)/2 
    }
    ,viewName: {
        width: 300,
        height: 60,
        marginTop: 9,
        borderWidth: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: (width-300)/2
    }
    ,textName: {
        color: '#1B1E28',
        fontSize: 26.331,
        fontFamily: 'Montserrat Medium'
    }
    ,textChangePicture: {
        color: 'rgba(255, 107, 0, 1)',
        fontFamily: 'Montserrat Medium',
        fontSize: 17,
    }
    ,btnChangePicture: {

    }
    ,viewEditUserName: {
        height: 90,
        width: 380,
        marginLeft: (width-380)/2,
        borderWidth: 1,
        marginTop: 16,
    }
    ,textUserName:{
        color: '#1B1E28',
        fontFamily: 'Montserrat Medium',
        fontSize: 20,
        letterSpacing: 0.5,
    },
    viewInput: {
        width: 380,
        height: 52,
        borderWidth: 0,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#F7F7F9'
    }
    
})

