import React from "react";
import { Text, View , TouchableOpacity, TextInput, Image, StatusBar, Alert} from 'react-native'
import {useState} from "react";
import {useEffect} from "react"
import {styleBotSIPage,styleMidSIPage,styleSignInPage,styleTopSIPage} from '../themes/StyleSignInPage'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { err } from "react-native-svg/lib/typescript/xml";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosClient from "../API";
import authApi from "../API/auth";
//const URL = `http://localhost:8000`
export default SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const [ipAddress, setIpAddress] = useState(null);
    // useEffect(() => {
    //     const getIpAddress = async () => {
    //       try {
    //         const response = await fetch('https://api.ipify.org?format=json');
    //         const data = await response.json();
    //         const clientIpAddress = data.ip;
    //         setIpAddress(clientIpAddress);
    //         console.log(ipAddress)
    //       } catch (error) {
    //         console.error('Lỗi khi lấy địa chỉ IP:', error.message);
    //       }
    //     };
    
    //     getIpAddress();
    //   }, []);
    const navigation = useNavigation();
    // const login =  () => {
    //     console.log(email)
    //     console.log(password)
    //     fetch('http://localhost:8000/discount/all',{
    //         method: 'GET',
    //         headers: {
    //             'Cache-Control': 'no-cache',
    //             Pragma: 'no-cache',
    //             Expires: 0,
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },

    //         // body: JSON.stringify({
    //         //     username: email,
    //         //     password: password
    //         // }),
    //     })
    //     .then (res => {
    //         res.json()
    //         console.log("ress")
    //     })
    //     .then(async (res)=>{
    //         console.log(res)
    //         console.log("ressas")
    //     })
    //     .catch((err)=>console.log(err))
    //     .finally(()=>console.log('aa'))
    // }
    const login = async () => {
        try {
            console.log('email', email)
            const res = await authApi.login({
                username: email,
                password: password
            })
            AsyncStorage.setItem('userToken',res.data.token)
            navigation.navigate('Home1')
            
            
        } catch (error) {
            console.log("Login faild")
            console.log(error)
        }
    //     fetch('https://sendbulker.com/discount/all')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    // const data = {
    //     method: 'POST',
    //     body : JSON.stringify({
    //         username: String(email),
    //         password: String(password)
    //     }),
    //     headers: {
    //         'Cache-Control': 'no-cache',
    //         Pragma: 'no-cache',
    //         Expires: 0,
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
            
    //     },
    // }
    //     fetch('http://10.0.2.2:8000/sign-in', data)
    //     .then((response) => 
    //     {
    //         return Promise.all([response.status, response.json()])
    //     }
    //     //response.json()
    //     )
    //     .then(([status, json]) => {
    //         status == 200 ? navigation.navigate('Home1') : console.log("Login faild")
    //         setAccessToken(json.token)
    //         //console.log(accessToken)
    //         //console.log(json.token)
            
    //     })
    //     .catch((err)=>{console.log(err)})
        
    }
    return(
        <View style = {styleSignInPage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleSignInPage.viewTop}>
                <Top/>
            </View>
            <View style = {styleSignInPage.viewMid}>
                <Mid setEmail={setEmail} setPassword={setPassword} email={email} password={password}/>
            </View>
            <View style = {styleSignInPage.viewBot}>
                <Bot login={login}/>
            </View>
        </View>
    )
}

const Top = () => {
    const navigation = useNavigation();
    return(
        <View style = {styleTopSIPage.View}>
            <View style = {styleTopSIPage.viewButton}>
                <TouchableOpacity style = {styleTopSIPage.buttonBack} onPress={()=>{navigation.goBack()}}>
                    <Text><Icon name="angle-left" color="#1B1E28" size={25}/></Text>
                    {/* <Image style = {{width: 24, height: 24}} source={require('../assets/images/arrowBack.png')}/> */}
                </TouchableOpacity>
                
            </View>
            <View style = {styleTopSIPage.viewText}>
                <Text style = {styleTopSIPage.text1}>Sign in now</Text>
                <Text style = {styleTopSIPage.text2}>Please sign in to continue our app</Text>
            </View>
        </View>
    )
}

const Mid = ({setEmail, setPassword, email, password}) => {
    const navigation = useNavigation();
    const [pwdHidden, setPwdHidden] = useState(true)
    return(
        <View style = {styleMidSIPage.View}>
            <View style = {styleMidSIPage.viewUserName}>
            <TextInput
                    
                    placeholder={'E-mail'}
                    placeholderTextColor={'#7D848D'}
                    style={styleMidSIPage.textInputUserName}
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <View style = {styleMidSIPage.viewPassword}>
                <TextInput 
                    placeholder={'Password'} style={styleMidSIPage.textInputPass}
                    placeholderTextColor={'#7D848D'}
                    secureTextEntry={pwdHidden? true : false}
                    onChangeText={setPassword}
                    value={password}/>
                <TouchableOpacity   
                    onPress={() => setPwdHidden(!pwdHidden)} 
                    style = {styleMidSIPage.touchHiddenPass}>
                    <Image style = {styleMidSIPage.imageHiddenPass} source={require('../assets/images/eye.png')}/>
                </TouchableOpacity>
            </View>
            <View style = {styleMidSIPage.viewForgotPass}>
                <TouchableOpacity style = {styleMidSIPage.touchForgotPass} onPress={()=>{navigation.navigate('ForgotPassPage')}}>
                    <Text style = {styleMidSIPage.textForgotPass}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Bot = ({login}) => {
    const navigation = useNavigation();
    return(
        <View style = {styleBotSIPage.View}>
            <View style = {styleBotSIPage.viewButtonSignIn}>
                <TouchableOpacity style = {styleBotSIPage.buttonSignIn} onPress={login}>
                    <Text style = {styleBotSIPage.textSignIn}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style = {styleBotSIPage.view1}>
                <View style = {styleBotSIPage.view11}>
                    <Text style = {styleBotSIPage.text1}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SignUpPage')}}>
                        <Text style = {styleBotSIPage.textSignUp}> Sign up</Text>
                    </TouchableOpacity> 
                </View>
            </View>
            <View style = {{flex: 1, alignItems: 'center'}}>
                    <Text style = {styleBotSIPage.text1}>Or connect</Text>
            </View>
            <View style = {styleBotSIPage.view2}>
                <TouchableOpacity style = {styleBotSIPage.button}>
                    <Image source={require('../assets/images/facebook.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styleBotSIPage.button}>
                    <Image source={require('../assets/images/ig.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styleBotSIPage.button}>
                    <Image source={require('../assets/images/twitter.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
