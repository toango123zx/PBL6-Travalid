import React from "react";
import {useState, useEffect} from "react";
import AttractionComponent from "./Product";
import {View, Text, TextInput, TouchableOpacity, Modal, FlatList, Image, ScrollView, SafeAreaView, StatusBar} from 'react-native'
import { styleAttractionPage } from "../themes/styleAttractionPage";
import authApi from "../API/auth";
export default AttractionPage = () => {
    const [place, setPlace] = useState(placeData);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [modalVisible, setModalVisible] = useState(false)
    const [productData, setProductData] = useState([])
    const handlePlaceClick = () => {
        setModalVisible(true);
      };
      const handleCloseModal = () => {
        setModalVisible(false);
      };
    useEffect(()=>{

        const getAllProduct = async () => {
            try {
                const res = await authApi.getProduct()
                setProductData(res.data.data)
                console.log(productData[1].name)
            } catch (error) {
                console.log(error)
            }
        }
        console.log("-----------------------------------------------------")
        getAllProduct();
    },[])
    const placeData = [
        { id: 1, name: 'Place 1' },
        { id: 2, name: 'Place 2' },
        { id: 3, name: 'Place 3' },
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
                    {productData.map((productData) => (
                        <AttractionComponent key={productData.id_product} productData={productData} />
                    ))}
                </View>                    
            </ScrollView>
            
        </SafeAreaView>
        
    )
}