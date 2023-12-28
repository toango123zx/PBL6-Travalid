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
import DiscountSupp from "./DiscountSupp";
export default ProductSuppilerPage = () => {
    const [page, setPage] = useState('PRODUCTS');
    const [product, setProduct] = useState ([]);
    const [discount, setDiscount] = useState([])
    const navigation = useNavigation()
    const data = [
        { label: 'Products', value: 'PRODUCTS' },
        { label: 'Schedules', value: 'SCHEDULES' },
        { label: 'Disounts', value: 'DISCOUNTS' },
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
        const getDisountBySupplier = async () => {
            try {
                const token = "bearer " + await AsyncStorage.getItem('userToken')
                const res = await authApi.getDiscountSupplier({
                    "token" : token
                })
                
                setDiscount(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        console.log("-----------------------------------------------------")
        getProductBySupplier();
        getDisountBySupplier();
        
    },[])
    return(
        <View style = {style.View}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style = {style.viewHeader}>
                <TouchableOpacity style = {style.btnBack} onPress={()=>{navigation.goBack()}}>
                    <Icon name = 'chevron-back' color = '#FFF' size = {25}/>
                </TouchableOpacity>
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
                    value={page}
                    onChange={item => {
                    setPage(item.value);
                }}
                    
                />
                <TouchableOpacity style = {style.btnSearch}>
                    <Icon name = 'search-outline' color = '#000' size = {35} />
                </TouchableOpacity>
                
                
            </View>
            <View style = {{flex: 1}}>
                    {page === 'PRODUCTS' ?  <ProductSuppPage product={product} navigation={navigation}/> : page === 'DISCOUNTS' ? <DiscountSuppPage discount = {discount} navigation = {navigation} /> :  null}
                </View>
        </View>
    )
}

const ScheduleSuppPage = ({discount}) => {
    
}
const DiscountSuppPage = ({discount, navigation}) => {
    const data1 = [
        { label: 'Latest', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
    ];
    const [value1, setValue1] = useState('Place');
    return(
        <View>
            <View style = {styleProductSuppPage.viewAddProduct}>
                <Dropdown
                    style={styleProductSuppPage.dropdown}
                    placeholderStyle={styleProductSuppPage.placeholderStyle}
                    selectedTextStyle={styleProductSuppPage.selectedTextStyle}
                    inputSearchStyle={styleProductSuppPage.inputSearchStyle}
                    iconStyle={styleProductSuppPage.iconStyle}
                    itemContainerStyle={styleProductSuppPage.itemsStyle}
                    itemTextStyle={styleProductSuppPage.itemDropStyle}
                    containerStyle={styleProductSuppPage.dropStyle}
                    data={data1}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={'Place'}
                    searchPlaceholder="Search..."
                    value={value1}
                    onChange={item => {
                    setValue1(item.value);
                }}
                    
                />
                <TouchableOpacity style = {styleProductSuppPage.btnAddProduct} onPress={() => {navigation.navigate('AddDiscountPage')}}>
                    <Text style = {styleProductSuppPage.textAddProduct}>
                        ADD DISCOUNT
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle ={styleProductSuppPage.ScrollView}>
                
                {discount.slice(0,10).map((discount) => (
                    <DiscountSupp key={discount.id_discount} data ={discount} />
                ))}
                <View style = {{height: 60}}>

                </View>
            </ScrollView>
            <View style = {styleProductSuppPage.viewPage}>

            </View>
        </View>
    )
}
const ProductSuppPage = ({product, navigation}) => {
    const data1 = [
        { label: 'Latest', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
    ];
    const [value1, setValue1] = useState('Place');
    return(
        <View>
            <View style = {styleProductSuppPage.viewAddProduct}>
                <Dropdown
                    style={styleProductSuppPage.dropdown}
                    placeholderStyle={styleProductSuppPage.placeholderStyle}
                    selectedTextStyle={styleProductSuppPage.selectedTextStyle}
                    inputSearchStyle={styleProductSuppPage.inputSearchStyle}
                    iconStyle={styleProductSuppPage.iconStyle}
                    itemContainerStyle={styleProductSuppPage.itemsStyle}
                    itemTextStyle={styleProductSuppPage.itemDropStyle}
                    containerStyle={styleProductSuppPage.dropStyle}
                    data={data1}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={'Place'}
                    searchPlaceholder="Search..."
                    value={value1}
                    onChange={item => {
                    setValue1(item.value);
                }}
                    
                />
                <TouchableOpacity style = {styleProductSuppPage.btnAddProduct} onPress={() => {navigation.navigate('AddProductPage')}}>
                    <Text style = {styleProductSuppPage.textAddProduct}>
                        ADD PRODUCT
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle ={styleProductSuppPage.ScrollView}>
                
                {product.map((product) => (
                    <ProductSupp key={product.id_product} data ={product} />
                ))}
                <View style = {{height: 60}}>

                </View>
            </ScrollView>
            <View style = {styleProductSuppPage.viewPage}>

            </View>
        </View>
    )
}
const style = StyleSheet.create({
    View: {
        marginTop: statusBarHeight,
        backgroundColor: "#FFF",
        height: height,
        alignItems: 'center',
        
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
        width: 150,
        height: 35,
        borderWidth: 0,
       
        borderRadius: 17.5,
        
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
    },
    placeholderStyle: {
        fontSize: 20,
        marginLeft: 20,
        fontFamily: 'Montserrat SemiBold',
        color: '#000',
    },
    selectedTextStyle: {
        fontSize: 20,
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
const styleProductSuppPage = StyleSheet.create({
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
        elevation: 5,
        marginLeft: (width-330)/2
        
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
        marginBottom: 10,
        marginLeft: (width-380)/2
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
const styleDiscountSuppPage = StyleSheet.create({
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
        elevation: 5,
        marginLeft: (width-330)/2
        
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
        marginBottom: 10,
        marginLeft: (width-380)/2
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