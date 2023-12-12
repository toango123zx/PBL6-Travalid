import React from "react";
import { Text, View , TouchableOpacity, TextInput, Image, StatusBar} from 'react-native'
import {useState, useEffect} from "react";
import {styleBotSUPage,styleMidSUPage,styleSignUpPage,styleTopSUPage} from '../../themes/StyleSignUpPage';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import axiosClient from "../../API";
import axios from "axios";
import { Dropdown } from 'react-native-element-dropdown';
import Icon1 from 'react-native-vector-icons/Ionicons'
import authApi from "../../API/auth";
export default SignUpPage = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [value, setValue] = useState('Latest');
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('InfoPageSU', {username, password, value});
      };
    const signup = () => {
        try {
            console.log('email', email)
            const res = authApi.signup({
                username: email,
                password: password
            })
            console.log(res)
            console.log('password', password)
        } catch (error) {
            console.log(error)
        }
    }
   
    return(

        <View style = {styleSignUpPage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleSignUpPage.viewTop}>
                <Top/>
            </View>
            <View style = {styleSignUpPage.viewMid}>
                <Mid  setValue = {setValue} value={value} setUserName={setUserName} username={username} setPassword={setPassword} password={password} setPassword2={setPassword2} password2={password2}/>
            </View>
            <View style = {styleSignUpPage.viewBot}>
                <Bot handlePress = {handlePress}/>
            </View>
        </View>
    )
}

const Top = () => {
    const navigation = useNavigation();
    return(
        <View style = {styleTopSUPage.View}>
            <View style = {styleTopSUPage.viewButton}>
                <TouchableOpacity style = {styleTopSUPage.buttonBack} onPress={()=>{navigation.goBack()}}>
                    <Text><Icon name="angle-left" color="#1B1E28" size={25}/></Text>
                    {/* <Image style = {{width: 24, height: 24}} source={require('../assets/images/arrowBack.png')}/> */}
                </TouchableOpacity>
                
            </View>
            <View style = {styleTopSUPage.viewText}>
                <Text style = {styleTopSUPage.text1}>Sign up now</Text>
                <Text style = {styleTopSUPage.text2}>Please fill the details and create account</Text>
            </View>
        </View>
    )
}

const Mid = ({ setValue, value, setUserName, username, setPassword, password, setPassword2, password2}) => {
    
    const [pwdHidden, setPwdHidden] = useState(true)
    const data = [
        { label: 'Traveller', value: 'traveller' },
        { label: 'Travel supplier', value: 'travel_supplier' },
        { label: 'Hotel supplier', value: 'hotel_supplier' },
        { label: 'Restaurant supplier', value: 'restaurant_supplier' },
        { label: 'Transportation supplier', value: 'transportation_supplier' },
    ];
    return(
        <View style = {styleMidSUPage.View}>
            <View style = {styleMidSUPage.viewUserName}>
            <TextInput
                    autoCapitalize={true}
                    placeholderTextColor={'#7D848D'}
                    placeholder={'Username'}
                    style={styleMidSUPage.textInputUserName}
                    onChangeText={setUserName}
                    value={username}
                />
            </View>
            {/* <View style = {styleMidSUPage.viewUserName}>
            <TextInput
                    autoCapitalize={false}
                    placeholder={'E-mail'}
                    style={styleMidSUPage.textInputUserName}
                    placeholderTextColor={'#7D848D'}
                    onChangeText={setEmail}
                    value={email}
                />
            </View> */}
            <View style = {styleMidSUPage.viewPassword}>
                <TextInput 
                    autoCapitalize={false} placeholder={'Password'} style={styleMidSUPage.textInputPass}
                    secureTextEntry={pwdHidden? true : false}
                    onChangeText={setPassword}
                    placeholderTextColor={'#7D848D'}
                    value={password}/>
                <TouchableOpacity  
                    onPress={() => setPwdHidden(!pwdHidden)} 
                    style = {styleMidSUPage.touchHiddenPass}>
                    <Icon1 name = 'eye-outline' color = '#000' size = {25}/>
                </TouchableOpacity>
            </View>
            <View style = {styleMidSUPage.viewPassword}>
                <TextInput 
                    autoCapitalize={false} placeholder={'Password'} style={styleMidSUPage.textInputPass}
                    secureTextEntry={pwdHidden? true : false}
                    onChangeText={setPassword2}
                    placeholderTextColor={'#7D848D'}
                    value={password2}/>
                <TouchableOpacity  
                    onPress={() => setPwdHidden(!pwdHidden)} 
                    style = {styleMidSUPage.touchHiddenPass}>
                    <Icon1 name = 'eye-outline' color = '#000' size = {25}/>
                </TouchableOpacity>
            </View>
            <Dropdown
                style={styleMidSUPage.dropdown}
                placeholderStyle={styleMidSUPage.placeholderStyle}
                selectedTextStyle={styleMidSUPage.selectedTextStyle}
                inputSearchStyle={styleMidSUPage.inputSearchStyle}
                iconStyle={styleMidSUPage.iconStyle}
                itemContainerStyle={styleMidSUPage.itemsStyle}
                itemTextStyle={styleMidSUPage.itemDropStyle}
                containerStyle={styleMidSUPage.dropStyle}
                data={data}
                maxHeight={500}
                labelField="label"
                valueField="value"
                placeholder={'Supplier'}
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setValue(item.value);
                }}
                    
            />
            
        </View>
    )
}

const Bot = ({handlePress}) => {
    const navigation = useNavigation();
    return(
        <View style = {styleBotSUPage.View}>
            <View style = {styleBotSUPage.viewButtonSignIn}>
                <TouchableOpacity style = {styleBotSUPage.buttonSignIn} onPress={handlePress}>
                    <Text style = {styleBotSUPage.textSignIn}>Continue</Text>
                </TouchableOpacity>
            </View>
            <View style = {styleBotSUPage.view1}>
                <View style = {styleBotSUPage.view11}>
                    <Text style = {styleBotSUPage.text1}>Already have an account</Text>
                    <TouchableOpacity><Text style = {styleBotSUPage.textSignUp}> Sign in</Text></TouchableOpacity> 
                </View>
                <View style = {{flex: 1, alignItems: 'center'}}>
                    <Text style = {styleBotSUPage.text1}>Or connect</Text>
                </View>
            </View>
            <View style = {styleBotSUPage.view2}>
                <TouchableOpacity style = {styleBotSUPage.button}>
                    <Icon1 name = 'logo-facebook' color = '#000' size = {45}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styleBotSUPage.button}>
                    <Icon1 name = 'logo-instagram' color = '#000' size = {45}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styleBotSUPage.button}>
                    <Icon1 name = 'logo-twitter' color = '#000' size = {45}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
