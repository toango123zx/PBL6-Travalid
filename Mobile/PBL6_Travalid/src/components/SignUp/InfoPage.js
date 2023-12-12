import React from "react";
import { Text, View , TouchableOpacity, TextInput, Image, StatusBar, Dimensions, Pressable, Platform} from 'react-native'
import {useState, useEffect} from "react";
import {styleBotSUPage,styleMidSUPage,styleSignUpPage,styleTopSUPage} from '../../themes/StyleSignUpPage';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import axiosClient from "../../API";
import axios from "axios";
import { Dropdown } from 'react-native-element-dropdown';
import Icon1 from 'react-native-vector-icons/Ionicons'
import  DateTimePickerAndroid  from "@react-native-community/datetimepicker";
import authApi from "../../API/auth";
const { width, height } = Dimensions.get('window');
export default InfoPageSU = ({route}) => {
    const {username, password, value } = route.params;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateofBirth] = useState();
    const [phoneNumber, setPhoneNumber] = useState('');
    const dateObject = new Date(dateOfBirth);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
    const day = String(dateObject.getDate()).padStart(2, "0");
    const formattedDateString = `${year}-${month}-${day}`;
    const signup = async () => {
        try {
            const res = await authApi.signup({
                username: username,
                password: password,
                name: name,
                email: email,
                gender: gender,
                date_of_birth: formattedDateString,
                phone_number: phoneNumber,
                address: "Thach Ban"
            })
            console.log ("result: " + JSON.stringify(res))
        } catch (error) {
            if (error.response) {
                // 
                console.log('Đối tượng phản hồi được trả về, nhưng có mã trạng thái không thành công Request failed with status code:', error.response.status);
                console.log('Error data:', error.response.data);
              } else if (error.request) {
                // Không có phản hồi từ máy chủ
                console.log('No response received from server');
              } else {
                // Lỗi khi thiết lập request
                console.log('Error setting up the request:', error.message);
              }

        }
    }
    useEffect(()=>{
        console.log("username: " + username);
        console.log("password: " + password);
        console.log("name: " + name);
        console.log("email: " + email);
        console.log("gender: " + gender);
        console.log("date_of_birth: " + formattedDateString);
        console.log("phone_number: " + phoneNumber);

    })
    return(

        <View style = {styleSignUpPage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleSignUpPage.viewTop}>
                <Top/>
            </View>
            <View style = {styleSignUpPage.viewMid}>
                <Mid  setGender = {setGender} gender={gender} setName={setName} name={name} setEmail={setEmail} email={email} setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} setDateofBirth={setDateofBirth} dateOfBirth={dateOfBirth}/>
            </View>
            <View style = {styleSignUpPage.viewBot}>
                <Bot signup={signup}/>
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

const Mid = ({ setGender, gender, setName, name, setEmail, email, setPhoneNumber, phoneNumber, setDateofBirth, dateOfBirth}) => {
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const data = [
        { label: 'Nam', value: '1' },
        { label: 'Nu', value: '0' },
        
    ];
    const toggleDatepicker = () =>{
        setShowPicker(!showPicker)
    }
    const onChange = ({type}, selectedDate) => {
        if (type = "set") {
            const currentDate = selectedDate;
            setDate(currentDate)
            if (Platform.OS === "android"){
                toggleDatepicker();
                setDateofBirth(currentDate.toDateString())
            }
        } else {
            toggleDatepicker();
        }
    }
    return(
        <View style = {styleMidSUPage.View}>
            <View style = {styleMidSUPage.viewUserName}>
            <TextInput
                    autoCapitalize={true}
                    placeholderTextColor={'#7D848D'}
                    placeholder={'Name'}
                    style={styleMidSUPage.textInputUserName}
                    onChangeText={setName}
                    value={name}
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
                    autoCapitalize={false} placeholder={'Email'} style={styleMidSUPage.textInputPass}
                   
                    onChangeText={setEmail}
                    placeholderTextColor={'#7D848D'}
                    value={email}/>
            </View>
            <View style = {styleMidSUPage.viewPassword}>
                <TextInput 
                    autoCapitalize={false} placeholder={'Password'} style={styleMidSUPage.textInputPass}
                    keyboardType="numeric"
                    onChangeText={setPhoneNumber}
                    placeholderTextColor={'#7D848D'}
                    value={phoneNumber}/>
            </View>
            <View style = {{width: 367.5, height: 61.5, borderWidth: 0 ,marginLeft: (width - 367.5)/2,marginTop: height*0.3*0.05,marginBottom: height*0.3*0.05, justifyContent: 'space-between', flexDirection: 'row'}}>
                
                {showPicker && (
                    <DateTimePickerAndroid
                        mode="date" 
                        display="spinner"
                        value={date}
                        onChange={onChange}
                        
                    />
                )}
                
                    <Pressable
                        onPress={toggleDatepicker}
                        style = {{width: 217.5, height: 61.5, borderRadius: 16, backgroundColor: '#F7F7F9'}}>
                            
                        <TextInput
                            style = {{width: 217.5, height: 61.5, fontFamily: 'Montserrat Regular', fontSize: 16, color: '#1B1E28', marginLeft: (height*0.3*0.25)/2-12}}
                            value={dateOfBirth}
                            placeholder="Sat Aug 21 2002"
                            onChangeText={setDateofBirth}
                            placeholderTextColor={'#7D848D'}
                            editable = {false}
                        />
                            
                    </Pressable>
                
                
                
                
                <Dropdown
                    style={{height: 61.5, width: 130, borderRadius: 16, backgroundColor: '#F7F7F9'}}
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
                    placeholder={'Gender'}
                    searchPlaceholder="Search..."
                    value={gender}
                    onChange={item => {
                    setGender(item.value);
                    }}
                        
                />
            </View>
            
            
        </View>
    )
}

const Bot = ({signup}) => {
    return(
        <View style = {styleBotSUPage.View}>
            <View style = {styleBotSUPage.viewButtonSignIn}>
                <TouchableOpacity style = {styleBotSUPage.buttonSignIn} onPress={signup}>
                    <Text style = {styleBotSUPage.textSignIn}>Sign Up</Text>
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
