import React from "react";
import { useState, useEffect } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import authApi from "../../API/auth";
export default ProfilePage = () =>{
    const navigation = useNavigation(); // Sử dụng hook navigation
    const [user, setUser]= useState([]);
    useEffect( ()=>{
        
        const getProfileUser = async () =>{

            // const token = "bearer " + await AsyncStorage.getItem('userToken')
            // //     console.log(token)
            // axios.get('http://10.0.2.2:8000/user/me', {
            //     headers:{
            //         'token': token
            //     }})
            //     .then((res)=>{
            //         console.log(res.data)
            //     })
            //     .catch((err)=>{
            //         console.log(err)
            //     })
            try {
                
                const token = "bearer " + await AsyncStorage.getItem('userToken')
                console.log(token)
                const res = await authApi.getProfileUser({
                    "token" : token,
                })
                setUser(res.data.data)
                
                
            } catch (error) {
                console.log(error)
            }
        }
        getProfileUser()
        console.log(user.role)
    },[])
    const handlePressProfile = () => {
      navigation.navigate('ProfileDetails');
    };


    const [showProfile, setShowProfile] = useState(false);
    useFocusEffect(
        React.useCallback(() => {
        const checkUserToken = async () => {
            try {
            const token = await AsyncStorage.getItem('userToken');
            setShowProfile(!!token);
            //console.log(token);
            } catch (error) {
            console.error('Lỗi khi kiểm tra userToken:', error);
            }
        };

        checkUserToken();
        }, [])
    );
    return(
        <View style = {styleProfilePage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleProfilePage.viewText}>
                <Text style = {styleProfilePage.textProfile}>Profile</Text>
            </View>
            <View style = {styleProfilePage.viewAvatar}>
                
            </View>
            <View style = {styleProfilePage.viewName}>
                <Text style = {styleProfilePage.textName}>{user.name}</Text>
            </View>
            <View style = {styleProfilePage.viewBtnProfile}>
                <TouchableOpacity style = {styleProfilePage.BtnProfile} onPress={handlePressProfile}>
                    <Icon style = {styleProfilePage.icon1} name="person-outline" color="#7D848D" size={25}/>
                    <Text style = {styleProfilePage.text1}>Profile</Text>
                    <Icon style = {styleProfilePage.iconChevronforward} name="chevron-forward" color="#7D848D" size={25}/>
                </TouchableOpacity>
            </View>

            {user.role === 'travel_supplier' || user.role === 'admin' ? 
            <View style = {styleProfilePage.viewBtnBill}>
                <TouchableOpacity style = {styleProfilePage.BtnProfile} onPress={()=>{navigation.navigate('ProductSupplierPage', {user})}}>
                    <Icon style = {styleProfilePage.icon1} name="map-outline" color="#7D848D" size={25}/>
                    <Text style = {styleProfilePage.text1}>Products</Text>
                    <Icon style = {styleProfilePage.iconChevronforward} name="chevron-forward" color="#7D848D" size={25}/>
                </TouchableOpacity>
            </View>
            : null}
            <View style = {styleProfilePage.viewBtnBill}>
                <TouchableOpacity style = {styleProfilePage.BtnProfile} onPress={() => {
                    navigation.navigate('OrderHistoryPage', {user})
                }}>
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
                <TouchableOpacity style = {styleProfilePage.BtnProfile} onPress={()=>{navigation.navigate('WalletPage', {id: user.id_user})}}>
                    <Icon style = {styleProfilePage.icon1} name="wallet-outline" color="#7D848D" size={25}/>
                    <Text style = {styleProfilePage.text1}>Wallet</Text>
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
                <TouchableOpacity style = {styleProfilePage.BtnLogout} onPress={async () => {
                        try {
                        await AsyncStorage.removeItem('userToken');
                        await AsyncStorage.setItem('balance', '0');
                        navigation.navigate('SplishPage');
                        } catch (error) {
                        console.error('Lỗi khi xóa userToken:', error);
                        }
                    }}> 
                    <Text style = {styleProfilePage.textLogout}>Log out</Text>
                    <Icon style = {styleProfilePage.iconLogout} name="log-out-outline" color="#FFF" size={25}/>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
