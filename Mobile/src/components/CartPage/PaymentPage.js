import React, { useEffect }  from "react";
import {useState} from 'react'

import {
    View,
    Text, 
    StyleSheet,
    ScrollView,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Modal,
    Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute } from "@react-navigation/native";

import { create } from "react-test-renderer";
import { styleCartPage } from "../../themes/styleBookingCartPage";
import authApi from "../../API/auth";
import ItemInPayment from "./ItemInPayment";
import DiscountInPayment from "./DiscountInPayment";
import SelectDiscount from "./SelectDiscount";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
export default PaymentPage = ({route}) => {
    
    const [showD, setShowD] = useState(false)
    const {dataList, price} = route.params;
    const [data, setData] = useState([])
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1);
    const [discount, setDiscount] = useState(null);
    const [discountData, setDiscountData] = useState([])
    const [selectPay, setSelectPay] = useState(false);
    const [nameDis, setNameDis] = useState(null);
    const [idDiscount, setIDDiscount] = useState(null)
    const [id_schedule, setIDSchedule] = useState([])
    const currentDate = new Date()
    const handleBackPress = () => {
        // Thực hiện chuyển hướng về trang trước đó
        navigation.goBack();
      };
      const handlePress = () => {
        // Thực hiện chuyển hướng về trang trước đó
        navigation.navigate('OrderComplete');
      };  
    const CreateBill = async () => {
        try {
            const newSchedule = dataList.map((data) => data.id_schedule);
            console.log(newSchedule)
            const token = "bearer " + await AsyncStorage.getItem('userToken')
            const res = await authApi.createBill(
            {
                id_discount: idDiscount ? [idDiscount]: [],
                id_schedule_product: newSchedule,
                quantity: quantity
            },
            {
                token: token
            }
            )
            console.log(res.status)
            const storedBalance = await AsyncStorage.getItem('balance');
            // Parse the storedBalance to a number if needed
            const balanceValue = parseFloat(storedBalance);
            AsyncStorage.setItem('balance', JSON.stringify(balanceValue - (Math.round(price - price*discount/100))))
            
            console.log(balanceValue- (Math.round(price - price*discount/100)))
            navigation.navigate('OrderComplete');
             
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        
        
        //console.log("data da nhan : "+JSON.stringify(dataList, null, 2))
        const getDiscountByIdProduct = async () => {
                // if (Array.isArray(data) ) {
                // setData(JSON.parse(dataList));
                // console.log(data)
            
                try {
                    const apiCalls = dataList.map(async (item) => {
                        const token = "bearer " + await AsyncStorage.getItem('userToken')
                        const response = await authApi.getDiscountByProduct(item.id,{
                            "token": token
                        })
                        
                        
                        
                        return response.data.data
                    });
                    const results = await Promise.all(apiCalls)
                    const resArrFlat = results.flat()
                    setDiscountData(resArrFlat)
                    
                } catch (error) {
                    console.log(error);
                    Alert.alert("Can't Pay")
                }
            
                
              
        }

        getDiscountByIdProduct()
        
        //console.log(discountData),
        
        
        
      }, []);
    return(
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack} onPress={handleBackPress}>
                    <Icon name = 'chevron-back-outline' color = '#FFF' size = {25}/>
                </TouchableOpacity>
                <Text style = {style.textPayment}>Payment</Text>
            </View>

                       
            <ScrollView style = {style.viewBookedTour}>
                { 
                    dataList.map((data) => (
                        <View  key={data.id}>
                            <ItemInPayment data={data} />
                        </View>
                    ))
                }
            </ScrollView>

            
            <View style = {style.viewQuantity}>
                <Text style = {style.textQuantity}>Quantity</Text>
                <View style = {style.viewAddQuantity}>
                    <TouchableOpacity style = {style.btnTru} onPress={()=>{if(quantity>=1) {setQuantity(quantity-1)}}} onLongPress={()=>{if(quantity>=5) {setQuantity(quantity-5)}}}>
                        <Icon name = 'remove' color = '#000' size ={20}/>
                    </TouchableOpacity>
                    <View style={style.inputQuantity}>
                                {/* <TextInput 
                                    
                                    style={styleCartPage.inputQuantity1}
                                    keyboardType="numeric"
                                    onChangeText={validateInputQuantity}
                                    value={quantity}/> */}
                        <Text style={style.inputQuantity1}>{quantity}</Text>
                    </View>
                            
                    <TouchableOpacity style = {style.btnCong} onPress={()=> {setQuantity(quantity+1)}} onLongPress={()=> {setQuantity(quantity+5)}}>
                        <Icon name = 'add' color = '#000' size ={20}/>
                    </TouchableOpacity>
                            
                </View>
            </View>
            <View style = {{width: width, height: 4, backgroundColor: 'rgba(128, 128, 128, 0.3)' }}></View>                        

            <View style = {style.viewVoucher}>
                <View style = {style.viewVoucherLeft}>
                    <Icon name = 'ticket-outline' color = '#FF6B00' size ={20}/>
                    <Text style = {style.textVoucher}> Voucher</Text>
                </View>
                <TouchableOpacity style = {style.viewVoucherRight} onPress={()=>{setShowD(!showD)}}>
                    {nameDis === null ? (<Text style = {style.textSeclect}>Select discount</Text>) : <Text style = {style.textSeclect}>{nameDis}</Text>}
                    
                    <Icon name = 'chevron-forward-outline' color = '#6F757C' size ={20}/>
                </TouchableOpacity>                      
            </View>

            
                

                <ScrollView contentContainerStyle = {style.viewPay}>
                {discountData.map((discountData) => (
                    //console.log('discoutn data: '+ JSON.stringify(discountData)),
                    
                    currentDate.getTime()>new Date(discountData.start_time).getTime() && currentDate.getTime()<new Date(discountData.end_time).getTime() ?
                    <DiscountInPayment key={discountData.id_discount} data={discountData} setDiscount = {setDiscount} setNameDis = {setNameDis} setIDDiscount = {setIDDiscount}/> : null
                ))}
                          
                </ScrollView>
                
                                 
            

            <View style = {{width: width, height: 4, backgroundColor: 'rgba(128, 128, 128, 0.3)' }}></View>
            <View style = {style.viewSubTotal}>
                <View style = {style.viewTopSubTotal}>
                    <Text style = {style.textDiscount}>Discount</Text>
                    {discount === null? (<Text style = {style.text11}>0 VND</Text>): <Text style = {style.text11}>-{Math.round(price*discount/100)} VND</Text>}
                    
                </View>
                <View style = {style.viewBotSubTotal}>
                    <Text style = {style.textDiscount}>Subtotal</Text>  
                    <Text style = {style.text11}>{price} VND</Text>                 
                </View>
            </View>
            <View style = {{width: width, height: 4, backgroundColor: 'rgba(128, 128, 128, 0.3)' }}></View>
            <View style = {style.viewCheckOut}>
                <View style = {style.leftCheckout}>
                    <Text style = {style.textTotalAmount}>Total amount</Text>
                    <Text style = {style.textTotalAmount1}>{Math.round(price - price*discount/100)} VND</Text>                        
                </View>
                <TouchableOpacity style = {style.btnCheckout} onPress={CreateBill}>
                    <Text style = {style.textCheckout}>Pay</Text>
                </TouchableOpacity>
            </View>

            {/* <Modal visible = {showModal} animationType="slide" transparent={true}>
                <SelectDiscount setShowModal = {setShowModal} setDiscount = {setDiscount} data= {discountData} />
            </Modal> */}

        </View>
    )
}


