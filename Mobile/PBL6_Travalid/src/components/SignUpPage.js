import React from "react";
import { Text, View , TouchableOpacity, TextInput, Image, StatusBar} from 'react-native'
import {useState} from "react";
import {styleBotSUPage,styleMidSUPage,styleSignUpPage,styleTopSUPage} from '../themes/StyleSignUpPage';
import Icon from 'react-native-vector-icons/FontAwesome'

export default SignInPage = () => {
    return(

        <View style = {styleSignUpPage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleSignUpPage.viewTop}>
                <Top/>
            </View>
            <View style = {styleSignUpPage.viewMid}>
                <Mid/>
            </View>
            <View style = {styleSignUpPage.viewBot}>
                <Bot/>
            </View>
        </View>
    )
}

const Top = () => {
    return(
        <View style = {styleTopSUPage.View}>
            <View style = {styleTopSUPage.viewButton}>
                <TouchableOpacity style = {styleTopSUPage.buttonBack} >
                    <Text><Icon name="angle-left" color="#1B1E28" size={25}/></Text>
                    {/* <Image style = {{width: 24, height: 24}} source={require('../assets/images/arrowBack.png')}/> */}
                </TouchableOpacity>
                
            </View>
            <View style = {styleTopSUPage.viewText}>
                <Text style = {styleTopSUPage.text1}>Sign up now</Text>
                <Text style = {styleTopSUPage.text2}>Please sign in to continue our app</Text>
            </View>
        </View>
    )
}

const Mid = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwdHidden, setPwdHidden] = useState(true)
    return(
        <View style = {styleMidSUPage.View}>
            <View style = {styleMidSUPage.viewUserName}>
            <TextInput
                    autoCapitalize={true}
                    placeholder={'Name'}
                    style={styleMidSUPage.textInputUserName}
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <View style = {styleMidSUPage.viewUserName}>
            <TextInput
                    autoCapitalize={false}
                    placeholder={'E-mail'}
                    style={styleMidSUPage.textInputUserName}
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <View style = {styleMidSUPage.viewPassword}>
                <TextInput 
                    autoCapitalize={false} placeholder={'Password'} style={styleMidSUPage.textInputPass}
                    secureTextEntry={pwdHidden? true : false}
                    onChangeText={setPassword}
                    value={password}/>
                <TouchableOpacity  
                    onPress={() => setPwdHidden(!pwdHidden)} 
                    style = {styleMidSUPage.touchHiddenPass}>
                    <Image style = {styleMidSUPage.imageHiddenPass} source={require('../assets/images/eye.png')}/>
                </TouchableOpacity>
            </View>
            <View style = {styleMidSUPage.viewForgotPass}>
                <TouchableOpacity style = {styleMidSUPage.touchForgotPass}>
                    <Text style = {styleMidSUPage.textForgotPass}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Bot = () => {
    return(
        <View style = {styleBotSUPage.View}>
            <View style = {styleBotSUPage.viewButtonSignIn}>
                <TouchableOpacity style = {styleBotSUPage.buttonSignIn}>
                    <Text style = {styleBotSUPage.textSignIn}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style = {styleBotSUPage.view1}>
                <View style = {styleBotSUPage.view11}>
                    <Text style = {styleBotSUPage.text1}>Don’t have an account?</Text>
                    <TouchableOpacity><Text style = {styleBotSUPage.textSignUp}> Sign up</Text></TouchableOpacity> 
                </View>
                <View style = {{flex: 1, alignItems: 'center'}}>
                    <Text style = {styleBotSUPage.text1}>Or connect</Text>
                </View>
            </View>
            <View style = {styleBotSUPage.view2}>
                <TouchableOpacity style = {styleBotSUPage.button}>
                    <Image source={require('../assets/images/facebook.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styleBotSUPage.button}>
                    <Image source={require('../assets/images/ig.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styleBotSUPage.button}>
                    <Image source={require('../assets/images/twitter.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
