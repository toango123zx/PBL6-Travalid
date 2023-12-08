import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'

export default DiscountsComp = ({data}) => {
    return(
        <View style = {style.View}>
            <View style = {style.viewLeft}>
                <View style = {style.viewName}>
                    <Text style = {style.textName}>Lunar new year</Text>
                </View>
                <View style = {style.viewTime}>
                    <Text style = {style.textValidFrom}>Valid from 
                    </Text>
                    <Text style = {style.textTime}> 1:00, 06/10/2023</Text>
                </View>
                <View style = {style.viewPoint}>
                    <Icon name= 'server' color ='rgba(255, 213, 33, 1)' size ={17}/>
                    <Text style = {style.textPoints}> Point: 23</Text>
                </View>
                <View style = {style.view}>
                    <Icon1 name= 'check-decagram-outline' color ='rgba(1, 171, 49, 1)' size ={18}/>
                    <Text style = {style.text1}> 15 code left</Text>
                </View>
            </View>
            <View style = {style.viewRight}>
                <View style = {style.view1}>
                    
                </View>
                <View style = {style.viewQuantity}>
                    <Text style = {style.textQuantity}>-35% Price</Text>
                </View>
                <View style = {style.viewBtnViewDetails}>
                    <TouchableOpacity style = {style.btnViewDetails}>
                        <Text style= {style.textViewDetails}>View details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        width: 380,
        height: 120,
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 5,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row'
    }
    // Left 
    ,viewName: {
        width: 250,
        height: 27,
        borderWidth: 0,
        marginTop: 6,
        justifyContent: 'center'
    }
    ,textName: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Montserrat Bold'
    }
    ,viewTime: {
        width: 250,
        height: 27,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,textValidFrom: {
        color: '#4A4A4A',
        fontSize: 13,
        fontFamily: 'Montserrat Medium'
    }
    ,textTime: {
        color: '#000',
        fontSize: 13,
        fontFamily: 'Montserrat SemiBold'
    }
    ,viewPoint: {
        width: 250,
        height: 27,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,textPoints: {
        color: '#4A4A4A',
        fontSize: 13,
        fontFamily: 'Montserrat Medium'
    }
    ,view: {
        width: 250,
        height: 27,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,text1: {
        color: '#01AB31',
        fontSize: 13,
        fontFamily: 'Montserrat Medium'
    }
    
    ,viewLeft: {
        marginLeft : 18,
        width: 250,
        height: 120,
        borderWidth: 0
    }

    //right
    ,viewRight: {
       width: 94,
       height: 120,
       borderWidth: 0
        
    }
    ,view1: {
        width: 94,
        height: 30,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 107, 0, 1)',
        marginTop: 10
    }
    ,viewQuantity: {
        width: 94,
        height: 40,
        borderWidth: 0,
        marginTop: 10,
        justifyContent: 'center',
        
    }
    ,textQuantity: {
        color: 'rgba(255, 107, 0, 1)',
        fontFamily: 'Montserrat Bold',
        fontSize: 16,
        textAlign: 'right'
    }
    ,viewBtnViewDetails: {
        width: 85,
        height: 20,
        borderWidth: 0,
        alignItems :'center',
        position: 'absolute',
        bottom: 10,
        right: 0
       
    }
    ,btnViewDetails: {
        borderBottomColor: '#0055AA',
        borderBottomWidth: 1
    }
    ,textViewDetails: {
        color: '#0055AA',
        fontFamily: 'Montserrat Medium',
        fontSize: 13,
    }
})
