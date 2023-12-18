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
export default BookingCartPage = ({route}) => {
    const [total, setTotal] = useState(0)
    const [dataList, setDataList] = useState([]);
    const [dataPayment, setDataPayment] = useState([]);
    
    const [componentItemList, setComponentCList] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const data = useSelector((state) => state.data).data;
    const navigation = useNavigation(); // Sử dụng hook navigation

    const goToPaymentPage = () => {
      navigation.navigate('PaymentPage');
    };
    useEffect(() => {
        
        if (data) {
            setDataList((prevList) => [...prevList, data]);
            
        }
      }, [data]);
    useEffect(() => {
        console.log('Data in Payment:', dataPayment);
        
      }, [dataPayment]);  
    
      const validateInputQuantity = (text) => {
        const value = text.trim();
    
        if (/^\d+$/.test(value)) {
            const number = parseInt(value, 10);
      
            if (number >= 1) {
              // Valid number
              setQuantity(text);
            } else {
              // Number out of range
              Alert.alert('Please enter a number greater than 0');
            }
          } else {
            // Not a valid number
            setQuantity(1);
            
          }
          
        
      };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    const handleDelete = (itemToDelete) => {
        setDataList((prevList) => prevList.filter((item) => item !== itemToDelete));
      };  
    const handleAddToPayment = (itemToSelect) => {
        setDataPayment((prevList) => [...prevList, itemToSelect]);
    };
    const handleRemoveInPayment = (itemToSelect) => {
        setDataPayment((prevList) => prevList.filter((item) => item !== itemToSelect));
    };
    return(
        <View style = {styleCartPage.View}>
            <View style = {styleCartPage.viewTop}>
                <Text style = {styleCartPage.textHeader}>My booking cart</Text>
            </View>
            <ScrollView>
                {data && (  
                    dataList.map((item) => (
                        <View>
                            <ItemInCart key={item.id} data={item} onDelete={handleDelete} onAddtoPayment={handleAddToPayment} onRemoveInPayment={handleRemoveInPayment} />
                        </View>
                    ))
                )}
            </ScrollView>

            <View style = {styleCartPage.viewBottom}>
                <View style = {styleCartPage.view1}>
                    <View style = {styleCartPage.viewQuantity}>
                        <Text style = {styleCartPage.textQuantity}>Quantity</Text>
                        <View style = {styleCartPage.viewAddQuantity}>
                            <TouchableOpacity style = {styleCartPage.btnTru} onPress={()=>{if(quantity>=1) {setQuantity(quantity-1)}}} onLongPress={()=>{if(quantity>=5) {setQuantity(quantity-5)}}}>
                                <Icon name = 'remove' color = '#000' size ={27}/>
                            </TouchableOpacity>
                            <View style={styleCartPage.inputQuantity}>
                                {/* <TextInput 
                                    
                                    style={styleCartPage.inputQuantity1}
                                    keyboardType="numeric"
                                    onChangeText={validateInputQuantity}
                                    value={quantity}/> */}
                                <Text style={styleCartPage.inputQuantity1}>{quantity}</Text>
                            </View>
                            
                            <TouchableOpacity style = {styleCartPage.btnCong} onPress={handleIncrement} onLongPress={()=> {setQuantity(quantity+5)}}>
                                <Icon name = 'add' color = '#000' size ={27}/>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    <View style = {styleCartPage.view11}>
                        <View style = {styleCartPage.viewVoucher}>
                            <Icon name = 'ticket-outline' color = '#FF6B00' size = {15}/>
                            <Text style = {styleCartPage.textVoucher}> Voucher</Text>
                            <TouchableOpacity style = {styleCartPage.btnSelectVoucher}>
                                <Text style = {styleCartPage.textSelect}>Select/enter code</Text>
                                <Icon name = 'chevron-forward-outline' color = '#6F757C' size = {15}/>
                            </TouchableOpacity>
                        </View>
                        <View style = {styleCartPage.viewSaved}>
                            <Text style = {styleCartPage.textSaved1}>Saved</Text>
                            <Text style = {styleCartPage.textSaved2}>1000</Text>
                        </View>
                        <View style = {styleCartPage.viewSubTotal}>
                            <Text style = {styleCartPage.textTotal1}>SubTotal</Text>
                            <Text style = {styleCartPage.textTotal2}>{total}</Text>
                        </View>
                    </View>
                </View>
                <View style = {styleCartPage.view2}>
                    <View style = {styleCartPage.viewCheckBoxAll}>
                        
                    </View>
                    <TouchableOpacity style = {styleCartPage.btnCheckOut} onPress={goToPaymentPage}>
                        <Text style = {styleCartPage.textCheckOut}>Check out</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
    
}