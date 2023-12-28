import React, { useState } from "react";
import { 
    StyleSheet, 
    TouchableOpacity, 
    View,
    Dimensions,
    StatusBar, 
    Text,
    TextInput,
    Modal
} from 'react-native'
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "../DateTimePicker";
import Icon from 'react-native-vector-icons/Ionicons'
export default AddDiscountPage = () => {
    const [name, setName] =  useState();
    const [value, setValue] = useState();
    const [provider, setProvider] = useState();
    const [quantity, setQuantity] = useState();
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
    const data = [
        { label: 'Travalid', value: 'travalid' },
        { label: 'Travel Supplier', value: 'travel_supplier' },
        
    ];
    const [showModal, setShowModal] = useState (false);
    const [showModalEnd, setShowModalEnd] = useState (false);
    return(
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack}>
                    <Icon name = 'chevron-back' color = '#FFF' size = {25}/>
                </TouchableOpacity>
                <Text style = {style.textAddDiscount}>
                    Add Discount
                </Text>
                <TouchableOpacity style = {style.btnAdd}>
                    <Text style = {style.textAdd}>Add</Text>
                </TouchableOpacity>
            </View>
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
            <View style = {style.viewName}>
                <Text style = {style.textProductName}>Value</Text>
                <View style = {style.viewValue}>
                    <Text style = {style.textDiscount}>Discount </Text>
                    <View style = {{...style.viewInputName, width: 40, position: 'relative', flexDirection: 'row'}}>
                        
                        <TextInput
                            style={{...style.inputName, width: 50}}
                            onChangeText={setValue}
                            value={value}
                        />
                        
                    </View>
                    <Text style = {style.textDiscount}> %</Text>
                </View>
                
            </View>
            <View style = {style.viewName}>
                <Text style = {style.textProductName}>Quantity</Text>
                <View style = {{...style.viewInputName, width: 40, right: 190}}>
                    <TextInput
                        placeholder={''}
                        placeholderTextColor={'#7D848D'}
                        style={{...style.inputName, width: 40}}
                        onChangeText={setQuantity}
                        value={quantity}
                    />
                </View>
            </View>
            <View style = {style.viewProvider}>
                <Text style = {style.textProductName}>Provider</Text>
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
                    value={provider}
                    onChange={item => {
                    setProvider(item.value);
                }}
                        
                />
            </View>
            <Text style = {style.textValidPeriod}>Valid Period</Text>
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
        marginTop: statusBarHeight,
        width: width,
        height: height,
        alignItems: 'center',
        backgroundColor: '#FFF'
        
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
        left: 120,
        fontSize: 16
    }
    ,viewHeader: {
        width: 380,
        height: 48,
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,btnBack: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FF852C',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0
    }
    ,textAddDiscount: {
        fontSize: 20,
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        color: '#000'
    }
    ,btnAdd: {
        position: 'absolute',
        right: 0
    }
    ,textAdd: {
        fontSize: 18,
        color: '#FF6B00',
        fontFamily: 'Montserrat SemiBold' 
    }
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
        right: -10,
        fontFamily: 'Montserrat Medium',
        color: '#000',
        fontSize: 16,  
    }
    ,textDiscount: {
        fontFamily: 'Montserrat Medium',
        color: '#000',
        fontSize: 16,  
    }
    ,viewValue: {
        height: 35,
        width: 230,
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        alignItems: 'center'
    }
    ,viewProvider: {
        height: 35,
        width: 380,
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    }
    ,textValidPeriod: {
        fontFamily: 'Montserrat SemiBold',
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        marginTop: 30
    }
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
        fontFamily: 'Montserrat Regular',
        color: '#000',
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Montserrat Medium',
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