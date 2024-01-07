import React from "react";
import {
    Image, View
} from 'react-native'
export default ImageProduct = ({uri}) => {
    return(
        <View style = {{width: 101, height: 70, marginLeft: 10, borderRadius: 10, borderWidth: 0.5}}>
            <Image style = {{width: 100, height: 69, borderRadius: 10}} source={{
            uri: uri
            }}/>  
        </View>
        
    )
}