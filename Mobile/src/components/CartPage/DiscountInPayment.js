import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export default DiscountInPayment = ({data, setDiscount, setNameDis}) => {
    const endTime = new Date(data.end_time)
    const role = data.user.role
    return(
        <View style = {style.View}>
            <View style = {style.viewDiscountInfo}>
                <View style = {style.viewTop}>
                    <View style = {style.viewTime}>
                        <Text style = {style.textTime}>Valid to </Text>
                        <Text style = {style.textTime1}>{endTime.getUTCHours()}:{endTime.getUTCMinutes()}, {endTime.getUTCDate()}/{endTime.getUTCMonth()+1}/{endTime.getUTCFullYear()} </Text>
                        {/* <Text style = {style.textTime}>to </Text>
                        <Text style = {style.textTime1}>20/02/2012 </Text> */}
                        
                    </View>
                    <View style = {role==='travel_supplier' ? {...style.viewRole, backgroundColor: '#0055AA'} : style.viewRole}>
                        <Text style ={style.textRole}>{role ==='travel_supplier' ? 'SUPPLIER' : 'TRAVALID'}</Text>
                    </View>
                </View>
                <View style = {style.viewBottom}>
                    <View style = {style.viewQuantity}>
                        <Text style = {style.textQuantity}>{data.quantity} code left</Text>
                    </View>
                    <Text style = {style.textDiscount}>-{data.value}% price </Text>          
                </View>
                
            </View>
            <TouchableOpacity style = {style.btnSelect} onPress={()=>{setDiscount(data.value), setNameDis(data.name)}}>
                <Icon name = 'caret-forward' color = '#FFF' size = {30}/>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        width: 380,
        height: 50,
        borderWidth: 0,
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        
    }
    ,viewDiscountInfo: {
        width: 350,
        height: 50,
        borderWidth: 0,
        backgroundColor: '#EEEEFF',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        
    }
        ,viewTop: {
            width: 350,
            height: 25,
            flexDirection: 'row',
            alignItems: 'center'
        }
        ,viewTime: {
            width: 200,
            height: 25,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0
        }
            ,textTime: {
                fontFamily: 'Montserrat Medium',
                fontSize: 14,
                color: '#000',
                left: 15
            }
            ,textTime1: {
                fontFamily: 'Montserrat SemiBold',
                fontSize: 14,
                color: '#000',
                left: 15
                
            }
        ,viewRole: {
            width: 100,
            height: 20,
            backgroundColor: '#FF852C',
            position: 'absolute',
            right: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        }
            ,textRole: {
                fontFamily: 'Montserrat SemiBold',
                fontSize: 12,
                color: '#FFF'
            }
        ,viewBottom: {
            width: 350,
            height: 20,
            flexDirection: 'row'
        }
        ,viewQuantity: {
            width: 200,
            height: 20,
            flexDirection: 'row',
            alignItems: 'center',
            
        }
            ,textQuantity: {
                fontFamily: 'Montserrat Medium',
                fontSize: 14,
                color: '#01AB31',
                left: 15
            }
            ,textDiscount: {
                fontFamily: 'Montserrat Bold',
                fontSize: 16,
                color: '#FF852C',
                position: 'absolute',
                right: 15
            }
    ,btnSelect: {
        height: 50,
        width: 30,
        backgroundColor: '#FF852C',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }
})