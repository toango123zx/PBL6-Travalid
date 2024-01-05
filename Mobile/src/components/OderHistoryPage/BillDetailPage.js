import React, { useEffect, useState } from "react";
import { 
    View,
    Dimensions,
    StatusBar, 
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native'
const { width, height } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import authApi from "../../API/auth";
import { useNavigation } from "@react-navigation/native";
import { styleBillDetail } from "../../themes/styleBillDetails";
import ItemProduct from "./ItemProduct";
import Icon1 from 'react-native-vector-icons/FontAwesome5'
export default BillDetailPage = ({route}) => {
    const {billData} = route.params;
    const [billDetail, setBillDetail] = useState([])
    const [product, setProduct] = useState([])
    const [user, setUser] = useState([])
    const [supplier, setSupplier] = useState([])
    const navigation = useNavigation()
    const time = new Date (billDetail.time)
    
    const formattedDate = `${time.getFullYear()}/${String(time.getMonth() + 1).padStart(2, '0')}/${String(time.getDate()).padStart(2, '0')}, ${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`;
    useEffect(()=>{
        const getDetailBill = async ()=> {
            try {
                
                const token = "bearer " + await AsyncStorage.getItem('userToken')
                //console.log(token)
                const res = await authApi.getDetailBill(billData.id_bill,{
                    "token" : token,
                })
                // console.log(JSON.stringify(res.data.data,null, 3))
                setBillDetail(res.data.data);
                setUser(res.data.data.user);
                setSupplier(res.data.data.supplier);
                setProduct(res.data.data.schedule_product)
                //setProduct(res.data.data.schedule_product)
                console.log(JSON.stringify(res.data.data, null, 2))
            } catch (error) {
                console.log(error)
            }
        }

        getDetailBill();
        console.log(JSON.stringify(billDetail, null,2))
        
       
        
        
    },[])
    return(
        <View style = {styleBillDetail.View}>
            <StatusBar translucent backgroundColor="transparent" />
           
            <ScrollView contentContainerStyle = {{alignItems: 'center', marginTop: 70, width: width}}>
            <View style = {styleBillDetail.viewGenaralInfo}>
                <Text style = {styleBillDetail.textIdBill}>#{billDetail.id_bill}</Text>
                <View style = {styleBillDetail.viewQuantity}>
                    <Text style = {styleBillDetail.textQuantity}>
                        {billDetail.quantity} people - </Text>
                    <Text style = {styleBillDetail.textTime}>
                         Order Placed in {formattedDate}
                    </Text>
                </View>
                <Text style = {styleBillDetail.textTotal}>{Math.round(billDetail.total)} VND</Text>
                
            </View>
            <View style = {{width: width, height: 3, backgroundColor: 'rgba(128, 128, 128, 0.3)'}}></View>
            <View style = {styleBillDetail.viewStatus}>
                <Text style = {styleBillDetail.textStatus1}>Status</Text>
                <View style = {styleBillDetail.statusLeft}>
                    <View style = {{...styleBillDetail.view1, backgroundColor: 'rgba(250, 130, 50, 1)'}}>
                        <Icon1 name = 'check' color = '#FFF' size = {12} />
                    </View>
                    <View style = {{...styleBillDetail.view2, backgroundColor: 'rgba(250, 130, 50, 1)'}}>

                    </View>
                    <View style = {{...styleBillDetail.view1, backgroundColor: billDetail.status === 'pending'? 'rgba(250, 130, 50, 1)' :
                    billDetail.status === 'paided'? 'rgba(250, 130, 50, 1)' : 
                    billDetail.status === 'done'? 'rgba(250, 130, 50, 1)' : '#F00'
                    ,borderColor:
                    billDetail.status === 'pending'? 'rgba(250, 130, 50, 1)' :
                    billDetail.status === 'paided'? 'rgba(250, 130, 50, 1)' : 
                    billDetail.status === 'done'? 'rgba(250, 130, 50, 1)' : '#F00'}}>

                        {billDetail.status === 'pending'? 
                        <Icon1 name = 'check' color = '#FFF' size = {12} /> :
                        billDetail.status === 'paided'? 
                        <Icon1 name = 'check' color = '#FFF' size = {12} /> : 
                        billDetail.status === 'done'? 
                        <Icon1 name = 'check' color = '#FFF' size = {12} /> : null}
                        
                    </View>
                    <View style = {{...styleBillDetail.view2, backgroundColor: 
                    billDetail.status === 'paided'? 'rgba(250, 130, 50, 1)' : 
                    billDetail.status === 'done'? 'rgba(250, 130, 50, 1)' : 'rgba(255, 231, 214, 1)'
                    }}>

                    </View>
                    <View style = {{...styleBillDetail.view1, backgroundColor: 
                    billDetail.status === 'paided'? 'rgba(250, 130, 50, 1)' : 
                    billDetail.status === 'done'? 'rgba(250, 130, 50, 1)' : '#FFF'
                    }}>
                        <Icon1 name = 'check' color = '#FFF' size = {12} />
                    </View>
                    <View style = {{...styleBillDetail.view2, backgroundColor:  
                    billDetail.status === 'done'? 'rgba(250, 130, 50, 1)' : 'rgba(255, 231, 214, 1)'
                    }}>

                    </View>
                    <View style = {{...styleBillDetail.view1, backgroundColor: 
                    billDetail.status === 'done'? 'rgba(250, 130, 50, 1)' : '#FFF'
                    }}>
                        <Icon1 name = 'check' color = '#FFF' size = {12} />
                    </View>
                </View>

                <View style = {styleBillDetail.statusRight}>
                    <View style = {styleBillDetail.viewOrderPlaced}>
                        <Icon name = 'cart-outline' 
                        color = '#FA8232' size = {34}/>
                        <Text 
                        style = {{
                            ...styleBillDetail.textStatus,

                        }}
                        >Order Placed</Text>
                    </View>
                    <View style = {styleBillDetail.viewPendding}>
                        
                        <Icon name = 'cart-outline' 
                        color = {billDetail.status === 'pending'? '#FA8232' :
                            billDetail.status === 'paided'? '#FA8232' : 
                            billDetail.status === 'done'? '#FA8232' : '#FFE7D6'} size = {34}/>
                        <Text 
                        style = {{
                            ...styleBillDetail.textStatus, color:
                            billDetail.status === 'pending'? '#000' :
                            billDetail.status === 'paided'? '#000' : 
                            billDetail.status === 'done'? '#000' : 'rgba(25, 28, 31, 1)'
                        }}
                        >Pending</Text>
                    </View>
                    <View style = {styleBillDetail.viewWaitting}>
                        <Icon name = 'cart-outline' 
                        color = {
                            billDetail.status === 'paided'? '#FA8232' : 
                            billDetail.status === 'done'? '#FA8232' : '#FFE7D6'} size = {34}/>
                        <Text 
                        style = {{
                            ...styleBillDetail.textStatus, color:
                            
                            billDetail.status === 'paided'? '#000' : 
                            billDetail.status === 'done'? '#000' : 'rgba(0,0,0,0.2)'
                        }}
                        >Waitting for trip</Text>
                    </View>
                    <View style = {styleBillDetail.viewDone}>
                        <Icon name = 'cart-outline' 
                        color = {
                            billDetail.status === 'done'? '#FA8232' : '#FFE7D6'} size = {34}/>
                        <Text 
                        style = {{
                            ...styleBillDetail.textStatus, color:
                            
                            billDetail.status === 'done'? '#000' : 'rgba(0,0,0,0.2)'
                        }}
                        >Done</Text>
                    </View>
                </View>
            </View>
            
            <View style = {{width: width, height: 3, backgroundColor: 'rgba(128, 128, 128, 0.3)'}}></View>
            <View style = {styleBillDetail.viewInfo}>
                <View style = {styleBillDetail.viewSuppInfo}>
                    <Text style = {styleBillDetail.textSuppInfo}>Supplier Info</Text>
                    <Text style = {styleBillDetail.textTitle}>Name</Text>
                    <Text style = {styleBillDetail.textInfo}>{supplier.name}</Text>
                    <Text style = {styleBillDetail.textTitle}>Email</Text>
                    <Text style = {styleBillDetail.textInfo}>{supplier.email}</Text>
                    <Text style = {styleBillDetail.textTitle}>Phone Number</Text>
                    <Text style = {styleBillDetail.textInfo}>{supplier.phone_number}</Text>
                </View>
                <View style = {styleBillDetail.viewUserInfo}>
                    <Text style = {styleBillDetail.textSuppInfo}>User Info</Text>
                    
                    <Text style = {styleBillDetail.textTitle}>Name</Text>
                    <Text style = {styleBillDetail.textInfo}>{user.name}</Text>
                    <Text style = {styleBillDetail.textTitle}>Email</Text>
                    <Text style = {styleBillDetail.textInfo}>{user.email}</Text>
                    <Text style = {styleBillDetail.textTitle}>Phone Number</Text>
                    <Text style = {styleBillDetail.textInfo}>{user.phone_number}</Text>
                </View>
            </View>
            <View style = {{width: width, height: 3, backgroundColor: 'rgba(128, 128, 128, 0.3)'}}></View>
            <View style = {styleBillDetail.viewVoucher}>
                <View style = {styleBillDetail.viewLeft}>
                    <Icon name = 'ticket-outline' color = '#FF6B00' size = {20}/>
                    <Text style = { styleBillDetail.textVoucher}> Voucher </Text>
                </View>
                <View >
                    <Text style = {styleBillDetail.voucher}>{Math.round(billDetail.discount_value)} VND</Text>
                </View>
            </View>
            <View style = {{width: width, height: 3, backgroundColor: 'rgba(128, 128, 128, 0.3)'}}></View>
            <View style = {styleBillDetail.viewProduct}>
                {product.map((product) => (
                    <ItemProduct key={product.id_product} data={product} />
                ))}
            </View>
            <View style = {{height: 70}}></View>
            </ScrollView>
            <View style = {styleBillDetail.viewHeader}>
                <TouchableOpacity style = {styleBillDetail.btnBack} onPress={()=>{navigation.goBack()}}>
                    <Icon name = 'chevron-back' color = '#FFF' size = {25}/>
                </TouchableOpacity>
                <View style = {styleBillDetail.viewTextOderDetail}>
                    <Text style = {styleBillDetail.textOrderDetail}>Order detail</Text>
                </View>
                
            </View>
        </View>
    )
}
