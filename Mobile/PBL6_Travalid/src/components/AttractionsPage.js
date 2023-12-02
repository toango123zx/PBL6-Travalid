import React from "react";
import {useState} from "react";
import AttractionComponent from "./Attraction";
import {View, Text, TextInput, TouchableOpacity, Modal, FlatList, Image, ScrollView, SafeAreaView, StatusBar} from 'react-native'
import { styleAttractionPage } from "../themes/styleAttractionPage";
export default AttractionPage = () => {
    const [place, setPlace] = useState(placeData);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [modalVisible, setModalVisible] = useState(false)
    const handlePlaceClick = () => {
        setModalVisible(true);
      };
      const handleCloseModal = () => {
        setModalVisible(false);
      };

    const placeData = [
        { id: 1, name: 'Place 1' },
        { id: 2, name: 'Place 2' },
        { id: 3, name: 'Place 3' },
    ]
    const attractionData = [
        {
            id: 1,
            name: 'Ngu Hanh Son',
            location: 'Da Nang',
            rate: 4.6,
            price: '120.000'
        },
        {
            id: 2,
            
            name: 'Than Tai Waterfall',
            location: 'Da Nang',
            rate: 4.2,
            price: '100.000'
        },
        {
            id: 3,
           
            name: 'Phu Quoc Island',
            location: 'Phu Quoc',
            rate: 4.8,
            price: '240.000'
        },
        {
            id: 4,
            
            name: 'Son Tra Peninsula',
            location: 'Da Nang',
            rate: 4.7,
            price: '50.000'
        },
        {
            id: 5,
            
            name: 'Ngu Hanh Son',
            location: 'Da Nang',
            rate: 4.6,
            price: '190.000'
        }

    ]
    return(
        <SafeAreaView style = {styleAttractionPage.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {styleAttractionPage.viewText}>
                <Text style = {styleAttractionPage.text} >Find the Adventure of a lifetime</Text>
            </View >
            <View style = {styleAttractionPage.viewSearchPlace}>
                <View style = {styleAttractionPage.viewTextInput}>
                    <TextInput
                        placeholder={'Search'}
                        onChangeText={setPlace}
                        value={place}
                        style = {styleAttractionPage.textInputSeach}
                        placeholderTextColor={'#7D848D'}
                    />
                </View>
                
                <TouchableOpacity style = {styleAttractionPage.touchPlace} onPress={handlePlaceClick}>
                    <Text style = {styleAttractionPage.textPlace}>Place  </Text>
                    <Image source={require('../assets/images/downarrow.png')}/>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={handleCloseModal}>
                    <View style = {styleAttractionPage.viewModal}>
                        <FlatList
                            data = {placeData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style = {styleAttractionPage.viewListPlace}>
                                  <Text style = {styleAttractionPage.textListPlace}>{item.name}</Text>
                                </View>
                            )}
                        />
                    </View>
                </Modal>

            </View>

            <View style = {styleAttractionPage.viewFilterPrice}>
                <View style = {styleAttractionPage.viewPrice}>
                    <TextInput
                        placeholder={'Min price'}
                        onChangeText={setMinPrice}
                        value={minPrice}
                        style = {styleAttractionPage.textPrice}
                        placeholderTextColor={'#7D848D'}
                        />               
                </View>
                <View style = {styleAttractionPage.viewPrice}>
                    <TextInput
                        placeholder={'Max price'}
                        onChangeText={setMaxPrice}
                        value={maxPrice}
                        style = {styleAttractionPage.textPrice}
                        placeholderTextColor={'#7D848D'}
                        />     
                </View>
                <View style = {styleAttractionPage.viewButtonSearch}>
                    <TouchableOpacity style = {styleAttractionPage.buttonSearch}>

                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style = {{marginTop: 20}}>
                <View style = {styleAttractionPage.viewAttractions}>
                    {attractionData.map((attractionData) => (
                        <AttractionComponent key={attractionData.id} attractionData={attractionData} />
                    ))}
                </View>                    
            </ScrollView>
            
        </SafeAreaView>
        
    )
}