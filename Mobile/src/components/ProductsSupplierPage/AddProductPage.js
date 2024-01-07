import React, { useEffect, useState } from "react";

import { 
    StyleSheet, 
    View,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    Modal,
    Alert,
    Image
    
 } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "../DateTimePicker";
import { useNavigation } from "@react-navigation/native";
import Schedule from "./Schedule";
import { current } from "@reduxjs/toolkit";
import Discount from "./Discount";
import authApi from "../../API/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PermissionsAndroid } from "react-native";
import {launchImageLibrary} from 'react-native-image-picker'
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import ImageProduct from "./Image";
export default AddProductPage = ({route}) => {
    const {id_user} = route.params
    // const [name, setName] = useState()
    // const [locationOnSys, setLocationOnSys] = useState('Badeau, A-da-Gorda');
    // const [destination, setDestination] = useState()
    // const [description, setDescription] = useState()
    // const [quantity, setQuantity] = useState()
    // const [locationOnMap, setLocationOnMap] = useState()
    // const [showAddSchedule, setShowAddSchedule] = useState(false)
    // const [showAddDiscount, setShowAddDiscount] = useState(false)
    // const [price, setPrice] = useState()
    // const [yearStart, setYearStart] = useState(null);
    // const [monthStart, setMonthStart] = useState(null);
    // const [dayStart, setDayStart] = useState(null);
    // const [hourStart, setHourStart] = useState(null);
    // const [minStart, setMinStart] = useState(null);
    // const [yearEnd, setYearEnd] = useState(null);
    // const [monthEnd, setMonthEnd] = useState(null);
    // const [dayEnd, setDayEnd] = useState(null);
    // const [hourEnd, setHourEnd] = useState(null);
    // const [minEnd, setMinEnd] = useState(null);
    // const [time, setTime] = useState()
    // const [disName, setDisName] = useState('');
    // const [disCode, setDisCode] = useState('');
    // const [disDescription, setDisDescription] = useState('');
    // const [disValue, setDisValue] = useState();
    // const [disQuantity, setDisQuantity] = useState('');
    // const [disPoint, setDisPoint] = useState('');
    // const [listDiscount, setListDiscount] = useState([])
    // const [listSchedule, setListSchedule] = useState([])


    const [name, setName] = useState(null)
    const [locationOnSys, setLocationOnSys] = useState(null);
    const [destination, setDestination] = useState(null)
    const [description, setDescription] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [locationOnMap, setLocationOnMap] = useState(null)
    const [showAddSchedule, setShowAddSchedule] = useState(false)
    const [showAddDiscount, setShowAddDiscount] = useState(false)
    const [price, setPrice] = useState(null)
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
    const [time, setTime] = useState(null)
    const [disName, setDisName] = useState('');
    const [disCode, setDisCode] = useState('');
    const [disDescription, setDisDescription] = useState('');
    const [disValue, setDisValue] = useState();
    const [disQuantity, setDisQuantity] = useState();
    const [disPoint, setDisPoint] = useState();
    // const [listDiscount, setListDiscount] = useState([])
    // const [listSchedule, setListSchedule] = useState([])

    // const [name, setName] = useState('Thach Ban')
    // const [locationOnSys, setLocationOnSys] = useState(2);
    // const [destination, setDestination] = useState('Quang Binh')
    // const [description, setDescription] = useState('Tuyet voi luon ')
    // const [quantity, setQuantity] = useState()
    // const [locationOnMap, setLocationOnMap] = useState("111222")
    // const [showAddSchedule, setShowAddSchedule] = useState(false)
    // const [showAddDiscount, setShowAddDiscount] = useState(false)
    // const [price, setPrice] = useState()
    // const [yearStart, setYearStart] = useState('2024');
    // const [monthStart, setMonthStart] = useState('3');
    // const [dayStart, setDayStart] = useState('13');
    // const [hourStart, setHourStart] = useState('20');
    // const [minStart, setMinStart] = useState('10');
    // const [yearEnd, setYearEnd] = useState('2024');
    // const [monthEnd, setMonthEnd] = useState('4');
    // const [dayEnd, setDayEnd] = useState('10');
    // const [hourEnd, setHourEnd] = useState('20');
    // const [minEnd, setMinEnd] = useState('10');
    // const [time, setTime] = useState()
    // const [disName, setDisName] = useState('');
    // const [disCode, setDisCode] = useState('');
    // const [disDescription, setDisDescription] = useState('');
    // const [disValue, setDisValue] = useState();
    // const [disQuantity, setDisQuantity] = useState();
    // const [disPoint, setDisPoint] = useState();
    const [listDiscount, setListDiscount] = useState([{"key":"1","name":"ATrung soi","code":"Tring","description":"rffcvbnjj","start_time":"2024-01-06 08:00","end_time":"2024-01-31 04:00","value":25,"quantity":25,"point":0},{"key":"2","name":"Anh tam robot","code":"Tam","description":"Jjđhsjsjsjssssf","start_time":"2024-01-06 04:00","end_time":"2024-01-26 05:00","value":20,"quantity":10,"point":0}])
    const [listSchedule, setListSchedule] = useState([{"key":"1","price":20000,"start_time":"2024-01-06 10:00","end_time":"2024-01-31 10:00"},{"key":"2","price":300000,"start_time":"2024-01-10 04:00","end_time":"2024-01-27 10:00"}])
    
    const [showModal, setShowModal] = useState (false);
    const [showModalEnd, setShowModalEnd] = useState (false)
    
    const navigation = useNavigation()
    const [location, setLocation] = useState([])
    // Discount data
    const [image, setImg] = useState(null)
    const [imgArr, setImgArr] = useState([])
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
            const result = await launchImageLibrary({mediaType:'photo'})
            setImg(result.assets[0]);
            console.log(result.assets[0])
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
    };  
    const requestCameraPermission2 = async () => {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
            const result = await launchImageLibrary({mediaType:'photo'})
            setImgArr([...imgArr, result.assets[0]]);
            console.log(result.assets[0])
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
    };  
    const date = new Date()
    const data = [
        { label: 'Latest', value: 'trung' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
    ];

    const addProduct = () => {
        const allNotNull = [name, locationOnSys, destination, description, quantity, locationOnMap,  time].every(val => val !== null);
        if (allNotNull){
            AddProduct()
        } else Alert.alert("Please fill in all data")
    }
    const AddProduct = async () => {
        const dataSche = listSchedule.map(item => {
            const { key, ...rest } = item;
            return rest;
          });
        const dataDis = listDiscount.map(item => {
            const { key, ...rest } = item;
            return rest;
          });
        try {
            const token = "bearer " + await AsyncStorage.getItem('userToken')
            const res = await authApi.createProduct({
                product: {
                    name: name,
                    location_map: locationOnMap,
                    time: parseInt(time),
                    quantity: parseInt(quantity),
                    age: 1,
                    description: description,
                    id_location: locationOnSys,
                    city: destination
                },
                schedule_product: dataSche,
                discount: dataDis,
            }, {
                "token": token,
                
            }
            )
            console.log(res.status)
            updateImage(res.data.data.product.id_product)
            console.log(res.data.data.product.id_product)
            console.log("Ok luon")
            Alert.alert('Created')
        } catch (error) {
            console.log(error)
            console.log("loi tao product")
        }
    }
    useEffect(()=>{
        const getLocation = async () => {
            try {
                const res = await authApi.getLocation()
                setLocation(res.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getLocation();
    },[])
    useEffect(()=>{
        console.log("Shedule: " +JSON.stringify(listSchedule))
        console.log("Discount: " + JSON.stringify(listDiscount))
    },[listSchedule, listDiscount])
    useEffect(()=> {
        console.log(JSON.stringify(imgArr, null, 2))
    },[imgArr])
    const deleteEvent = (keyToDelete) => {
        // Sử dụng filter để tạo một danh sách mới không bao gồm đối tượng cần xóa
        const updatedList = listSchedule.filter(event => event.key !== keyToDelete);
        setListSchedule(updatedList);
      };

    const deleteDiscount = (keyToSeclect) => {
        const updatedList = listDiscount.filter(event => event.key != keyToSeclect )
        setListDiscount(updatedList)
    }
      const resetAllStates = () => {
        setPrice('');
        setYearStart(null);
        setMonthStart(null);
        setDayStart(null);
        setHourStart(null);
        setMinStart(null);
        setYearEnd(null);
        setMonthEnd(null);
        setDayEnd(null);
        setHourEnd(null);
        setMinEnd(null);
      
        // Thêm các state mới và giá trị mặc định tương ứng
        setDisName(null);
        setDisCode(null);
        setDisDescription(null);
        setDisValue(null);
        setDisQuantity(null);
        setDisPoint(null);
      }
    const AddSchedule = () => {
        if (yearStart !== null &&
            monthStart !== null &&
            dayStart !== null &&
            hourStart !== null &&
            minStart !== null &&
            yearEnd !== null &&
            monthEnd !== null &&
            dayEnd !== null &&
            hourEnd !== null &&
            minEnd !== null &&
            price != '') {
                const startTime = new Date(yearStart, monthStart -1 , dayStart, hourStart, minStart)
                const formattedDateStart = `${startTime.getFullYear()}-${String(startTime.getMonth() + 1).padStart(2, '0')}-${String(startTime.getDate()).padStart(2, '0')} ${String(startTime.getHours()).padStart(2, '0')}:${String(startTime.getMinutes()).padStart(2, '0')}`;
                const endTime = new Date(yearEnd, monthEnd -1, dayEnd, hourEnd, minEnd)
                const formattedDateEnd = `${endTime.getFullYear()}-${String(endTime.getMonth() + 1).padStart(2, '0')}-${String(endTime.getDate()).padStart(2, '0')} ${String(endTime.getHours()).padStart(2, '0')}:${String(endTime.getMinutes()).padStart(2, '0')}`;
                if (startTime.getTime()>date.getTime() && startTime.getTime()<endTime.getTime())
                {
                    const newData = 
                    {
                    key: String(listSchedule.length + 1),
                    price: parseInt(price),
                    start_time: formattedDateStart,
                    end_time: formattedDateEnd,
                    } 
                    setListSchedule([...listSchedule, newData]);
                    resetAllStates()
                } else {Alert.alert("Select a start time after the current time and before the end time")}
            } else Alert.alert("Completely fill in time data");      
    }
    useEffect(()=>{
        if (disValue) 
            if (disValue>100)
            {
            Alert.alert("Enter value ess than 100 and greater than 0")
            setDisValue(null)
        }
        console.log(disValue)
    },[disValue])
    const AddDiscount = () => {
        if (yearStart !== null &&
            monthStart !== null &&
            dayStart !== null &&
            hourStart !== null &&
            minStart !== null &&
            yearEnd !== null &&
            monthEnd !== null &&
            dayEnd !== null &&
            hourEnd !== null &&
            minEnd !== null &&
            
            disName != null &&
            disCode != null &&
            disDescription !== null &&
            disValue !== null &&
            disQuantity !== null &&
            disPoint !== null) {
                const startTime = new Date(yearStart, monthStart -1 , dayStart, hourStart, minStart)
                const formattedDateStart = `${startTime.getFullYear()}-${String(startTime.getMonth() + 1).padStart(2, '0')}-${String(startTime.getDate()).padStart(2, '0')} ${String(startTime.getHours()).padStart(2, '0')}:${String(startTime.getMinutes()).padStart(2, '0')}`;
                const endTime = new Date(yearEnd, monthEnd -1, dayEnd, hourEnd, minEnd)
                const formattedDateEnd = `${endTime.getFullYear()}-${String(endTime.getMonth() + 1).padStart(2, '0')}-${String(endTime.getDate()).padStart(2, '0')} ${String(endTime.getHours()).padStart(2, '0')}:${String(endTime.getMinutes()).padStart(2, '0')}`;

                if (startTime.getTime()>date.getTime() && startTime.getTime()<endTime.getTime())
                {
                    const newData = 
                    {
                    key: String(listDiscount.length + 1),
                    name: disName,
                    code: disCode,
                    description: disDescription,
                    start_time: formattedDateStart,
                    end_time: formattedDateEnd,
                    value: parseInt(disValue),
                    quantity: parseInt(disQuantity),
                    point: parseInt(disPoint)
                    } 
                    setListDiscount([...listDiscount, newData]);
                    resetAllStates()
                } else {Alert.alert("Select a start time after the current time and before the end time")}
            } else Alert.alert("Completely fill in time data"); 
    }
    const updateImage = async (id) => {
        try {
            const imageData = new FormData
            imageData.append('image',{
                uri: image.uri,
                name: image.fileName,
                type: image.type
            });
            imgArr.forEach((image, index)=>{
                imageData.append('images_description',{
                    uri: image.uri,
                    name: image.fileName,
                    type: image.type
                })
            })
            
            const token = "bearer " + await AsyncStorage.getItem('userToken')
            //console.log(token)
            const res = await authApi.upImage(id, imageData, {
                "token": token,
                'Content-Type': 'multipart/form-data',
            })
            console.log(res.status)

        } catch (error) {
            console.log(error)
            console.log("loi tao anh")
        }
    
    }
    return (
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack} onPress={()=>{navigation.goBack()}}>
                    <Icon name = 'chevron-back' color = '#FFF' size = {25}/>
                </TouchableOpacity>
                <Text style = {style.textAddProduct}>Add Product</Text>
                <TouchableOpacity style = {style.btnAdd} onPress={addProduct}>
                    <Text style = {style.textAdd}>Add</Text>
                </TouchableOpacity>
            </View>


            <ScrollView contentContainerStyle = {style.scrollView}>
            <Text style = {{...style.textAddProduct, marginBottom: 15}}>Image</Text>
            <TouchableOpacity style = {{width: 151, height: 131, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 10, borderWidth: 0.5}} onPress={()=>{requestCameraPermission()}}>
                {image ? 
                 <Image style = {{width: 150, height: 130, borderRadius: 10}} source={{
                    uri: image.uri
                    }}/> : null 
                }
            </TouchableOpacity>
            <View style = {style.viewName}>
                <Text style = {style.textProductName}>Product Name</Text>
                <View style = {style.viewInputName}>
                    <TextInput
                        placeholder={'Name'}
                        placeholderTextColor={'#7D848D'}
                        style={style.inputName}
                        onChangeText={setName}
                        value={name}
                    />
                </View>
            </View>
            <View style = {style.viewLocationOnSys}>
                <View style = {style.viewTextLOS}>
                    <Text style = {style.textProductName}>Location On System</Text>
                </View>
                <Dropdown
                    style={style.dropdown}
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    inputSearchStyle={style.inputSearchStyle}
                    iconStyle={style.iconStyle}
                    itemContainerStyle={style.itemsStyle}
                    itemTextStyle={style.itemDropStyle}
                    containerStyle={style.dropStyle}
                    data={location}
                    maxHeight={300}
                    labelField="display_name"
                    valueField="id_location"
                    search
                    placeholder={'Location'}
                    searchPlaceholder="Search..."
                    value={locationOnSys}
                    onChange={item => {
                    setLocationOnSys(item.id_location);
                }}
                    
                />
            </View>
            <View style = {style.viewDescription}>
                <Text style = {style.textProductName}>Descripition</Text>
                <View style = {style.viewInputDescription}>
                    <TextInput
                        placeholder={'Type a desciption'}
                        placeholderTextColor={'#7D848D'}
                        style={style.inputDescription}
                        onChangeText={setDescription}
                        value={description}

                        multiline = {true}
                        textAlignVertical='top'
                    />
                </View>
                
            </View>
            <View style = {style.viewDestination}>
                <Text style = {style.textProductName}>Location on map</Text>
                    <View style = {style.viewInputName}>
                        <TextInput
                            placeholder={'Name'}
                            placeholderTextColor={'#7D848D'}
                            style={style.inputName}
                            onChangeText={setDestination}
                            value={destination}
                        />
                    </View>
            </View>
            <View style = {style.viewTime}>
                <Text style = {style.textProductName}>Time (Hours)</Text>
                <View style = {{...style.viewInputName, width: 100, right: 130}}>
                    <TextInput
                        placeholder={''}
                        placeholderTextColor={'#7D848D'}
                        style={{...style.inputName, width: 100}}
                        onChangeText={setTime}
                        value={time}
                        keyboardType="numeric"
                    />
                </View>
                
                <Modal visible = {showModal} animationType="slide" transparent={true}>
                    <DateTimePicker setYear = {setYearStart} setMonth = {setMonthStart} setDay = {setDayStart} setHour={setHourStart} setMin={setMinStart} setShowModal={setShowModal}/>
                </Modal>
                
            </View>
            <View style = {style.viewQuantity}>
                <Text style = {style.textProductName}>Quantity (Person)</Text>
                <View style = {{...style.viewInputName, width: 100, right: 130}}>
                    <TextInput
                        placeholder={''}
                        placeholderTextColor={'#7D848D'}
                        style={{...style.inputName, width: 100, borderWidth: 0}}
                        onChangeText={setQuantity}
                        value={quantity}
                        keyboardType="numeric"
                    />
                </View>
            </View>
            <View style = {style.viewLocationOnMap}>
                <Text style = {style.textProductName}>Location on map</Text>
                <View style = {style.viewInputName}>
                    <TextInput
                        placeholder={'Enter Coordinates'}
                        placeholderTextColor={'#7D848D'}
                        style={style.inputName}
                        onChangeText={setLocationOnMap}
                        value={locationOnMap}
                    />
                </View>
            </View>
            <View style = {style.viewImage}>
                <Text style = {style.textProductName}>From Our Gallery</Text>
                <View style = {{width: width - (width-380)/2, borderWidth: 0, height: 70, flexDirection: 'row', marginTop: 10}}>
                    <TouchableOpacity style = {{...style.btnAddImage, marginTop: 0}} onPress={()=>{requestCameraPermission2()}}>
                        <Icon name = 'add-circle' size = {25} color = '#7D848D'/>
                    </TouchableOpacity>
                    <ScrollView contentContainerStyle ={{flexDirection: 'row'}}>

                        {imgArr.length > 0 ? (
                            imgArr.map((img, index) => (
                                <ImageProduct key={index} uri={img.uri} />
                            ))
                            ) : null}
                                                    

                    </ScrollView>
                </View>
                
            </View>
            <View style = {showAddSchedule === true ? {...style.viewSchedules, height: 526}: style.viewSchedules}>
                <View style = {style.viewAddSchedule}>
                    <Text style = {style.textProductName}> 
                        Schedules
                    </Text>
                    <TouchableOpacity style = {style.btnAddSchdule} onPress={()=>{setShowAddSchedule(true)}}>
                        <Text style = {style.textAddSchdule}>ADD SCHEDULE</Text>
                    </TouchableOpacity>
                </View>
                {showAddSchedule === true ? 
                    <View style = {styleAddSche.View}>
                        <TouchableOpacity style = {styleAddSche.btnAdd} onPress={()=>{setShowAddSchedule(false), AddSchedule()}}>
                            <Text style = {styleAddSche.textAdd}>ADD</Text>
                        </TouchableOpacity>
                        <View style = {{...style.viewTime, marginTop: 5, marginLeft: 20, width: 360}}>
                            <Text style = {{...style.textProductName, marginTop: 5}}>Price (VND)</Text>
                            <View style = {{...style.viewInputName, width: 100, right: 140}}>
                                <TextInput
                                    placeholder={''}
                                    placeholderTextColor={'#7D848D'}
                                    style={{...style.inputName, width: 100, marginTop:3}}
                                    onChangeText={setPrice}
                                    value={price}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>
                        <View style = {style.viewTime1}>
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
                        <View style = {style.viewTime1}>
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
                        
                    </View>
                    :null }
                <ScrollView contentContainerStyle = {style.scrollViewSchedules}>
                    {listSchedule.map((schedule) => (
                        <Schedule key={schedule.key} data = {schedule} deleteEvent ={deleteEvent}/>
                    ))}
                </ScrollView>

            </View>
            <View style = {showAddDiscount===true ? {...style.viewDiscounts, height: 850} : style.viewDiscounts }>
                <View style = {style.viewAddSchedule}>
                        <Text style = {style.textProductName}> 
                            Discounts
                        </Text>
                        <TouchableOpacity style = {style.btnAddSchdule} onPress={()=> {setShowAddDiscount(true)}}>
                            <Text style = {style.textAddSchdule}>ADD DISCOUNT</Text>
                        </TouchableOpacity>
                    </View>
                    {showAddDiscount === true ? 
                        <View style = {styleAddDis.View}>
                            <TouchableOpacity style = {styleAddSche.btnAdd} onPress={()=>{setShowAddDiscount(false), AddDiscount()}}>
                                <Text style = {styleAddSche.textAdd}>ADD</Text>
                            </TouchableOpacity>
                            <View style = {{...style.viewTime, marginTop: 5, marginLeft: 20, width: 360}}>
                                <Text style = {{...style.textProductName, marginTop: 5}}>Discount name</Text>
                                <View style = {{...style.viewInputName, width: 200, right: 20}}>
                                    <TextInput
                                        placeholder={'Enter discount name'}
                                        placeholderTextColor={'#7D848D'}
                                        style={{...style.inputName, width: 200, marginTop:3}}
                                        onChangeText={setDisName}
                                        value={disName}
                                    />
                                </View>
                            </View>
                            <View style = {{...style.viewTime, marginTop: 5, marginLeft: 20, width: 360}}>
                                <Text style = {{...style.textProductName, marginTop: 5}}>Discount code</Text>
                                <View style = {{...style.viewInputName, width: 200, right: 20}}>
                                    <TextInput
                                        placeholder={'Enter discout code'}
                                        placeholderTextColor={'#7D848D'}
                                        style={{...style.inputName, width: 200, marginTop:3}}
                                        onChangeText={setDisCode}
                                        value={disCode}
                                        
                                    />
                                </View>
                            </View>
                            <View style = {{...style.viewDescription, width: 340, marginLeft: 20, marginTop: 10}}>
                                <Text style = {style.textProductName}>Descripition</Text>
                                <View style = {style.viewInputDescription}>
                                    <TextInput
                                        placeholder={'Type a desciption'}
                                        placeholderTextColor={'#7D848D'}
                                        style={style.inputDescription}
                                        onChangeText={setDisDescription}
                                        value={disDescription}
                                        multiline = {true}
                                        textAlignVertical='top'
                                    />
                                </View>
                                
                            </View>
                            
                            <View style = {{...style.viewTime, marginTop: 0, marginLeft: 20, width: 360}}>
                                <Text style = {{...style.textProductName, marginTop: 5}}>Discount value</Text>
                                <View style = {{...style.viewInputName, width: 100, right: 120}}>
                                    <TextInput
                                        placeholder={''}
                                        placeholderTextColor={'#7D848D'}
                                        style={{...style.inputName, width: 100, marginTop:3}}
                                        onChangeText={setDisValue}
                                        value={disValue}
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                            <View style = {{...style.viewTime, marginTop: 5, marginLeft: 20, width: 360}}>
                                <Text style = {{...style.textProductName, marginTop: 5}}>Quantity</Text>
                                <View style = {{...style.viewInputName, width: 100, right: 120}}>
                                    <TextInput
                                        placeholder={''}
                                        placeholderTextColor={'#7D848D'}
                                        style={{...style.inputName, width: 100, marginTop:3}}
                                        onChangeText={setDisQuantity}
                                        value={disQuantity}
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                            <View style = {{...style.viewTime, marginTop: 5, marginLeft: 20, width: 360}}>
                                <Text style = {{...style.textProductName, marginTop: 5}}>Point</Text>
                                <View style = {{...style.viewInputName, width: 100, right: 120}}>
                                    <TextInput
                                        placeholder={''}
                                        placeholderTextColor={'#7D848D'}
                                        style={{...style.inputName, width: 100, marginTop:3}}
                                        onChangeText={setDisPoint}
                                        value={disPoint}
                                        keyboardType="numeric"
                                    />
                                </View>
                            </View>
                            <View style = {style.viewTime1}>
                                <View style = {style.viewTimeInfo}>
                                    <View style = {style.viewTimeInfo1}>
                                        <Text style = {style.textStart}>Start date</Text>
                                        <Text style = {{...style.textStartTime, marginLeft: 20}}>{dayStart}-{monthStart}-{yearStart}</Text>
                                    </View>
                                    <View style = {style.viewTimeInfo1}>
                                        <Text style = {style.textStart}>Start time</Text>
                                        <Text style = {{...style.textStartTime, marginLeft: 20}}>{hourStart}:{minStart}</Text>
                                    </View>
                                    
                                </View>
                                <TouchableOpacity style = {style.btnPickTime} onPress={()=>{setShowModal(true)}}>
                                    <Icon name = 'calendar-outline' color = '#000' size = {25} />
                                </TouchableOpacity>
                                
                            </View>
                            <View style = {style.viewTime1}>
                                <View style = {style.viewTimeInfo}>
                                    <View style = {style.viewTimeInfo1}>
                                        <Text style = {style.textStart}>End date</Text>
                                        <Text style = {{...style.textStartTime, marginLeft: 20}}>{dayEnd}-{monthEnd}-{yearEnd}</Text>
                                    </View>  
                                    <View style = {style.viewTimeInfo1}>
                                        <Text style = {style.textStart}>End time</Text>
                                        <Text style = {{...style.textStartTime, marginLeft: 20}}>{hourEnd}:{minEnd}</Text>
                                    </View>

                                </View>
                                <TouchableOpacity style = {style.btnPickTime} onPress={()=>{setShowModalEnd(true)}}>
                                    <Icon name = 'calendar-outline' color = '#000' size = {25} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    : null}
                    
                    <ScrollView contentContainerStyle = {style.scrollViewSchedules}>
                        {listDiscount.map((discount) => (
                            <Discount key={discount.key} data = {discount} deleteDiscount ={deleteDiscount}/>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
            <Modal visible = {showModalEnd} animationType="slide" transparent={true}>
                            <DateTimePicker setYear = {setYearEnd} setMonth = {setMonthEnd} setDay = {setDayEnd} setHour={setHourEnd} setMin={setMinEnd} setShowModal={setShowModalEnd}/>
                        </Modal>
        </View>
    )
}
const styleAddDis = StyleSheet.create({
    View: {
        width: 380,
        height: 540,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginTop: 10,
        elevation: 5
    }
})
const styleAddSche = StyleSheet.create({
    View: {
        height: 220,
        width: 380,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginTop: 10,
        elevation: 5
    }
    ,btnAdd: {
        height: 35,
        width: 380,
        backgroundColor: '#FF852C',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',

    }
    ,textAdd: {
        color: '#FFF',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 16
    }

})
const style = StyleSheet.create({
    View:   {
        width: width,
        height: height,
        marginTop: statusBarHeight,
        borderWidth: 0,
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
    ,scrollView: {
        width: width,
        alignItems: 'center'
    }
    //Header
    ,viewHeader: {
        marginTop: 10,
        width: 380,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,btnBack: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FF852C',
        position: 'absolute',
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,textAddProduct: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        fontSize: 20,
    }
    ,btnAdd: {
        position: 'absolute',
        right: 0
    }
    ,textAdd: {
        color: '#FF6B00',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 18
    }
    //Product Name
    ,viewName: {
        width: 380,
        height: 35,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        
    }
    ,textProductName: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 16,
        letterSpacing: 0.5
    }
    ,viewInputName: {
        height: 35,
        width: 230,
        borderBottomWidth: 1,
        position: 'absolute',
        right: 0,
    }
    ,inputName: {
        height: 38,
        width: 230,  
        position: 'absolute',
        right: 0,
        fontFamily: 'Montserrat Medium',
        color: '#000',
        fontSize: 16,
         
    }
    // Location on System
    ,viewLocationOnSys: {
        width: 380,
        height: 35,
        flexDirection: 'row',
        marginTop: 20
    }
    ,viewTextLOS: {
        width: 140,
        height: 37,
        position: 'absolute',
        justifyContent: 'center',
        left: 0,
        top: -2
    }
    
    // Description
    ,viewDescription:{
        width: 380,
        height: 150,
        borderWidth: 0,
        marginTop: 20
    }
    ,viewInputDescription: {
        flex: 1,
        borderWidth: 0,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#E4E7E9'
    }
    ,inputDescription: {
        width: '97%',
        height: '100%',
        marginLeft: '3%',
        
        color: '#000',
        fontFamily: 'Montserrat Regular',
        fontSize: 14
        
        
        
    }
    // Destination 
    ,viewDestination: {
        width: 380,
        height: 35,
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    }
    // Time
    ,viewTime: {
        width: 380, 
        height: 35,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }
    // Quantity
    ,viewQuantity: {
        width: 380,
        height: 35,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }
    // Location on Map
    ,viewLocationOnMap: {
        width: 380,
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    }

    //Image
    ,viewImage: {
        width: 380,
        height: 100,
        borderWidth: 0,
        marginTop: 20
    }
    ,btnAddImage: {
        width: 100,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        marginTop : 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
    // Schedule
    ,viewSchedules: {
        width: 380,
        height: 296,
        borderWidth: 0,
        marginTop: 20
    }
    ,viewAddSchedule: {
        width: 380,
        height: 35,
        flexDirection: 'row',
        alignItems: 'center'
        
    }
    ,btnAddSchdule: {
        position: 'absolute',
        right: 0,
        width: 140,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#FF852C',
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,textAddSchdule: {
        color: '#FFF',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 15
    }
    ,scrollViewSchedules: {
        width: 380,
        height: 251,
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 10,
        alignItems: 'center'
    }
    // Discounts
    ,viewDiscounts: {
        width: 380,
        height: 305,
        borderWidth: 0,
        marginTop: 20
    }
    //dropdown
    ,dropdown: {
        width: 230,
        height: 35,
        borderWidth: 1,
        position: 'absolute',
        borderRadius: 10,
        right: 0,
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
    },
    placeholderStyle: {
        fontSize: 16,
        marginLeft: 13,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 13,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
    },
    iconStyle: {
        width: 30,
        height: 30,
        marginRight : 10,
        
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        fontFamily: 'Montserrat SemiBold',
        borderRadius: 12,
        color: '#000'
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
        height: 40,
        justifyContent: 'center',
         borderRadius: 17.5,
        
       
        
    },
    dropStyle: {
        borderRadius: 17.5,
    }
    ,viewTime1: {
        width: 340,
        height: 60,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20
    }
    ,viewTimeInfo: {
        width: 310,
        height: 60,
        borderWidth: 0,
    }
    ,viewTimeInfo1: {
        width: 320,
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
        left: 120,
        fontSize: 16
    }
})