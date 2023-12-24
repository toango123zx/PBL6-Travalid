import React, { useState } from "react";

import { 
    StyleSheet, 
    View,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    Text,
    TextInput,
    ScrollView,
    
 } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
export default AddProductPage = () => {
    const [name, setName] = useState()
    const [value, setValue] = useState('Place');
    const [destination, setDestination] = useState()
    const [description, setDescription] = useState()
    const [time, setTime] = useState()
    const [quantity, setQuantity] = useState()
    const [locationOnMap, setLocationOnMap] = useState()
    const navigation = useNavigation()
    const data = [
        { label: 'Latest', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
    ];
    return (
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack} onPress={()=>{navigation.goBack()}}>
                    <Icon name = 'chevron-back' color = '#FFF' size = {25}/>
                </TouchableOpacity>
                <Text style = {style.textAddProduct}>Add Product</Text>
                <TouchableOpacity style = {style.btnAdd}>
                    <Text style = {style.textAdd}>Add</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle = {style.scrollView}>

            
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
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={'Select'}
                    searchPlaceholder="Search..."
                    value={destination}
                    onChange={item => {
                    setDestination(item.value);
                }}
                        
                />
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
                    />
                </View>
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
                <TouchableOpacity style = {style.btnAddImage}>
                    <Icon name = 'add-circle' size = {25} color = '#7D848D'/>
                </TouchableOpacity>
            </View>
            <View style = {style.viewSchedules}>
                <View style = {style.viewAddSchedule}>
                    <Text style = {style.textProductName}> 
                        Schedules
                    </Text>
                    <TouchableOpacity style = {style.btnAddSchdule}>
                        <Text style = {style.textAddSchdule}>ADD SCHEDULE</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle = {style.scrollViewSchedules}>

                </ScrollView>
            </View>
            <View style = {style.viewDiscounts}>
                <View style = {style.viewAddSchedule}>
                        <Text style = {style.textProductName}> 
                            Discounts
                        </Text>
                        <TouchableOpacity style = {style.btnAddSchdule}>
                            <Text style = {style.textAddSchdule}>ADD DISCOUNT</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView contentContainerStyle = {style.scrollViewSchedules}>

                    </ScrollView>
                </View>
            </ScrollView>

        </View>
    )
}
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
        marginTop: 10
    }
    ,textProductName: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 16
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
        marginTop: 20
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
        height: 265,
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
        height: 220,
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 10
    }
    // Discounts
    ,viewDiscounts: {
        width: 380,
        height: 265,
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
        marginRight : 10,
        
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
})