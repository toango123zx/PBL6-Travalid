import React from "react";
import {useState, useEffect} from 'react';
import{ View, Text, Image, StatusBar, ScrollView, TouchableOpacity, SafeAreaView, Modal,Alert} from 'react-native'
import Svg, {Path} from 'react-native-svg';
import {styleDetailsPage} from "../../themes/styleDetailsPage";
import InfoPage from "./InfoPage";
import RaitingsPage from "./RaitingsPage";
import SupplierPage from "./SupplierPage";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from "@react-navigation/native";
import  Calendar  from "react-native-calendars/src/calendar";
import DateTimePicker from "../DateTimePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BookingCartPage from "../CartPage/BookingCartPage";
import {useDispatch} from 'react-redux'
import {setSharedData} from '../../reducers/actions'
import authApi from "../../API/auth";
import moment from 'moment'
const INFO = 'INFO';
const RAITING = 'RAITING';
const SUPPLIER = 'SUPPLIER';
export default DetailsPage = ({route}) => {
    const { id, rate, count } = route.params;
    const [page, setPage] = useState('INFO');
    const [product, setProduct] = useState([])
    const [schedule, setSchedule] = useState([])
    const [supplier, setSupplier] = useState([])
    const navigation = useNavigation();
    const handleBackPress = () => {
        // Thực hiện chuyển hướng về trang trước đó
        navigation.goBack();
      };
    const [navigate, setNavigate] = useState(false);
    useFocusEffect(
        React.useCallback(() => {
          const checkUserToken = async () => {
            try {
              const token = await AsyncStorage.getItem('userToken');
              setNavigate(!!token);
              //console.log(token);
            } catch (error) {
              console.error('Lỗi khi kiểm tra userToken:', error);
            }
          };
    
          checkUserToken();
        }, [])
      );
    useEffect(()=>{
        
        
        
        const getDetailProduct = async () => {
            try {
                const res = await authApi.getDetailProduct(id)
                setProduct(res.data.data)
                setSchedule(res.data.data.schedule_product)
                setSupplier(res.data.data.supplier)

            } catch (error) {
                console.log(error)
            }
        }
        
        getDetailProduct();
        console.log(JSON.stringify(product, null, 2));
        
    },[])
    const [showModal, setShowModal] = useState (false);
    const [showModalEnd, setShowModalEnd] = useState (false);
    const [yearStart, setYearStart] = useState(null);
    const [monthStart, setMonthStart] = useState(null);
    const [dayStart, setDayStart] = useState(null);
    const [hourStart, setHourStart] = useState(null);
    const [minStart, setMinStart] = useState(null);
    const [yearEnd, setYearEnd] = useState(null);
    const [monthEnd, setMonthEnd] = useState(null);
    const [dayEnd, setDayEnd] = useState(null);
    const [hourEnd, setHourEnd] = useState(null);
    const [minEnd, setMinEnd] = useState(null);
    const dispatch = useDispatch();  

    const dataToSend = {
        id: product.id_product,
        id_schedule: schedule.id_schedule_product,
        name: product.name,
        city: product.city,
        image: product.image,
        location: product.location,
        yearStart: yearStart,
        monthStart: monthStart,
        dayStart: dayStart,
        hourStart: hourStart,
        minStart: minStart,
        yearEnd: yearEnd,
        monthEnd: monthEnd,
        dayEnd: dayEnd,
        hourEnd: hourEnd,
        minEnd: minEnd,
       
    };
    
    const handlePress = () => {
        if (yearStart !== null &&
            monthStart !== null &&
            dayStart !== null &&
            hourStart !== null &&
            minStart !== null &&
            yearEnd !== null &&
            monthEnd !== null &&
            dayEnd !== null &&
            hourEnd !== null &&
            minEnd !== null) {
                const startDate = new Date(yearStart, monthStart -1 , dayStart, hourStart, minStart)
                const endDate = new Date(yearEnd, monthEnd -1, dayEnd, hourEnd, minEnd)
                if (startDate && endDate) {
                    const startMoment = moment(startDate);
                    const endMoment = moment(endDate);
              
                    if (startMoment.isBefore(endMoment)) {
                         
                        dispatch(setSharedData(dataToSend));
                        if(navigate===false) navigation.navigate('SignInPage')
                    } else {
                        Alert.alert("Vui long nhap thoi gian bat dau truoc thoi gian ket thuc")
                    }
                }
            
        } else {
            Alert.alert("Chua dien day du du lieu")
        }
       
      };
    
    return(
        <SafeAreaView style = {{width: '100%', height: '100%', backgroundColor: '#FFF'}}>
            
            <StatusBar translucent backgroundColor="transparent" />
            
            <Image style = {{width: '100%', height: 329, marginBottom: 25}}source={require('../../assets/images/bgDetailsPage.png')} />
            <View style={{ width: '100%', height: 42 , marginTop: 245.75 , position: 'absolute'}}>
                <Svg height="100%" width="100%">
                    <Path
                    d="M0 62.5948C0 48.0822 0 40.8259 2.30577 34.7816C5.34372 26.8181 11.4044 20.0305 18.9745 16.1137C24.7201 13.1409 31.7845 12.339 45.9133 10.7351C162.309 -2.47789 244.571 -2.69258 365.403 10.8159C379.567 12.3994 386.65 13.1911 392.406 16.1601C399.993 20.0734 406.063 26.86 409.109 34.8347C411.42 40.8852 411.42 48.1559 411.42 62.6973V593.2C411.42 609.558 411.42 617.737 408.748 624.189C405.184 632.791 398.35 639.626 389.747 643.189C383.296 645.861 375.116 645.861 358.758 645.861H52.6618C36.3036 645.861 28.1245 645.861 21.6727 643.189C13.0702 639.626 6.23566 632.791 2.67243 624.189C0 617.737 0 609.558 0 593.2V62.5948Z" fill="#FFF"
                    />
                </Svg> 
            </View>
            <View style = {styleDetailsPage.viewTop}>
                <TouchableOpacity style = {styleDetailsPage.btnChevron} onPress={handleBackPress} >
                    <Icon name="chevron-back" color="#FFF" size={25}/>
                </TouchableOpacity>
                <Text style = {styleDetailsPage.textDetails}>Details</Text>

                {navigate === true ? 
                (
                    <TouchableOpacity style = {styleDetailsPage.btnTB}>
                        <Icon name="notifications-outline" color="#4A4A4A" size={25}/>
                    </TouchableOpacity>
                ) : 
                (
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
                )}
                
            </View>
            <View style = {styleDetailsPage.View}>
                <View style = {styleDetailsPage.viewMenu}>
                    <TouchableOpacity style={page === INFO ? [styleDetailsPage.viewBtnMenu, { backgroundColor: '#FFF' }] : styleDetailsPage.viewBtnMenu}
                        onPress={() => {
                            setPage(INFO);
                        }}>
                        {/* <Icon style = {styleDetailsPage.icon} name="information" color="#4A4A4A" size={25}/> */}
                        <Text style={page === INFO ? [styleDetailsPage.text, { color: '#FF852C' }] : styleDetailsPage.text}>Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={page === RAITING ? [styleDetailsPage.viewBtnMenu, { backgroundColor: '#FFF' }] : styleDetailsPage.viewBtnMenu}
                        onPress={() => {
                            setPage(RAITING);
                        }}>
                        <Text style={page === RAITING ? [styleDetailsPage.text, { color: '#FF852C' }] : styleDetailsPage.text}>Ratings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={page === SUPPLIER ? [styleDetailsPage.viewBtnMenu, { backgroundColor: '#FFF' }] : styleDetailsPage.viewBtnMenu}
                        onPress={() => {
                            setPage(SUPPLIER);
                        }}>
                        <Text style={page === SUPPLIER ? [styleDetailsPage.text, { color: '#FF852C' }] : styleDetailsPage.text}>Supplier</Text>
                    </TouchableOpacity>
                </View>
                
                    
                
            </View>
            
            {page === INFO ? <InfoPage product={product} scheduleData ={schedule} rate = {rate} count = {count} navigate = {navigate} /> : page === RAITING ? <RaitingsPage product={product} /> : page === SUPPLIER ? <SupplierPage supplier = {supplier}/> : null}
            <View style = {styleDetailsPage.viewAddTour}>
                <View style = {{position: 'absolute', width: 90, height: 20, marginTop: 15, left: 95, borderLeftWidth: 1, borderRightWidth: 1, borderLeftColor: 'rgba(128, 128, 128, 0.6)', borderRightColor: 'rgba(128, 128, 128, 0.6)'}}></View>
                <TouchableOpacity style = {styleDetailsPage.viewDateTime} onPress={() => setShowModal(true)}>
                    <View style = {styleDetailsPage.viewTopDateTime}>
                        <View style = {styleDetailsPage.btnCalendar}>
                            <Icon name = 'calendar-outline' color = '#000' size = {15}/>
                            <Text style = {styleDetailsPage.textStartEnd}> Start</Text>
                        </View>
                        <Text style = {styleDetailsPage.textTime}> {hourStart}:{minStart}</Text>
                    </View>
                    <View style = {styleDetailsPage.viewBotDateTime}>
                        <Text style = {styleDetailsPage.textDate}>{dayStart}-{monthStart}-{yearStart}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {{...styleDetailsPage.viewDateTime, marginLeft: 10}} onPress={() => setShowModalEnd(true)}>
                    <View style = {styleDetailsPage.viewTopDateTime}>
                        <View style = {styleDetailsPage.btnCalendar}>
                            <Icon name = 'calendar-outline' color = '#000' size = {15}/>
                            <Text style = {styleDetailsPage.textStartEnd}> End</Text>
                        </View>
                        <Text style = {styleDetailsPage.textTime}>{hourEnd}:{minEnd}</Text>
                    </View>
                    <View style = {styleDetailsPage.viewBotDateTime}>
                        <Text style = {styleDetailsPage.textDate}>{dayEnd}-{monthEnd}-{yearEnd}</Text>
                    </View>
                </TouchableOpacity>
                <View style = {styleDetailsPage.viewPrice}>
                    <View style = {styleDetailsPage.viewTopDateTime}>
                    <Text style = {styleDetailsPage.textPrice}>Price</Text>
                    </View>
                    <View style = {styleDetailsPage.viewBotDateTime}>
                    <Text style = {styleDetailsPage.textP}>165.000 VND</Text>
                    </View>
                    
                </View>
                <TouchableOpacity style = {styleDetailsPage.btnAdd} onPress={handlePress} >
                    <Text style = {styleDetailsPage.textAdd}>Add</Text>
                </TouchableOpacity>
                <Modal visible = {showModal} animationType="slide" transparent={true}>
                    <DateTimePicker setYear = {setYearStart} setMonth = {setMonthStart} setDay = {setDayStart} setHour={setHourStart} setMin={setMinStart} setShowModal={setShowModal}/>
                </Modal>
                <Modal visible = {showModalEnd} animationType="slide" transparent={true}>
                    <DateTimePicker setYear = {setYearEnd} setMonth = {setMonthEnd} setDay = {setDayEnd} setHour={setHourEnd} setMin={setMinEnd} setShowModal={setShowModalEnd}/>
                </Modal>
            </View>
        </SafeAreaView>
    )
}