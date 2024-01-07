import React, { useState, useEffect } from 'react';
import { View, Text, useWindowDimensions, Dimensions, StatusBar, StyleSheet, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../../API/auth";
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import { useNavigation } from '@react-navigation/native';
import  DateTimePickerAndroid  from "@react-native-community/datetimepicker";
import Icon from 'react-native-vector-icons/Ionicons'
const LineChartDemo = () => {
    const [revenue, setRevenueData] = useState([]);
    const [dataChart, setDataChart] = useState(null);
    const [start, setStart] = useState();
    const [end, setEnd] = useState(null)
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date())
    const [date2, setDate2] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const [showPicker2, setShowPicker2] = useState(false)
    const toggleDatepicker = () =>{
        setShowPicker(!showPicker)
    }
    const toggleDatepicker2 = () =>{
        setShowPicker2(!showPicker2)
    }
    const onChange = ({type}, selectedDate) => {
        if (type = "set") {
            const currentDate = selectedDate;
            setDate(currentDate)
            if (Platform.OS === "android"){
                toggleDatepicker();
                const selectedMonth = currentDate.getMonth();
                const selectedYear = currentDate.getFullYear();
                setStart(`${selectedMonth + 1}/${selectedYear}`);
            }
        } else {
            toggleDatepicker();
        }
    }
    const onChange2 = ({type}, selectedDate) => {
        if (type = "set") {
            const currentDate = selectedDate;
            setDate2(currentDate)
            if (Platform.OS === "android"){
                toggleDatepicker2();
                const selectedMonth = currentDate.getMonth();
                const selectedYear = currentDate.getFullYear();
                setEnd(`${selectedMonth + 1}/${selectedYear}`);
            }
        } else {
            toggleDatepicker2();
        }
    }

    //1,2 đang làm 2 của supplier, thay đổi api để call tới 1
    
        const getDetailProduct = async () => {
            try {
                const token = "bearer " + await AsyncStorage.getItem('userToken');
                const res = await authApi.analysisRevenueInMonthsBySupplier(start, end, {
                    "token": token,
                })
                setRevenueData(res.data.data.monthlyRevenues);

                if (Array.isArray(res.data.data.monthlyRevenues)) {
                    const months = [];
                    const revenues = [];
                    res.data.data.monthlyRevenues.forEach(data => {
                        months.push(`${data.month}, ${data.year}`);
                        revenues.push(data.totalRevenue);
                    });
                    setDataChart({
                        labels: months,
                        datasets: [
                            {
                                data: revenues,
                                color: () => 'green',
                                strokeWidth: 4,
                            }
                        ],
                        legend: ['revenue']
                    })
                } else {
                    throw new Error("Error: 'monthlyRevenues' is not an array");
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
     
   

    //6, 8 đang làm 8 của supplier, thay đổi api đẻ view admin
    
        const getDetailProduct1 = async () => {
            try {
                const token = "bearer " + await AsyncStorage.getItem('userToken');
                const res = await authApi.analysisCompleteInMonthsBySupplier(start, end, {
                    "token": token,
                })
                setRevenueData(res.data.data.monthlyCompletedCustomers);
                // console.log(JSON.stringify(res.data.data.monthlyCompletedCustomers, null, 2))
                if (Array.isArray(res.data.data.monthlyCompletedCustomers)) {
                    const months = [];
                    const revenues = [];
                    res.data.data.monthlyCompletedCustomers.forEach(data => {
                        months.push(`${data.month}, ${data.year}`);
                        revenues.push(data.count);
                    });
                    setDataChart({
                        labels: months,
                        datasets: [
                            {
                                data: revenues,
                                color: () => 'green',
                                strokeWidth: 4,
                            }
                        ],
                        legend: ['revenue']
                    })
                    
                } else {
                    throw new Error("Error: 'monthlyRevenues' is not an array");
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        
    


    // if (!dataChart) {
    //     // Add a loading indicator or other UI while data is being fetched
    //     return null;
    // }

    return (
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack} onPress={()=> {navigation.goBack()}}>
                    <Icon name = 'chevron-back' size = {25} color = '#FFF'/>
                </TouchableOpacity>
                <Text style = {style.textOderHistory}>Analysis</Text>
            </View>
            <View style = {style.viewPickTime}>
                {showPicker && (
                    <DateTimePickerAndroid
                        mode="date" 
                        display="spinner"
                        value={date}
                        onChange={onChange}
                    />
                )}
                
                <Pressable
                    onPress={toggleDatepicker}
                    style = {{width: 100, height: 50, borderRadius: 16, backgroundColor: '#F7F7F9'}}>
                            
                    <TextInput
                        style = {{width: 100, height: 50, fontFamily: 'Montserrat Regular', fontSize: 16, color: '#1B1E28', marginLeft: (height*0.3*0.25)/2-12}}
                        value={start}
                        placeholder="Start"
                        onChangeText={setStart}
                        placeholderTextColor={'#7D848D'}
                        editable = {false}
                    />
                            
                </Pressable>
                {showPicker2 && (
                    <DateTimePickerAndroid
                        mode="date" 
                        display="spinner"
                        value={date2}
                        onChange={onChange2}
                    />
                )}
                
                <Pressable
                    onPress={toggleDatepicker2}
                    style = {{width: 100, height: 50, borderRadius: 16, backgroundColor: '#F7F7F9'}}>
                            
                    <TextInput
                        style = {{width: 100, height: 50, fontFamily: 'Montserrat Regular', fontSize: 16, color: '#1B1E28', marginLeft: (height*0.3*0.25)/2-12}}
                        value={end}
                        placeholder="End"
                        onChangeText={setEnd}
                        placeholderTextColor={'#7D848D'}
                        editable = {false}
                    />
                            
                </Pressable>
            </View>
            <View style = {style.viewTouch}>
                <TouchableOpacity style = {style.touch} onPress={()=>getDetailProduct()}>
                    <Text style = {{color: '#FFF', fontFamily: 'Montserrat SemiBold', fontSize: 16}}>Revenu</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {style.touch} onPress={()=>getDetailProduct1()}>
                    <Text style = {{color: '#FFF', fontFamily: 'Montserrat SemiBold', fontSize: 16}}>Complete</Text>
                </TouchableOpacity>
            </View>
            {dataChart ? 
            <LineChart
                data={dataChart}
                yAxisLabel=""
                width={width}
                height={600}
                
                chartConfig={{
                    backgroundGradientFrom: 'white',
                    backgroundGradientFromOpacity: 0.2,
                    backgroundGradientTo: 'white',
                    backgroundGradientToOpacity: 0.8,
                    color: (opacity = 0.999) => `rgba(0, 0, 0, ${opacity})`,
                    barPercentage: 0.1,
                    propsForDots: {
                        r: '3',
                        strokeWidth: '2',
                        stroke: 'black',
                    },
                }}
                style={{ borderColor: 'white', borderWidth: 0 }}
                withInnerLines={true}
                withShadow={true}
                getDotColor={() => 'yellow'}
                hidePointsAtIndex={[0]}
                verticalLabelRotation={100}
                horizontalLabelRotation={50}
            />
            : null}
        </View>
    );
};

export default LineChartDemo;
const style = StyleSheet.create({
    View: {
        width: width,
        height: height,
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginTop: statusBarHeight
    }
    ,viewPickTime: {
        width: 230,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        borderWidth: 0
    }
    ,viewHeader: {
        width: 380,
        height: 48,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10
    }
    ,btnBack: {
        height: 48,
        width: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF852C',
        position: 'absolute',
        left: 0,

    }
    ,textOderHistory: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        fontSize: 20,
    }
    ,viewTouch: {
        width: 230,
        height: 40,
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
    ,touch: {
        width: 100,
        height: 40,
        backgroundColor: '#FF852C',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
