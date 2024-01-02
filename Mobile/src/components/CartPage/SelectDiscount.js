import React, { useEffect } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
const { width, height } = Dimensions.get('window');
export default SelectDiscount = ({setShowModal, discount, discountData}) =>{
    useEffect(()=>{
        console.log(discountData)
    },[])
    return(
        <View style = {style.View}> 
            <TouchableOpacity style = {style.btnExit} onPress={()=>setShowModal(false)}>
                
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        width: 360,
        height: 500,
        position: 'absolute',
        top: 100,
        left: (width-360)/2,
        backgroundColor: '#000'

    }
    ,btnExit: {
        backgroundColor: '#FFF',
        width: 100,
        height: 50,
        position: 'absolute',
        right: 0

    }
})