const PayCard = () =>{
    const [cardNumber, setCardNumber] = useState()
    const [expirationDate, setExpirationDate] = useState()
    const [cvv, setCvv] = useState()
    const [saveCard, setSaveCard] = useState(false)
    return(
        <View style = {stylePayCard.View}>
            <View style = {{...stylePayCard.view1, flexDirection: 'column'}}>
                <Text style = {stylePayCard.textCardNumber}>Card Number</Text>
                <View style = {stylePayCard.viewCardNumber}>
                    <TextInput
                        placeholder="1234 5678 9101 1121"
                        placeholderTextColor={'rgba(172, 172, 172, 1)'}
                        style = {stylePayCard.inputCardNumber}
                        keyboardType="numeric"
                        onChange={setCardNumber}
                        value={cardNumber}
                    />
                </View>
            </View>
            
            <View style = {stylePayCard.view1}>
                <View style = {stylePayCard.viewExpiration}>
                    <Text style = {stylePayCard.textCardNumber}>Expiration Date</Text>
                    <View style = {stylePayCard.viewInputExDate}>
                        <TextInput
                            placeholder="MM/YY"
                            placeholderTextColor={'rgba(172, 172, 172, 1)'}
                            style = {stylePayCard.inputCardNumber}
                            keyboardType="numeric"
                            onChangeText={setExpirationDate}
                            value={expirationDate}
                        />
                    </View>
                </View>
                <View style = {stylePayCard.viewCVV}>
                    <Text style = {stylePayCard.textCardNumber}>CVV</Text>
                    <View style = {stylePayCard.viewInputExDate}>
                        <TextInput
                            placeholder="123"
                            placeholderTextColor={'rgba(172, 172, 172, 1)'}
                            style = {stylePayCard.inputCardNumber}
                            keyboardType="numeric"
                            onChangeText={setCvv}
                            value={cvv}
                        />
                    </View>
                </View>
            </View>
            <View style = {stylePayCard.viewSaveCardDetails}>
                <TouchableOpacity style = {saveCard === true ? [stylePayCard.btnSaveCard, { borderColor: 'rgba(255, 107, 0, 1)' }] : stylePayCard .btnSaveCard} onPress={()=>{setSaveCard(!saveCard)}}>
                    <View style = {saveCard === true ? [stylePayCard.btnSaveCard1, { backgroundColor: 'rgba(255, 107, 0, 1)' }] : stylePayCard .btnSaveCard1}></View>
                </TouchableOpacity>
                <Text style = {saveCard === true ? [stylePayCard.textSaveCard, { color: '#000' }] : stylePayCard .textSaveCard}>Save card details</Text>
            </View>
            
        </View>
    )
}
const PayBank = () =>{
    
}
const style = StyleSheet.create({
    View: {
        width: width,
        height: height,
        borderWidth: 0,
        marginTop: statusBarHeight,
        backgroundColor: '#FFF'
    },
    //Header
    viewHeader: {
        width: 380,
        height: 48,
        marginTop: 10,
        marginLeft: (width-380)/2,
        justifyContent: 'center'

    },
    btnBack: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FF852C',
        position: 'absolute',
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0
    },
    textPayment: {
        color: '#FF852C',
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    //BookerTour
    viewBookedTour: {
        width: 380,
        height: 300,
        borderWidth: 0,
        marginLeft: (width-380)/2,
        marginTop: 10,
    },
    //Quantity  
    viewQuantity: {
        width: 380,
        height: 40,
        borderWidth: 0,
        marginLeft: (width-380)/2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textQuantity: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
        marginRight: 25

    },
    viewAddQuantity: {
        width: '100%',
        height: 25,
        borderWidth: 0,
        marginTop: 0,
        flexDirection: 'row'
    },
    btnTru: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnCong: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 65,
    },
    inputQuantity: {
        width: 100 - 60,
        height: 25,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.5)',
       
    },
    inputQuantity1: {
        width: 100 - 60,
        height: 25,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        position: 'absolute',
        bottom: -0,
        fontFamily: 'Montserrat Medium',
        fontSize: 22,
        textAlign: 'center',
        color: '#000'
       
    },
    //Voucher
    viewVoucher: {
        width: 380,
        height: 40,
        borderWidth: 0,
        marginLeft: (width-380)/2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewVoucherLeft: {
        flexDirection: 'row',

    } ,
    viewVoucherRight: {
        flexDirection: 'row',
        marginTop: 2
    },
    textVoucher: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
        
    },
    textSeclect: {
        color: '#6F757C',
        fontFamily: 'Montserrat Medium',
        fontSize: 14,
        
    },
    //Pay
    viewPay: {
        width: 380,
        height: 250,
        borderWidth: 0,
        marginLeft: (width-380)/2
    },
    textPayWith: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'Montserrat SemiBold',
        marginTop: 5
    },
    viewPayment: {
        width: 380,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    viewCard: {
        height: 18,
        width: 182.5,
        borderWidth: 0,
        flexDirection: 'row',
        
    },
    viewBank: {
        height: 18,
        width: 182.5,
        borderWidth: 0,
        flexDirection: 'row',
        marginLeft: 15
        
    },
    btnCard: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: 'rgba(172, 172, 172, 1)',
        justifyContent: 'center',
        alignItems: 'center'
        
        
    },
    btnBank: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: 'rgba(172, 172, 172, 1)',
        
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    textCard: {
        fontFamily: 'Montserrat Medium',
        fontSize: 14,
        color: 'rgba(172, 172, 172, 1)',
        lineHeight: 17.5
    },
    check: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FFF'
    },
    //Subtotal
    viewSubTotal: {
        width: 380,
        height: 70,
        borderWidth: 0,
        marginLeft: (width-380)/2
    },
    viewTopSubTotal: {
        width: 380,
        height: 30,
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        
    },
    viewBotSubTotal: {
        width: 380,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0,
    },
    textDiscount: {
        color: '#000',
        fontFamily : 'Montserrat Medium',
        fontSize: 16,
        lineHeight: 30,
    },
    text11:{
        color: 'rgba(255, 107, 0, 1)',
        fontFamily : 'Montserrat Regular',
        fontSize: 16,
        lineHeight: 30,
    },
    //Checkout
    viewCheckOut: {
        width: 380,
        height: 60,
        borderWidth: 0,
        marginLeft: (width-380)/2,
        flexDirection: 'row'
    }
    ,leftCheckout: {
        width: 182.5,
        height: 40,
        borderWidth: 0,
        marginTop: 10,
        
    }
    ,textTotalAmount: {
        color: '#000',
        fontFamily : 'Montserrat Medium',
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'right'
    }
    ,textTotalAmount1: {
        color: '#FF6B00',
        fontFamily : 'Montserrat Medium',
        fontSize: 18,
        textAlign: 'right'
    }
    ,btnCheckout: {
        width: 182.5,
        marginLeft: 15,
        height: 45,
        borderRadius: 10,
        backgroundColor: "rgba(255, 133, 44, 1)",
        marginTop: 7.5,
        
    }
    ,textCheckout: {
        color: '#FFF',
        fontFamily: 'Montserrat Medium',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 45
        
    }

})

