import React from "react";
import { Text, View , TouchableOpacity, TextInput, Image, StatusBar} from 'react-native'
import {useState} from "react";
import {styleBotSIPage,styleMidSIPage,styleSignInPage,styleTopSIPage} from '../themes/StyleSignInPage'
import Icon from 'react-native-vector-icons/FontAwesome'
export default SignInPage = () => {
    return(
        <View style = {styleSignInPage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleSignInPage.viewTop}>
                <Top/>
            </View>
            <View style = {styleSignInPage.viewMid}>
                <Mid/>
            </View>
            <View style = {styleSignInPage.viewBot}>
                <Bot/>
            </View>
        </View>
    )
}

const Top = () => {
    return(
        <View style = {styleTopSIPage.View}>
            <View style = {styleTopSIPage.viewButton}>
                <TouchableOpacity style = {styleTopSIPage.buttonBack} >
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

const Mid = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwdHidden, setPwdHidden] = useState(true)
    return(
        <View style = {styleMidSIPage.View}>
            <View style = {styleMidSIPage.viewUserName}>
            <TextInput
                    autoCapitalize={false}
                    placeholder={'E-mail'}
                    style={styleMidSIPage.textInputUserName}
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <View style = {styleMidSIPage.viewPassword}>
                <TextInput 
                    autoCapitalize={false} placeholder={'Password'} style={styleMidSIPage.textInputPass}
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
                <TouchableOpacity style = {styleMidSIPage.touchForgotPass}>
                    <Text style = {styleMidSIPage.textForgotPass}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Bot = () => {
    return(
        <View style = {styleBotSIPage.View}>
            <View style = {styleBotSIPage.viewButtonSignIn}>
                <TouchableOpacity style = {styleBotSIPage.buttonSignIn}>
                    <Text style = {styleBotSIPage.textSignIn}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style = {styleBotSIPage.view1}>
                <View style = {styleBotSIPage.view11}>
                    <Text style = {styleBotSIPage.text1}>Don’t have an account?</Text>
                    <TouchableOpacity><Text style = {styleBotSIPage.textSignUp}> Sign up</Text></TouchableOpacity> 
                </View>
                <View style = {{flex: 1, alignItems: 'center'}}>
                    <Text style = {styleBotSIPage.text1}>Or connect</Text>
                </View>
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
