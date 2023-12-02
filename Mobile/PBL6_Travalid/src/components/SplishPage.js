import React from "react";

import{ View, Text, Image, TouchableOpacity } from 'react-native';
import{styleSplishPage} from '../themes/StyleSplishPage'
export default SplishPage = () => {
    return(
        <View style = {styleSplishPage.View}>
            <Image style ={styleSplishPage.Background} source={require('../assets/images/background.png')}/>
            <View style = {styleSplishPage.ViewLogo}>
                <Text style = {styleSplishPage.TextT}>T</Text>
                <Text style = {styleSplishPage.TextRAVALID}>RAVALID</Text>
            </View>
            <View style = {styleSplishPage.ViewUserCount1}>
                    <Text style = {styleSplishPage.TextUserCount}>10K+</Text>
                    <Text style = {styleSplishPage.Text}>Satisfied Customers</Text>
            </View>
            <View style = {styleSplishPage.ViewUserCount2}>
                    <Text style = {styleSplishPage.TextUserCount}>100K+</Text>
                    <Text style = {styleSplishPage.Text}>Available products</Text>
            </View>
            <View style = {styleSplishPage.View1}>
                <TouchableOpacity style = {styleSplishPage.TouchableOpacity}>
                    <Text style = {styleSplishPage.Text1}>Let'go</Text>
                    {/* <Image style = {styleSplishPage.Image1} source={require('../assets/images/arrow.png')}/> */}
                </TouchableOpacity>
            </View>    
        </View>
    )
}