const stylePayCard = StyleSheet.create({
    View: {
        height: 170,
        width: 380,
        borderWidth: 0,
        marginTop: 0
    }
    ,textCardNumber: {
        color: '#0A0D13',
        fontFamily: 'Montserrat Medium',
        fontSize: 15
    }
    ,viewCardNumber: {
        width: 380,
        height: 35,
        borderRadius: 5,
        borderColor: '#ACACAC',
        borderWidth: 1,
        marginTop: 7
    }
    ,inputCardNumber: {
        height: 35,
        width: 365,
        marginLeft: 8,
        marginTop: 1,
        color: 'rgba(10, 13, 19, 1)',
        fontFamily: 'Montserrat Regular',
        fontSize: 15,
    }
    ,view1: {
        width: 380,
        height: 62,
        borderWidth: 0,
        flexDirection: 'row',
        marginTop: 13
    }
    ,viewExpiration: {
        width: 182.5,
        height: 62,
        borderWidth: 0
    }
    ,viewCVV: {
        width: 182.5,
        height: 62,
        borderWidth: 0,
        marginLeft: 15
    }
    ,viewInputExDate: {
        height: 35,
        width: 182.5,
        borderRadius: 5,
        borderColor: '#ACACAC',
        borderWidth: 1,
        marginTop: 7
    }
    ,viewSaveCardDetails: {
        width: 380,
        height: 15,
        flexDirection: 'row',
        marginTop: 15
        
    }
    ,btnSaveCard: {
        width: 15,
        height: 15,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'rgba(172, 172, 172, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,btnSaveCard1: {
        width: 10,
        height: 10,
        borderRadius: 2,
        backgroundColor: '#FFF'
    }
    ,textSaveCard: {
        color: 'rgba(172, 172, 172, 1)',
        fontFamily: 'Montserrat Regular',
        fontSize: 15,
        lineHeight: 17,
        marginLeft: 7
    }
})


