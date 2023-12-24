import React from "react";

import { 
    View,
    StatusBar, 
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native'
import ProductSupp from "./ProductSupp";
import { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../../API/auth";
import AddProductPage from "./AddProductPage";

const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
import Icon from 'react-native-vector-icons/Ionicons'
export default ProductSuppilerPage = () => {
    const [value, setValue] = useState('Place');
    const [product, setProduct] = useState ([])
    const navigation = useNavigation()
    const data = [
        { label: 'Latest', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
    ];
    useEffect(()=>{

        const getProductBySupplier = async () => {
            
            try {
                const token = "bearer " + await AsyncStorage.getItem('userToken')
                const res = await authApi.getProductBySupplier(1,{
                    "token" : token
                })
                
                setProduct(res.data.data.allProduct)
            } catch (error) {
                console.log(error)
            }
        }
        console.log("-----------------------------------------------------")
        getProductBySupplier();
        console.log(product);
    },[])
    return(
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack} onPress={()=>{navigation.goBack()}}>
                    <Icon name = 'chevron-back' color = '#FFF' size = {25}/>
                </TouchableOpacity>
                <Text style = {style.textProduct}>Products</Text>
                <TouchableOpacity style = {style.btnSearch}>
                    <Icon name = 'search-outline' color = '#000' size = {35} />
                </TouchableOpacity>
            </View>
            <View style = {style.viewAddProduct}>
                <Dropdown
                    style={style.dropdown}
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    inputSearchStyle={style.inputSearchStyle}
                    iconStyle={style.iconStyle}
                    itemContainerStyle={style.itemsStyle}
                    itemTextStyle={style.itemDropStyle}
                    containerStyle={style.dropStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={'Place'}
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={item => {
                    setValue(item.value);
                }}
                    
                />
                <TouchableOpacity style = {style.btnAddProduct} onPress={() => {navigation.navigate('AddProductPage')}}>
                    <Text style = {style.textAddProduct}>
                        ADD PRODUCT
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle ={style.ScrollView}>
                
                {product.map((product) => (
                    <ProductSupp key={product.id_product} data ={product} />
                ))}
                <View style = {{height: 60}}>

                </View>
            </ScrollView>
            <View style = {style.viewPage}>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        marginTop: statusBarHeight,
        backgroundColor: "#FFF",
        height: height,
        alignItems: 'center'
    }
    ,ScrollView: {
        width: width,
        alignItems: 'center',
        
    }
    ,viewPage: {
        width: 330,
        height: 30,
        borderWidth: 0,
        marginBottom: 0,
        position: 'absolute',
        bottom: 20,
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation: 5
        
    }
    ,viewHeader: {
        flexDirection: 'row',
        width: 380,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    }
    ,btnBack: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FF852C' ,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0
    },
    textProduct: {
        color: '#000',
        fontFamily: 'Montserrat SemiBold',
        letterSpacing: 1,
        fontSize: 20,
    }
    ,btnSearch: {
        height: 48,
        borderWidth: 0,
        position: 'absolute',
        right: 0,
        justifyContent: 'center'
    },
    viewAddProduct:{
        width: 380,
        height: 35,
        marginBottom: 10
    }
    ,btnAddProduct: {
        width: 150,
        height: 35,
        backgroundColor: '#FF852C',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        borderRadius: 17.5
    }
    ,textAddProduct: {
        color: '#FFF',
        fontFamily: 'Montserrat SemiBold',
        fontSize: 15
    }
    //dropdown
    ,dropdown: {
        width: 130,
        height: 35,
        borderWidth: 1,
        position: 'absolute',
        borderRadius: 17.5,
        left: 0,
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
    },
    placeholderStyle: {
        fontSize: 16,
        marginLeft: 20,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
    },
    selectedTextStyle: {
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
    },
    iconStyle: {
        width: 30,
        height: 30,
        marginRight : 10,
        
    },
    inputSearchStyle: {
        height: 23,
        fontSize: 16,
        fontFamily: 'Montserrat SemiBold',
    },
    itemDropStyle: {
        fontSize: 16,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
        padding: 0,
        position: 'absolute',
        textAlign: 'center',
        left: 13,
       

    },
    itemsStyle: {
        height: 30,
        justifyContent: 'center',
         borderRadius: 17.5,
        
       
        
    },
    dropStyle: {
        borderRadius: 17.5,
    }
})