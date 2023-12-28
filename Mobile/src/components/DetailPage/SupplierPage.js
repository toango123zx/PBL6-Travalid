import React from "react";
import {
    ScrollView,View,Text, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
export default SupplierPage = ({supplier}) => {
    return(
        <View style = {style.View}> 
            <Text style = {style.textTitle}>Providing this services</Text>
            <View style = {style.view}>
                <Text style = {style.left}>Name</Text>
                <Text style = {style.right}>{supplier.name}</Text>
            </View>
            <View style = {style.view}>
                <Text style = {style.left}>Email</Text>
                <Text style = {style.right}>{supplier.email}</Text>
            </View>
            <View style = {style.view}>
                <Text style = {style.left}>Phone number</Text>
                <Text style = {style.right}>{supplier.phone_number}</Text>
            </View>
            <View style = {style.view}>
                <Text style = {style.left}>Address</Text>
                <Text style = {style.right}>{supplier.address}</Text>
            </View>
            <View style = {style.view}>
                <Text style = {style.left}>Tax ID number</Text>
                <Text style = {style.right}>{supplier.tax_id_number}</Text>
            </View>
        </View>
        
    )
}
const style = StyleSheet.create({
    View: {
        width: 380,
        height: 500,
        marginLeft: (width-380)/2
    },
    textTitle: {
        fontFamily: 'Montserrat SemiBold',
        fontSize: 25,
        color: '#000',
        marginTop:20
    },
    view: {
        flexDirection: 'row',
        width: 380,
        marginTop: 15
    },
    left: {
        fontFamily: 'Montserrat SemiBold',
        fontSize: 14,
        color: '#FF6B00'
    },
    right: {
        fontFamily: 'Montserrat Regular',
        fontSize: 14,
        color: '#000',
        position: 'absolute',
        left: 120,
    }
})