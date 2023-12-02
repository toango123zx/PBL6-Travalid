import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    Modal,TextInput,StatusBar,
    Alert
} from 'react-native'
import {useState} from 'react'
const { width, height } = Dimensions.get('window');
import Calendar  from 'react-native-calendars/src/calendar';
const statusBarHeight = StatusBar.currentHeight || 0;
import { Dropdown } from 'react-native-element-dropdown';

//import  Calendar  from 'react-native-calendars/src/calendar';
const DATE = 'DATE'
const TIME = 'TIME'
export default DateTimePicker = ({setYear, setMonth, setDay, setHour, setMin, setShowModal}) => {
    const [page, setPage] = useState ('DATE');
    const handlePress = () => {
        // Gọi hàm setData từ Component A với giá trị mới là '20'
        setDate('20');
      };
      const showModal = () => {
        // Gọi hàm setData từ Component A với giá trị mới là '20'
        setShowModal(false);
      };
    return (
        <View style = {page === TIME ? [style.View, { height: 205 }] : style.View}>
            <View style = {style.top}>
                <TouchableOpacity onPress={() => {setPage(DATE)}} style = {page === DATE ? [style.btnDate, { backgroundColor: 'rgba(255, 107, 0, 1)' }] : style.btnDate}>
                    <Text style = {style.textDateTime}>DATE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setPage(TIME)}} style = {page === TIME ? [style.btnTime, { backgroundColor: 'rgba(255, 107, 0, 1)' }] : style.btnTime}>
                    <Text style = {style.textDateTime}>TIME</Text>
                </TouchableOpacity>
            </View>
            <View>
                {page === DATE  ? <Date setYear = {setYear} setMonth={setMonth} setDay={setDay}/> : <Time setHour={setHour} setMin={setMin}/>}
            </View>
            
            <TouchableOpacity onPress={showModal} style = {style.btnConfirm}><Text style = {style.textConfirm}>Confirm</Text></TouchableOpacity>
        </View>

        
        
    )
}
const Date = ({setYear, setMonth, setDay}) => {
    const [year, setYear1] = useState();
    const [month, setMonth1] = useState();
    const [day, setDay1] = useState();
    
    return(
        <View style = {styleDate.View} >
            <View style = {styleDate.viewDate}>
                
                <Text style = {styleDate.textDate}>{day}-{month}-{year}</Text>
            </View>
            <Calendar
                onDayPress={date => {
                    setYear(date.year)
                    setMonth(date.month)
                    setDay(date.day)
                    setYear1(date.year)
                    setMonth1(date.month)
                    setDay1(date.day)
                    
                }}
                style = {styleDate.calendar} 
                theme={{
                    monthTextColor: 'rgba(255, 107, 0, 1)',
                    textMonthFontFamily: 'Montserrat Bold',
                    arrowColor: 'rgba(255, 107, 0, 1)',
                    dayTextColor: '#000',
                    textDayFontFamily: 'Montserrat Medium',
                    textDayFontSize: 13,
                    textSectionTitleColor: 'rgba(255, 107, 0, 0.75)',
                    textDayHeaderFontFamily: 'Montserrat Medium',
                    textDayHeaderFontSize: 13,
                    textDisabledColor: 'rgba(255, 107, 0, 0.5)',
                    textInactiveColor: 'rgba(255, 107, 0, 0.5)',
                    selectedDayTextColor: 'rgba(255, 107, 0, 1)'
                }}/>
            
        </View>
    )
}
const Time = ({setHour,setMin}) => {
    const [hour, setHour1] = useState();
    const [min, setMin1] = useState();
    const [errorMessage, setErrorMessage] = useState('');
    const dataHour = [
        
    ];
    for (let i = 1; i <= 24; i++) {
        dataHour.push({ label: i.toString(), value: i.toString() });
    }
    const dataMin = [
        
    ];
    for (let i = 0; i <= 59; i++) {
        dataMin.push({ label: i.toString(), value: i.toString() });
    }
    const validateInputHour = (text) => {
        const value = text.trim();
    
        if (/^\d+$/.test(value)) {
            const number = parseInt(value, 10);
      
            if (number >= 1 && number <= 24) {
              // Valid number
              setHour1(text);
              setHour(text)
            } else {
              // Number out of range
              Alert.alert('Please enter a number between 1 and 24.');
            }
          } else {
            // Not a valid number
            setHour1();
          }
          
        
      };
      const validateInputMin = (text) => {
        const value = text.trim();
    
        if (/^\d+$/.test(value)) {
            const number = parseInt(value, 10);
      
            if (number >= 0 && number <= 59) {
              // Valid number
              setMin1(text);
            } else {
              // Number out of range
              Alert.alert('Please enter a number between 1 and 60.');
            }
          } else {
            // Not a valid number
            setMin1();
          }
          
        
      };
    return(
        <View style = {styleTime.View} >
            <View style = {styleTime.viewTime}>
                <Text style = {styleDate.textDate}>{hour}:{min}</Text>
            </View>
            <View style = {styleTime.viewSelectTime}>
                <View style = {styleTime.viewTextInput}>
                    <View style = {{width: 90, height: 30, position: 'absolute', top: 9.5, borderRightWidth: 1, borderColor: 'rgba(0, 0, 0, 0.3)'}}></View>
                    <TextInput 
                        placeholder={'Hour'}
                        placeholderTextColor={'rgba(125, 132, 141, 1)'} 
                        style={styleTime.textInput}
                        keyboardType="numeric"
                        onChangeText={validateInputHour}
                        value={hour}/>
                    <Dropdown
                        style={styleTime.dropdown}
                        placeholderStyle={styleTime.placeholderStyle}
                        selectedTextStyle={styleTime.selectedTextStyle}
                        inputSearchStyle={styleTime.inputSearchStyle}
                        iconStyle={styleTime.iconStyle}
                        itemContainerStyle={styleTime.itemsStyle}
                        itemTextStyle={styleTime.itemDropStyle}
                        containerStyle={styleTime.dropStyleHour}
                        data={dataHour}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={dataHour[0].label}
                        searchPlaceholder="Search..."
                        value={hour}
                        onChange={item => {
                        setHour1(item.value);
                        setHour(item.value);
                        }}
                    
                    />
                </View>
                <View style = {styleTime.viewTextInput}>
                    <View style = {{width: 90, height: 30, position: 'absolute', top: 9.5, borderRightWidth: 1, borderColor: 'rgba(0, 0, 0, 0.3)'}}></View>
                    <TextInput 
                        placeholder={'Min'} 
                        placeholderTextColor={'rgba(125, 132, 141, 1)'} 
                        style={styleTime.textInput}
                        keyboardType="numeric"
                        onChangeText={validateInputMin}
                        value={min}/>
                    <Dropdown
                        style={styleTime.dropdown}
                        placeholderStyle={styleTime.placeholderStyle}
                        selectedTextStyle={styleTime.selectedTextStyle}
                        inputSearchStyle={styleTime.inputSearchStyle}
                        iconStyle={styleTime.iconStyle}
                        itemContainerStyle={styleTime.itemsStyle}
                        itemTextStyle={styleTime.itemDropStyle}
                        containerStyle={styleTime.dropStyleMin}
                        renderRightIcon={style.icon}
                        data={dataMin}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={dataHour[0].label}
                        searchPlaceholder="Search..."
                        value={min}
                        onChange={item => {
                        setMin1(item.value);
                        setMin(item.value);
                        }}
                    
                    />
                </View>  
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    View: {
        width: 320,
        height: 425,
        backgroundColor: '#FFF',
        position: 'absolute',
        top: 200,
        left: (width-320)/2,
        borderWidth: 0,
        elevation: 4,
        borderRadius: 5,


    },
    top: {
        width: 320,
        height: 35,
        flexDirection: 'row',
        borderRadius: 5
    },
    btnDate: {
        width: 160,
        height: 35,
        backgroundColor: 'rgba(255, 133, 44, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
    },
    btnTime: {
        width: 160,
        height: 35,
        backgroundColor: 'rgba(255, 133, 44, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
    },
    textDateTime: {
        color: '#FFF',
        fontFamily: 'Montserrat Medium',
        fontSize: 14,
    },
    
    btnConfirm: {
        width: 320,
        height: 35,
        backgroundColor: 'rgba(255, 133, 44, 1)',
        position: 'absolute',
        bottom: 0,
        borderBottomEndRadius: 5,
        borderBottomLeftRadius: 5,
        marginLeft: 0,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    textYear: {
        color: '#FFF',
    },
    textConfirm: {
        color: '#FFF',
        fontFamily: 'Montserrat Medium',
        fontSize: 15,
        letterSpacing: 1
    }
})
const styleDate = StyleSheet.create( {
    View: {
        width: 320,
        height: 335,
        backgroundColor: '#FFF'
    },
    viewDate: {
        width: 320,
        height: 45,
        backgroundColor: 'rgba(255, 107, 0, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewMonth: {
    
    },
    viewYear: {

    },
    textDate: {
        fontSize: 24,
        fontFamily: 'Montserrat Medium',
        color: '#FFF',
        letterSpacing: 2,
    },
    calendar:{
        width: 320,
        height: 290,
        
    }
})
const styleTime = StyleSheet.create( {
    View: {
        width: 320,
        height: 135,
        backgroundColor: '#FFF'
    },
    viewTime: {
        width: 320,
        height: 45,
        backgroundColor: 'rgba(255, 107, 0, 1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewSelectTime: {
        width: 260,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: (320-260)/2,
        marginTop: 20,
    },
    viewTextInput: {
        width: 120,
        height: 50,
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
    },
    textInput: {
        width: 90,
        height: 50,
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 30,
        marginTop: 2,
        textAlign: 'center',
        borderWidth: 0
    },
    dropdown: {
        width: 30,
        height: 50,
        borderWidth: 0,
        borderRadius: 0,
        bottom: 0,
        alignItems: 'center'
    },
    icon: {
        marginRight: 5,
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
        marginRight : 13,
        
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
    dropStyleHour: {
        borderRadius: 17.5,
        height: 200,
        width: 120,
        position: 'absolute',
        top: 200 + 35 + 45 + 20 + 50 + statusBarHeight,
        left: (width-320)/2 + (320-260)/2,  
    },
    dropStyleMin: {
        borderRadius: 17.5,
        height: 200,
        width: 120,
        position: 'absolute',
        top: 200 + 35 + 45 + 20 + 50 + statusBarHeight,
        left: (width-320)/2 + (320-260)/2 + 120 + 20,
    },
})

