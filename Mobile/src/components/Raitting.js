import React from "react";
import{ View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get('window');


export default RaittingComponent = ({raittingData}) => {
    const iconStar = [];
    for (let i = 0; i < raittingData.rate; i++) {
        if (i<raittingData.rate - 1){
            iconStar.push(<Icon key={i} name={"star"} size={12} color="#FFC633" />);
        } else iconStar.push(<Icon key={i} name={"star-half-outline"} size={12} color="#FFC633" />);
    }
    return(
        <View style = {style.View}>
            <View style = {style.viewStar}>
                {iconStar}
                <TouchableOpacity style = {style.btn}>
                    <Icon name={"ellipsis-horizontal"} size={16} color="rgba(0, 0, 0, 0.4)" />
                </TouchableOpacity>
                
            </View>
            <View style = {style.viewName}>
                <Text style = {style.textName}>{raittingData.name}</Text>
            </View>
            <View style = {style.viewCmt}> 
                <Text style = {style.textCmt}>"{raittingData.cmt}"</Text>
            </View>
            <View style = {style.viewDate}>
                <Text style = {style.textDate}>{raittingData.date}</Text>
            </View>
        </View>

    )
}
const style = StyleSheet.create({
    View: {
        width: 380,
        height: 121,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        marginLeft: (width - 380) /2,
        marginTop: 20

    },
    viewStar: {
        width: 350,
        height: 15,
        borderWidth: 0,
        marginLeft: 15,
        marginTop: 15,
        flexDirection: 'row',
        
    },
    viewName: {
        height: 15,
        width: 350,
        borderWidth: 0,
        marginLeft: 15,
        marginTop :2
    },
    viewCmt: {
        width: 350,
        height: 39,
        borderWidth: 0,
        marginLeft: 15,
        marginTop: 5
    },
    viewDate: {
        width: 350,
        height: 15,
        borderWidth: 0,
        marginLeft: 15
    },
    textCmt: {
        fontFamily: 'Montserrat Regular',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.60)'
    },
    textDate: {
        fontFamily: 'Montserrat Medium',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.60)'
    },
    textName: {
        fontFamily: 'Montserrat Bold',
        fontSize: 12,
        color: '#000'
    },
    btn: {
        position: 'absolute',
        right: 0,
        top: -5
    }
})