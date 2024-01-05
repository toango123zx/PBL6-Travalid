import React, { useEffect } from "react";
import {useState} from "react"
import {
    ScrollView,
    View,
    Text, 
    TouchableOpacity,
    Modal
} from 'react-native';
import { styleRaittingsPage } from "../../themes/styleDetailsPage";
import Icon from 'react-native-vector-icons/Ionicons'
import { Dropdown } from 'react-native-element-dropdown';
import RatePage from "./RatePage";
import RaittingComponent from "../Raitting";
import authApi from "../../API/auth";
export default RaitingsPage = ({product}) => {
    const [value, setValue] = useState('Latest');
    const [showModalRate, setShowModalRate] = useState (false)
    const [cmt, setCmt] = useState()
    const [star, setStar ] = useState(0)
    const [avg_rate, setAvgRate] =  useState()
    const [rate, setRate] = useState([])
    useEffect(()=>{
        const getRate = async ()=> {
            try {
                const res = await authApi.getRate(product.id_product)
                setRate(res.data.data)
                setAvgRate(res.data.avg_rate)
            } catch (error) {
                console.log(error);
            }
        }
        getRate()
    },[])
    const data = [
        { label: 'Latest', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
    ];
    const iconStar = [];

    for (let i = 0; i < avg_rate; i++) {
        if (i<avg_rate - 1){
            iconStar.push(<Icon key={i} name={"star"} size={15} color="#FFC633" />);
        } else iconStar.push(<Icon key={i} name={"star-half-outline"} size={15} color="#FFC633" />);
    }
    const raittingData = [
        {
            id: 1,
            name: 'Thuan Nguyen',
            cmt: '10 điểm không có nhưng.',
            avg_rate: 4.6,
            date: '25/08/2023'
        },
        {
            id: 2,
            name: 'Van Toan',
            cmt: '10 điểm không có nhưng.',
            avg_rate: 3.6,
            date: '21/09/2023'
        },
    ]
    return(
        <View style = {styleRaittingsPage.View}>
            <View style = {styleRaittingsPage.view}>
                <View style = {styleRaittingsPage.viewLeft}>
                    <View style = {styleRaittingsPage.viewTextPR}>
                        <Text style = {styleRaittingsPage.textPR}>Product Ratings</Text>
                    </View>
                    <View style = {styleRaittingsPage.viewTextRaitting}>
                        <Text style = {styleRaittingsPage.textRaitings}>{product.avg_rate}</Text>
                    </View >
                    <View style = {styleRaittingsPage.viewIconStar}>
                        {iconStar}
                    </View>
                </View> 
                <View style = {styleRaittingsPage.viewRight}>
                    <TouchableOpacity style = {styleRaittingsPage.btnReview} onPress={()=>{setShowModalRate(true)}}>
                        <Text style = {styleRaittingsPage.textReview}>Rate</Text>
                    </TouchableOpacity>
                    {/* <Dropdown
                        style={styleRaittingsPage.dropdown}
                        placeholderStyle={styleRaittingsPage.placeholderStyle}
                        selectedTextStyle={styleRaittingsPage.selectedTextStyle}
                        inputSearchStyle={styleRaittingsPage.inputSearchStyle}
                        iconStyle={styleRaittingsPage.iconStyle}
                        itemContainerStyle={styleRaittingsPage.itemsStyle}
                        itemTextStyle={styleRaittingsPage.itemDropStyle}
                        containerStyle={styleRaittingsPage.dropStyle}
                        data={data}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={data[0].label}
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                        setValue(item.value);
                        }}
                    
                    /> */}
                </View>
            </View>
            <ScrollView>
                <View>
                    {rate.map((raittingData) => (
                        <RaittingComponent key={raittingData.id_rate} raittingData={raittingData} />
                    ))}
                </View>
                
            </ScrollView>
            <Modal visible = {showModalRate} animationType="slide" transparent={true}>
                <RatePage setShowModalRate={setShowModalRate} setCmt={setCmt} setStar={setStar} cmt={cmt} star={star} id = {product.id_product}/>
            </Modal>
        </View>
    )
}