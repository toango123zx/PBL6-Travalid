import React, { useEffect, useState } from "react";
import { 
    StyleSheet, 
    View,
    Text,
    TouchableOpacity
    
    
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
export default Bill = ({billData, role}) =>{
    const time = new Date(billData.time)
    const [token, setToken] = useState()
    const navigation = useNavigation()
    useFocusEffect(
        React.useCallback(() => {
        const checkUserToken = async () => {
            try {
            const token = await AsyncStorage.getItem('userToken');
            //console.log(token);
            } catch (error) {
            console.error('Lỗi khi kiểm tra userToken:', error);
            }
        };

        checkUserToken();
        }, [])
    );
    return (
        <View style = {style.View}>
            <View style = {{...style.view, marginTop: 5}}>
                <Text style = {style.textName}>#{billData.id_bill}</Text>
                <Text style={{ ...style.textStatus,
                            color: billData.status === 'done' ? '#2DB224' :
                                    billData.status === 'cancel' ? '#EE5858' :
                                    billData.status === 'pending' ? '#FF7A00' :
                                    billData.status === 'paided' ? '#0055AA' : 'black' 
                                    }}>
                    {billData.status === 'done'? 'DONE' : billData.status === 'cancel'? 'CANCEL': billData.status === 'pending' ? 'PENDDING' : 'PAIDED'}
                </Text>
            </View>
            <View style = {{...style.view, justifyContent: 'flex-start'}}>
                <Text style = {style.textQuantity}>{billData.quantity} people</Text>
            </View>
            <View style = {style.view}>
                
                <Text style = {style.textTime}>
                    {time.getUTCHours()}:{time.getUTCMinutes()}, {time.getUTCDate()}/{time.getUTCMonth()+1}/{time.getUTCFullYear()}
                </Text>
                <TouchableOpacity style = {style.btnEdit} onPress={()=> {navigation.navigate('BillDetailPage', {billData})}}>
                    <Text style = {style.textEdit}>View Detail </Text>
                    <Icon name = 'arrow-forward' size = {18} color = '#2DA5F3'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        width: 380,
        height: 100,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: '#FFF',
        marginTop: 10,
        marginBottom: 10,
        elevation: 5
    }
    ,view: {
        width: 350,
        height: 30,
        borderWidth: 0,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    ,

    textName: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 17
    }
    ,textStatus: {
        color: '#2DB224',
        fontFamily: 'Montserrat Medium',
        fontSize: 16
    }
    ,textQuantity: {
        color: '#000',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
        marginLeft: 2
    }
    
    ,textTime: {
        color: '#5F6C72',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
    }
    ,btnEdit: {
        flexDirection: 'row'
    }
    ,textEdit: {
        color: '#2DA5F3',
        fontFamily: 'Montserrat Medium',
        fontSize: 16,
    }
})