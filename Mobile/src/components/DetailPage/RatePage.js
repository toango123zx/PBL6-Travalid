import React, { useEffect } from "react";
import { StyleSheet, View , StatusBar, Dimensions, TouchableOpacity, Text , TextInput, Alert} from 'react-native'
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/Ionicons'
import authApi from "../../API/auth";
export default RatePage = ({setShowModalRate, setCmt, setStar, cmt, star, id}) => {
    const createRate = async () => {
        try {
            const token = "bearer " + await AsyncStorage.getItem('userToken')
            const res = await authApi.createRate(id, 
            {
                "token": token
            },
            {
                comment: cmt,
                star: star
            })
            if (res.status === 200 ) Alert.alert("Review success")
        } catch (error) {
            Alert.alert("Review failed")
            console.log(error)
        }
        
    }
    return(
        <View style = {style.View}>
            <Text style = {style.textReviewProduct}>Review Product</Text>
            <View style = {style.viewInputDescription}>
                    <TextInput
                        placeholder={'Type a desciption'}
                        placeholderTextColor={'#7D848D'}
                        style={style.inputDescription}
                        onChangeText={setCmt}
                        value={cmt}
                        multiline = {true}
                        textAlignVertical='top'
                    />
                </View>
            <View style ={style.viewStar}>
                <Text style = {{...style.textReviewProduct, marginTop: 0}}>Rate: </Text>
                <TouchableOpacity onPress={()=>{setStar(1)}}>
                    <Icon name = {star >= 1 && star <= 5 ? 'star' : 'star-outline'} color = '#000' size = {16}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStar(2)}}>
                    <Icon name = {star >= 2 && star <= 5 ? 'star' : 'star-outline'} color = '#000' size = {16}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStar(3)}}>
                    <Icon name = {star >= 3 && star <= 5 ? 'star' : 'star-outline'} color = '#000' size = {16}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStar(4)}}>
                    <Icon name = {star >= 4 && star <= 5 ? 'star' : 'star-outline'} color = '#000' size = {16}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setStar(5)}}>
                    <Icon name = {star >= 5 && star <= 5 ? 'star' : 'star-outline'} color = '#000' size = {16}/>
                </TouchableOpacity>
                
                
            </View>
            
            <TouchableOpacity style = {style.btnSend} onPress={()=>{setShowModalRate(false), createRate()}}> 
                <Text style = {style.textReview}>REVIEW</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    View: {
        width: 360,
        height: 300,
        marginLeft: (width-360)/2,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 5,
        marginTop: 300
    }
    ,btnSend: {
        width: '100%',
        height: 30,
        backgroundColor: "#FF852C",
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
    ,textReview: {
        color: '#FFF',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 16
    }
    ,textReviewProduct: {
        color: '#000',
        marginLeft: 15,
        fontFamily: 'Montserrat SemiBold',
        fontSize: 16,
        marginTop: 10
    }
    ,viewInputDescription: {
        width: 330,
        height: 180,
        borderRadius: 10,
        backgroundColor: '#E4E7E9',
        marginLeft: 15,
        marginTop : 5
    }
    ,inputDescription: {
        width: '95%',
        height: '100%',
        marginLeft: '3%',
        backgroundColor: '#E4E7E9',
        borderRadius: 10,
        color: '#000',
        fontFamily: 'Montserrat Regular',
        fontSize: 14
        
        
        
    }
    ,viewStar: {
        width: 360,
        marginLeft: 0,
        borderWidth: 0,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    }
})