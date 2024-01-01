import React from "react";
import {useState, useEffect} from "react";
import AttractionComponent from "./Product";
import {View, Text, TextInput, TouchableOpacity, Modal, FlatList, Image, ScrollView, SafeAreaView, StatusBar, StyleSheet, Dimensions} from 'react-native'
import { styleAttractionPage } from "../themes/styleAttractionPage";
import Icon from 'react-native-vector-icons/Ionicons'
import authApi from "../API/auth";
import { useFocusEffect } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get('window');
export default AttractionPage = () => {
    const [place, setPlace] = useState(placeData);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [modalVisible, setModalVisible] = useState(false)
    const [productData, setProductData] = useState([])
    const [page, setPage] = useState(1)
    const navigation = useNavigation()
    const handlePlaceClick = () => {
        setModalVisible(true);
      };
      const handleCloseModal = () => {
        setModalVisible(false);
      };
    useEffect(()=>{

        const getAllProduct = async () => {
            try {
                const res = await authApi.getProduct(page)
                setProductData(res.data.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        console.log("-----------------------------------------------------")
        
        getAllProduct();
    },[page])
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
    const placeData = [
        { id: 1, name: 'Place 1' },
        { id: 2, name: 'Place 2' },
        { id: 3, name: 'Place 3' },
    ]
    const productData1 = [
        {
            name: 'Trung',
            avg_rate: 3,
            city: 'Hue',
            image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'
        }
    ]
    const [value, setValue] = useState('Place');
    const data = [
        { label: 'Latest', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
    ];
    return(
        <SafeAreaView style = {styleAttractionPage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleAttractionPage.viewHeader}>

                <Text style = {styleAttractionPage.text} >Find the Attraction</Text>
                {showProfile === true ?
                (
                    <TouchableOpacity style = {styleAttractionPage.btnNof}>
                        <Icon name="notifications-outline" color="#000" size={25} />
                    </TouchableOpacity>
                ) : 
                (
                    <TouchableOpacity style = {styleAttractionPage.btnSignIn} onPress={()=>{navigation.navigate('SignInPage')}}>
                        <Text style = {styleAttractionPage.textSignIn}>Sign In</Text>
                    </TouchableOpacity>
                )
                }
            </View >
            <View style = {styleAttractionPage.viewSearchPlace}>
                <View style = {styleAttractionPage.viewTextInput}>
                    <TextInput
                        placeholder={'Search'}
                        onChangeText={setPlace}
                        value={place}
                        style = {styleAttractionPage.textInputSeach}
                        placeholderTextColor={'#7D848D'}
                    />
                </View>
                <View style = {{width: 120, height: 25, borderLeftWidth: 2, borderLeftColor: '#7D848D'}}></View>
                <Dropdown
                        style={style.dropdown}
                        placeholderStyle={style.placeholderStyle}
                        selectedTextStyle={style.selectedTextStyle}
                        inputSearchStyle={style.inputSearchStyle}
                        iconStyle={style.iconStyle}
                        itemContainerStyle={style.itemsStyle}
                        itemTextStyle={style.itemDropStyle}
                        containerStyle={style.dropStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Place'}
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                        setValue(item.value);
                        }}
                    
                    />
                

            </View>

            <View style = {styleAttractionPage.viewFilterPrice}>
                <View style = {styleAttractionPage.viewPrice}>
                    <TextInput
                        placeholder={'Min price'}
                        onChangeText={setMinPrice}
                        value={minPrice}
                        style = {styleAttractionPage.textPrice}
                        placeholderTextColor={'#7D848D'}
                        />               
                </View>
                <View style = {styleAttractionPage.viewPrice}>
                    <TextInput
                        placeholder={'Max price'}
                        onChangeText={setMaxPrice}
                        value={maxPrice}
                        style = {styleAttractionPage.textPrice}
                        placeholderTextColor={'#7D848D'}
                        />     
                </View>
                <View style = {styleAttractionPage.viewButtonSearch}>
                    <TouchableOpacity style = {styleAttractionPage.buttonSearch}>
                        <Icon name = 'search-outline' color = '#FFF' size = {30}/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style = {{marginTop: 20}}>
                <View style = {styleAttractionPage.viewAttractions}>
                    {productData.map((productData) => (
                        <AttractionComponent key={productData.id_product} productData={productData} />
                    ))}
                </View>
                <View style = {style.viewBottom}>
                    <TouchableOpacity style = {style.btnPage} 
                    onPress={()=> {
                        if (page>1) setPage(page-1) 
                    }}>
                        <Icon name = 'arrow-back' color = '#FFF' size = {25}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {style.btnPage} 
                    onPress={()=>{
                        setPage(page+1)
                    }}>
                        <Icon name = 'arrow-forward' color = '#FFF' size = {25}/>
                    </TouchableOpacity>
                </View>   
                <View style ={{height: 100}}>
                </View>                  
            </ScrollView>
            
        </SafeAreaView>
        
    )
}

const style = StyleSheet.create({
    dropdown: {
        width: 120,
        height: 55,
        borderWidth: 0,
        position: 'absolute',
        borderRadius: 17.5,
        right: 0,
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
    },
    placeholderStyle: {
        fontSize: 16,
        marginLeft: 20,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
    },
    iconStyle: {
        width: 30,
        height: 30,
        marginRight : 20,
        
    },
    inputSearchStyle: {
        height: 23,
        fontSize: 16,
        fontFamily: 'Montserrat SemiBold',
    },
    itemDropStyle: {
        fontSize: 16,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
        padding: 0,
        position: 'absolute',
        textAlign: 'center',
        left: 13,
       

    },
    itemsStyle: {
        height: 30,
        justifyContent: 'center',
         borderRadius: 17.5,
        
       
        
    },
    dropStyle: {
        borderRadius: 17.5,
    }
    ,viewBottom: {
        height: 40,
        width: 200,
        borderWidth: 0,
        marginLeft: (width-200)/2,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
    ,btnPage: {
        height: 40,
        width: 70,
        borderRadius: 20,
        backgroundColor: '#FF852C',
        justifyContent: 'center',
        alignItems: 'center'
    }
})