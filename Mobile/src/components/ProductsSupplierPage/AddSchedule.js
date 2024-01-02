import React, { useState } from "react";

import { 
    StyleSheet,
    View ,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    Text,
    TextInput,
    Modal,
    Alert
} from 'react-native'
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import { useNavigation } from "@react-navigation/native";
import authApi from "../../API/auth";
import DateTimePicker from "../DateTimePicker";
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment'
export default AddSchedule = ({route}) => {
    const navigation = useNavigation()
    const {idP, name} = route.params;
    const [price, setPrice] = useState()
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
    const [showModal, setShowModal] = useState (false);
    const [showModalEnd, setShowModalEnd] = useState (false);
    const handlePress = async () => {
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
                const formattedDateStart = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')} ${String(startDate.getHours()).padStart(2, '0')}:${String(startDate.getMinutes()).padStart(2, '0')}`;
                const endDate = new Date(yearEnd, monthEnd -1, dayEnd, hourEnd, minEnd)
                const formattedDateEnd = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')} ${String(endDate.getHours()).padStart(2, '0')}:${String(endDate.getMinutes()).padStart(2, '0')}`;
                if (startDate && endDate) {
                    const startMoment = moment(startDate);
                    const endMoment = moment(endDate);
                    console.log(price);
                    console.log(idP);
                    console.log(formattedDateEnd);
                    console.log(formattedDateStart)
                    
                    if (startMoment.isBefore(endMoment)) {
                         try {
                            const token = "bearer " + await AsyncStorage.getItem('userToken')
                            console.log(token)
                            const res = await authApi.createSchedule(
                                idP,
                                {
                                    token: token
                                }
                                ,
                                {
                                    price: price,
                                    start_time: formattedDateStart,
                                    end_time: formattedDateEnd
                                })
                                
                                
                         } catch (error) {
                            console.log(error)
                         }
                        
                    } else {
                        Alert.alert("Vui long nhap thoi gian bat dau truoc thoi gian ket thuc")
                    }
                }
            
        } else {
            Alert.alert("Chua dien day du du lieu")
        }
       
      };
    return( 
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack} onPress={()=> {navigation.goBack()}}>
                    <Icon name = 'chevron-back' color = '#FFF' size = {25}/>
                </TouchableOpacity>
                <Text style = {style.textAddSchedule}>Add Schedule</Text>
                <TouchableOpacity style = {style.btnAdd} onPress={handlePress}>
                    <Text style = {style.textAdd}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {style.viewPrice}>
                <Text style = {style.textPrice}>Product Name</Text>
                <Text style = {style.textName}>{name}</Text>
            </View>
            <View style = {style.viewPrice}>
                <Text style = {style.textPrice}>Price (VND)</Text>
                <View style = {style.viewInputPrice}>
                    <TextInput
                        placeholder={''}
                        placeholderTextColor={'#7D848D'}
                        style={style.inputPrice}
                        onChangeText={setPrice}
                        value={price}
                    />
                </View>
            </View>
            <View style = {style.viewTime}>
                <View style = {style.viewTimeInfo}>
                    <View style = {style.viewTimeInfo1}>
                        <Text style = {style.textStart}>Start date</Text>
                        <Text style = {style.textStartTime}>{dayStart}-{monthStart}-{yearStart}</Text>
                    </View>
                    <View style = {style.viewTimeInfo1}>
                        <Text style = {style.textStart}>Start time</Text>
                        <Text style = {style.textStartTime}>{hourStart}:{minStart}</Text>
                    </View>
                    
                </View>
                <TouchableOpacity style = {style.btnPickTime} onPress={()=>{setShowModal(true)}}>
                    <Icon name = 'calendar-outline' color = '#000' size = {25} />
                </TouchableOpacity>
                
            </View>
            <View style = {style.viewTime}>
                <View style = {style.viewTimeInfo}>
                    <View style = {style.viewTimeInfo1}>
                        <Text style = {style.textStart}>End date</Text>
                        <Text style = {style.textStartTime}>{dayEnd}-{monthEnd}-{yearEnd}</Text>
                    </View>  
                    <View style = {style.viewTimeInfo1}>
                        <Text style = {style.textStart}>End time</Text>
                        <Text style = {style.textStartTime}>{hourEnd}:{minEnd}</Text>
                    </View>
                   
                </View>
                <TouchableOpacity style = {style.btnPickTime} onPress={()=>{setShowModalEnd(true)}}>
                    <Icon name = 'calendar-outline' color = '#000' size = {25} />
                </TouchableOpacity>
            </View>
            <Modal visible = {showModal} animationType="slide" transparent={true}>
                    <DateTimePicker setYear = {setYearStart} setMonth = {setMonthStart} setDay = {setDayStart} setHour={setHourStart} setMin={setMinStart} setShowModal={setShowModal}/>
                </Modal>
                <Modal visible = {showModalEnd} animationType="slide" transparent={true}>
                    <DateTimePicker setYear = {setYearEnd} setMonth = {setMonthEnd} setDay = {setDayEnd} setHour={setHourEnd} setMin={setMinEnd} setShowModal={setShowModalEnd}/>
                </Modal>

        </View>
    )
}
const style = StyleSheet.create({
    View: {
        width: width,
        height: height,
        alignItems: 'center',
        top: statusBarHeight,
        backgroundColor :'#FFF'
    }
    ,
    viewHeader: {
        width: 380,
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
    ,btnBack: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF852C',
        borderRadius: 24,
        position: 'absolute',
        left: 0
    }
    ,textAddSchedule: {
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        fontSize: 20,
        color: '#000'
    }
    ,btnAdd: {
        position: 'absolute',
        right: 0,
    }
    ,textAdd: {
        color: '#FF852C',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 18,
    }
    ,textName: {
        
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
        width: 230,
        position: 'absolute',
        right:0
    }
    ,viewPrice: {
        width: 380,
        height: 35,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    }
    ,textPrice: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 16
    }
    ,viewInputPrice: {
        height: 35,
        width: 70,
        borderBottomWidth: 1,
        position: 'absolute',
        right: 160,
    }
    ,inputPrice: {
        height: 38,
        width: 70,  
        position: 'absolute',
        right: -10,
        fontFamily: 'Montserrat Medium',
        color: '#000',
        fontSize: 16,  
    }
    ,viewTime: {
        width: 380,
        height: 60,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    }
    ,viewTimeInfo: {
        width: 340,
        height: 60,
        borderWidth: 0,
    }
    ,viewTimeInfo1: {
        width: 340,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0
    }
    ,textStart: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        position: 'absolute',
        fontSize: 16,
        left: 0
    }
    ,textStartTime: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        position: 'absolute',
        left: 150,
        fontSize: 16
    }
})