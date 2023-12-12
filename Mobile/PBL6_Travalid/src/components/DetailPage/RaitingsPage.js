import React from "react";
import {useState} from "react"
import {
    ScrollView,
    View,
    Text, 
    TouchableOpacity
} from 'react-native';
import { styleRaittingsPage } from "../../themes/styleDetailsPage";
import Icon from 'react-native-vector-icons/Ionicons'
import { Dropdown } from 'react-native-element-dropdown';
import RaittingComponent from "../Raitting";
export default RaitingsPage = ({product}) => {
    const [value, setValue] = useState('Latest');
    const data = [
        { label: 'Latest', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
    ];
    const iconStar = [];

    for (let i = 0; i < product.avg_rate; i++) {
        if (i<product.avg_rate - 1){
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
                    <TouchableOpacity style = {styleRaittingsPage.btnReview}>
                        <Text style = {styleRaittingsPage.textReview}>avg_rate</Text>
                    </TouchableOpacity>
                    <Dropdown
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
                    
                    />
                </View>
            </View>
            <ScrollView>
                <View>
                    {raittingData.map((raittingData) => (
                        <RaittingComponent key={raittingData.id} raittingData={raittingData} />
                    ))}
                </View>
                
            </ScrollView>
        </View>
    )
}