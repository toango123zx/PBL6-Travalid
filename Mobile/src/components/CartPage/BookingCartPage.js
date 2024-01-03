import React from "react";
import {useState, useEffect} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar, 
    ScrollView, 
    TouchableOpacity, 
    SafeAreaView,
    Dimensions,
    FlatList,
    TextInput,
    Alert
} from 'react-native'
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import ItemInCart from "./ItemInCart";
import {useSelector} from 'react-redux'
import {styleCartPage} from '../../themes/styleBookingCartPage'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import authApi from "../../API/auth";
export default BookingCartPage = ({route}) => {
    const [total, setTotal] = useState(0)
    const [dataList, setDataList] = useState([]);
    const [dataPayment, setDataPayment] = useState([]);
    const [price, setPrice] = useState(0);
    const [componentItemList, setComponentCList] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState([])
    const navigation = useNavigation(); // Sử dụng hook navigation

    const goToPaymentPage = () => {
        // console.log("data:  "+ JSON.stringify(dataPayment,null,3))
      navigation.navigate('PaymentPage',{
        dataList: dataPayment,
        price: price,
        
    }
        );
    };
    useFocusEffect(
        React.useCallback(() => {
            const viewCart = async () => {
                try {
                    const token = "bearer " + await AsyncStorage.getItem('userToken')
                    const res = await authApi.viewCart({
                        "token": token
                    })
                    //console.log(JSON.stringify(res.data.data, null, 2))
                    setData(res.data.data)
                    
                } catch (error) {
                    console.log(error);
                }
            }
           viewCart()
        }, [])
    );
    // useEffect(() => {
    //     const viewCart = async () => {
    //         try {
    //             const token = "bearer " + await AsyncStorage.getItem('userToken')
    //             const res = await authApi.viewCart({
    //                 "token": token
    //             })
    //             //console.log(JSON.stringify(res.data.data, null, 2))
    //             setData(res.data.data)
                
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //    viewCart()
    //    console.log(data);
    //   }, []);
    
    useEffect(() => {
        //console.log('Data in Payment:', dataPayment);
        
      }, [dataPayment]);  
    
    //   const validateInputQuantity = (text) => {
    //     const value = text.trim();
    
    //     if (/^\d+$/.test(value)) {
    //         const number = parseInt(value, 10);
      
    //         if (number >= 1) {
    //           // Valid number
    //           setQuantity(text);
    //         } else {
    //           // Number out of range
    //           Alert.alert('Please enter a number greater than 0');
    //         }
    //       } else {
    //         // Not a valid number
    //         setQuantity(1);
            
    //       }
          
        
    //   };
    const deleteItemInCart = async (item) => {
        try {
            const token = "bearer " + await AsyncStorage.getItem('userToken')
            const res = authApi.deleteScheduleInCart(item.id_cart, {
                "token": token
            })
            console.log("Delete :" +res.status)
        } catch (error) {
            console.log(error)
        }
    }
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleDelete = (itemToDelete) => {
        deleteItemInCart(itemToDelete)  }
    const handleAddToPayment = (itemToSelect) => {
        setDataPayment((prevList) => [...prevList, itemToSelect]);
        setPrice(price+itemToSelect.price)
    };
    const handleRemoveInPayment = (itemToSelect) => {
        setDataPayment((prevList) => prevList.filter((item) => item !== itemToSelect));
        setPrice(price-itemToSelect.price);
        
    };
    return(
        <View style = {styleCartPage.View}>
            <View style = {styleCartPage.viewTop}>
                <Text style = {styleCartPage.textHeader}>My booking cart</Text>
            </View>
            <ScrollView>
                {  
                    data.map((item) => (
                        <View key={item.id_schedule_product}>
                            <ItemInCart  data={item} onDelete={handleDelete} onAddtoPayment={handleAddToPayment} onRemoveInPayment={handleRemoveInPayment} />
                        </View>
                    ))
                }
            </ScrollView>

            <View style = {styleCartPage.viewBottom}>
                
                        
                        
                        <View style = {styleCartPage.viewSubTotal}>
                            <Text style = {styleCartPage.textTotal1}>SubTotal </Text>
                            <Text style = {styleCartPage.textTotal2}>{price}</Text>
                        </View>
                   
                
        
                    <TouchableOpacity style = {styleCartPage.btnCheckOut} onPress={goToPaymentPage}>
                        <Text style = {styleCartPage.textCheckOut}>Check out</Text>
                    </TouchableOpacity> 
                
            </View>
            
        </View>
    )
    
}