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
export default ChangePassPage = () => {
    // const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    // const [accessToken, setAccessToken] = useState('')
    // const [ipAddress, setIpAddress] = useState(null);
    const navigation = useNavigation();
    // const changepass = async () => {
    //     try {
    //         console.log('email', email)
    //         const res = await authApi.login({
    //             username: email
    //         })
    //         AsyncStorage.setItem('userToken',res.data.token)
    //         navigation.navigate('Home1')
            
            
    //     } catch (error) {
    //         console.log("forgot faild")
    //         console.log(error)
    //     }
    // }
    return(
        <View style = {styleForgotPassPage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleForgotPassPage.viewTopChange}>
                <Top/>
            </View>
            <View style = {styleForgotPassPage.viewMidChange}>
                <Mid setPassword={setPassword} setConfirm={setConfirm} password={password} confirm={confirm}/>
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
                <Text style = {styleTopFPPage.text1}>Change password</Text>
            </View>
        </View>
    )
}

const Mid = ({setPassword, setConfirm, password, confirm}) => {
    const navigation = useNavigation();
    const [pwdHidden, setPwdHidden] = useState(true)
    return(
        <View style = {styleMidFPPage.View}>
            <View style = {styleMidFPPage.viewPassword}>
                <TextInput 
                    placeholder={'Enter new password'} style={styleMidFPPage.textInputPass}
                    placeholderTextColor={'#7D848D'}
                    secureTextEntry={pwdHidden? true : false}
                    onChangeText={setPassword}
                    value={password}/>
                <TouchableOpacity   
                    onPress={() => setPwdHidden(!pwdHidden)} 
                    style = {styleMidFPPage.touchHiddenPass}>
                    <Image style = {styleMidFPPage.imageHiddenPass} source={require('../../assets/images/eye.png')}/>
                </TouchableOpacity>
            </View>
            <Text style = {styleMidFPPage.text1}>*Password must be at least 8 characters</Text>
            <View style = {styleMidFPPage.viewPassword}>
                <TextInput 
                    placeholder={'Confirm password'} style={styleMidFPPage.textInputPass}
                    placeholderTextColor={'#7D848D'}
                    secureTextEntry={pwdHidden? true : false}
                    onChangeText={setConfirm}
                    value={confirm}/>
                <TouchableOpacity   
                    onPress={() => setPwdHidden(!pwdHidden)}
                    style = {styleMidFPPage.touchHiddenPass}>
                    <Image style = {styleMidFPPage.imageHiddenPass} source={require('../../assets/images/eye.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Bot = ({forgot}) => {
    const navigation = useNavigation();
    return(
        <View style = {styleBotFPPage.View}>
            <View style = {styleBotFPPage.viewButtonNext}>
                <TouchableOpacity style = {styleBotFPPage.buttonNext} onPress={()=>{navigation.navigate('SignInPage')}}>
                    <Text style = {styleBotFPPage.textNext}>Change</Text>
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