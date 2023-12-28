import React from "react";
import { useEffect, useState } from "react"; 'react'
import {Image, ScrollView, Text, TouchableOpacity, View, SafeAreaView, StatusBar} from 'react-native'
import { styleHomePage, styleTopDestination, styleService } from "../themes/styleHomePage";
import Icon from 'react-native-vector-icons/Ionicons'
import authApi from "../API/auth";
import Attraction from "./Product";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const statusBarHeight = StatusBar.currentHeight || 0;

export default HomePage = () => {
    const [productData, setProductData] = useState([])
    const [user, setUser]= useState([]);
    const [showProfile, setShowProfile] = useState(false);
    
    const navigation = useNavigation()
    
    useEffect(()=>{

        const getAllProduct = async () => {
            try {
                const res = await authApi.getProduct()
                setProductData(res.data.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        const getProfileUser = async () =>{
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
        getAllProduct();
    },[])
    
    useFocusEffect(
        React.useCallback(() => {
        const checkUserToken = async () => {
            try {
            const token = await AsyncStorage.getItem('userToken');
            setShowProfile(!!token);
            setUser(user)
            //console.log(token);
            } catch (error) {
            console.error('Lỗi khi kiểm tra userToken:', error);
            }
        };

        checkUserToken();
        }, [])
    );
    const attractionData = [
        {
            id: 1,
            name: 'Ngu Hanh Son',
            location: 'Da Nang',
            rate: '4.6',
            price: '120.000'
        },
        {
            id: 2,
            
            name: 'Than Tai Waterfall',
            location: 'Da Nang',
            rate: '4.2',
            price: '100.000'
        },
        {
            id: 3,
           
            name: 'Phu Quoc Island',
            location: 'Phu Quoc',
            rate: '4.8',
            price: '240.000'
        },
        {
            id: 4,
            
            name: 'Son Tra Peninsula',
            location: 'Da Nang',
            rate: '4.7',
            price: '50.000'
        },
        {
            id: 5,
            
            name: 'Ngu Hanh Son',
            location: 'Da Nang',
            rate: '4.6',
            price: '190.000'
        }

    ]


    if (user.name === 'underfined') {
        return (
            <View style = {{width: 400, height: 400, backgroundColor: '#000'}}>
                
            </View>
        )
    } else 
    return(
        <SafeAreaView style = {styleHomePage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            
            <ScrollView style = {styleHomePage.ScrollView}>    
                <View style = {{...styleHomePage.viewImage, marginTop: statusBarHeight + 10 + 48 + 20 }}>
                    <View style = {styleHomePage.viewImageBg}>
                        <Image style = {styleHomePage.imagebg} source={require('../assets/images/imagebg.png')}/>
                    </View >
                    <View style = {styleHomePage.viewImage1}>
                        <Image style = {styleHomePage.image1} source={require('../assets/images/image1.png')}/>
                    </View>
                    <View style = {styleHomePage.viewLogo}>
                        <Image source={require('../assets/images/Logo_Travalid.png')} style = {styleHomePage.logo}/>
                    </View>
                </View>

                <View style = {styleTopDestination.ViewText}>
                    <Text style = {styleTopDestination.textTopDes}>Top Destination</Text>
                    <TouchableOpacity><Text style = {styleTopDestination.textViewAll}>View all</Text></TouchableOpacity>
                </View>
                <View style = {styleTopDestination.ViewDes}>
                    {productData.map((productData) => (
                        <AttractionComponent key={productData.id_product} productData={productData} />
                    ))}
                </View>
                
                    <View style = {styleService.ViewText}>
                        <Text style = {styleService.textServices}>Services</Text>
                        <Text style = {styleService.text}>Our top value categories for you</Text>
                    </View>     
                
                <View style = {styleService.ViewAllServices}>
                    <View style = {styleService.ViewServices}>
                        <View style = {styleService.ViewIcon}>
                            <Image style = {styleService.image} source={require('../assets/images/services1.png')}/>
                        </View>
                        <Text style = {styleService.text}>Best Tour Guide</Text>
                    </View>
                    <View style = {styleService.ViewServices}>
                        <View style = {styleService.ViewIcon}>
                            <Image style = {styleService.image} source={require('../assets/images/services2.png')}/>
                        </View>
                        <Text style = {styleService.text}>Best Tour Guide</Text>
                    </View> 
                    <View style = {styleService.ViewServices}>
                        <View style = {styleService.ViewIcon}>
                            <Image style = {styleService.image} source={require('../assets/images/services3.png')}/>
                        </View>
                        <Text style = {styleService.text}>Best Tour Guide</Text>
                    </View> 
                    <View style = {styleService.ViewServices}>
                        <View style = {styleService.ViewIcon}>
                            <Image style = {styleService.image} source={require('../assets/images/services4.png')}/>
                        </View>
                        <Text style = {styleService.text}>Best Tour Guide</Text>
                    </View> 
                    <View style = {styleService.ViewServices}>
                        <View style = {styleService.ViewIcon}>
                            <Image style = {styleService.image} source={require('../assets/images/services5.png')}/>
                        </View>
                        <Text style = {styleService.text}>Best Tour Guide</Text>
                    </View> 
                    <View style = {styleService.ViewServices}>
                        <View style = {styleService.ViewIcon}>
                            <Image style = {styleService.image} source={require('../assets/images/services1.png')}/>
                        </View>
                        <Text style = {styleService.text}>Best Tour Guide</Text>
                    </View>  
                </View>
            </ScrollView>
            {showProfile === true ? 
            (<View style = {styleHomePage.view}>
                <View style = {styleHomePage.viewUser}>
                    <View style = {styleHomePage.imageUser}>
                        
                    </View>
                    <View style = {styleHomePage.viewUserName}> 
                        <Text style = {styleHomePage.textUserName}>{user.name}</Text>
                    </View>
                    
                </View>
                <View style = {styleHomePage.viewNofitication}>
                    <TouchableOpacity>
                        <Text><Icon name="notifications-outline" color="#000" size={25} /></Text>
                    </TouchableOpacity>
                    
                    {/* <Image source={require('../assets/images/menu-notifications.png')}/> */}
                </View>
            </View> ): 
            (<View style = {styleHomePage.view}>
                    <TouchableOpacity 
                    style = {{
                        width: 100,
                        height: 38,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: 5,
                        right: 0,
                        backgroundColor: '#FF852C',
                        borderRadius: 18
                    }}
                    onPress={() => {navigation.navigate('SignInPage')}}>
                        <Text style = {{
                            color: '#FFF',
                            fontFamily: 'Montserrat SemiBold',
                            fontSize: 16,
                            letterSpacing: 0.6
                        }}>Sign In</Text>
                    </TouchableOpacity>
                    
                    {/* <Image source={require('../assets/images/menu-notifications.png')}/> */} 
            </View> )}
        </SafeAreaView>
    )
}