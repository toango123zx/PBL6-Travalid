import React from "react";
import { Text, View , TouchableOpacity, TextInput, Image, StatusBar, Alert} from 'react-native'
import {useState} from "react";
import {useEffect} from "react"
import {styleBotFPPage,styleMidFPPage,styleForgotPassPage,styleTopFPPage} from '../../themes/StyleForgotPassPage'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { err } from "react-native-svg/lib/typescript/xml";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosClient from "../../API";
import authApi from "../../API/auth";
//const URL = `http://localhost:8000`
export default ForgotPassPage = () => {
    const [email, setEmail] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const [ipAddress, setIpAddress] = useState(null);
    const navigation = useNavigation();
    const forgot = async () => {
        try {
            console.log('email', email)
            const res = await authApi.login({
                username: email
            })
            AsyncStorage.setItem('userToken',res.data.token)
            navigation.navigate('Home1')
            
            
        } catch (error) {
            console.log("forgot faild")
            console.log(error)
        }
    }
    return(
        <View style = {styleForgotPassPage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleForgotPassPage.viewTop}>
                <Top/>
            </View>
            <View style = {styleForgotPassPage.viewMid}>
                <Mid setEmail={setEmail} email={email}/>
            </View>
            <View style = {styleForgotPassPage.viewBot}>
                <Bot/>
            </View>
        </View>
    )
}

const Top = () => {
    const navigation = useNavigation();
    return(
        <View style = {styleTopFPPage.View}>
            <View style = {styleTopFPPage.viewButton}>
                <TouchableOpacity style = {styleTopFPPage.buttonBack} onPress={()=>{navigation.goBack()}}>
                    <Text><Icon name="angle-left" color="#1B1E28" size={25}/></Text>
                    {/* <Image style = {{width: 24, height: 24}} source={require('../assets/images/arrowBack.png')}/> */}
                </TouchableOpacity>
                
            </View>
            <View style = {styleTopFPPage.viewText} numberOfLines={2}>
                <Text style = {styleTopFPPage.text1}>Forgot password</Text>
                <Text style = {styleTopFPPage.text2}>Don’t worry! Our team will help you to login again</Text>
            </View>
        </View>
    )
}

const Mid = ({setEmail, email}) => {
    const navigation = useNavigation();
    return(
        <View style = {styleMidFPPage.View}>
            <Text style = {styleMidFPPage.text2}>Enter your email address</Text>
            <View style = {styleMidFPPage.viewUserName}>
                <TextInput
                        placeholder={'E-mail'}
                        placeholderTextColor={'#7D848D'}
                        style={styleMidFPPage.textInputUserName}
                        onChangeText={setEmail}
                        value={email}
                    />
            </View>
        </View>
    )
}

const Bot = ({forgot}) => {
    const navigation = useNavigation();
    return(
        <View style = {styleBotFPPage.View}>
            <View style = {styleBotFPPage.viewButtonNext}>
                <TouchableOpacity style = {styleBotFPPage.buttonNext} onPress={()=>{navigation.navigate('VerifyPage')}}>
                    <Text style = {styleBotFPPage.textNext}>Continue</Text>
                </TouchableOpacity>
            </View>
            <View style = {styleBotFPPage.view1}>
                <View style = {styleBotFPPage.view11}>
                    <Text style = {styleBotFPPage.text1}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SignInPage')}}>
                        <Text style = {styleBotFPPage.textSignIn}> Sign in</Text>
                    </TouchableOpacity> 
                </View>
            </View>
            <View style = {{flex: 1, alignItems: 'center'}}>
                    <Text style = {styleBotFPPage.text1}>Or connect</Text>
            </View>
            <View style = {styleBotFPPage.view2}>
                <TouchableOpacity style = {styleBotFPPage.button}>
                    <Image source={require('../../assets/images/facebook.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styleBotFPPage.button}>
                    <Image source={require('../../assets/images/ig.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styleBotFPPage.button}>
                    <Image source={require('../../assets/images/twitter.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}