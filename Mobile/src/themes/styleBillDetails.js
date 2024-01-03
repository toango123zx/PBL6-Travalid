import { StyleSheet, Dimensions, StatusBar } from "react-native";
const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

export const styleBillDetail = StyleSheet.create({
    View: {
        width: width,
        height: height,
        marginTop: statusBarHeight,
        alignItems: 'center',
        backgroundColor: '#FFF'
    }

    ,viewHeader: {
        width: 380, 
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
        position: 'absolute',
        top: 10,
        left: (width-380)/2
    }
        ,btnBack: {
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: '#FF852C',
            justifyContent: 'center', 
            alignItems: 'center',
            position: 'absolute',
            left: 0
        }
        ,viewTextOderDetail:{
            width: 140,
            height: 30,
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            elevation: 5
        }
        ,textOrderDetail: {
            color: '#000',
            fontFamily: 'Montserrat SemiBold',
            letterSpacing: 1,
            fontSize: 20,
            
        }
    
        
    ,viewGenaralInfo: {
        width: 380,
        height: 110,
        borderWidth: 0,
    }
        ,textIdBill: {
            fontFamily: 'Montserrat Regular',
            fontSize: 23,
            color: '#000'
        }
        ,viewQuantity: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10
        }
        ,textQuantity: {
            color: '#475156',
            fontFamily: 'Montserrat Regular',
            fontSize: 15,
        }
        ,textTime: {
            color: '#475156',
            fontFamily: 'Montserrat Regular',
            fontSize: 15,
        }
        ,textTotal: {
            fontFamily: 'Montserrat SemiBold',
            fontSize: 25,
            color: '#FF6B00',
            marginTop: 10,
            
        }

    ,viewStatus: {
        width: 380,
        height: 290,
        flexDirection: 'row'
        
    }
        ,textStatus1: {
            fontFamily: 'Montserrat Medium',
            color: '#000',
            fontSize: 16,
            position: 'absolute',
            left: 0,
            top: 10
        }
        ,statusLeft: {
            width: 25,
            height: 220,
            
            marginTop: 50,
            alignItems: 'center',
            marginLeft: 0,
            borderWidth: 0
        }
            ,view1: {
                width: 22,
                height: 22,
                borderWidth: 2,
                borderColor: 'rgba(250, 130, 50, 1)',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                
            }
            ,view2: {
                width: 10,
                height: 40,
                marginTop: 2,
                marginBottom: 2,
                backgroundColor: 'rgba(255, 231, 214, 1)'
            }
        ,statusRight: {
            width: 300,
            height: 230,
            borderWidth: 0,
            marginTop: 45,
            marginLeft: 30
        }  
            ,viewOrderPlaced: {
                width: 300,
                height: 35,
                
                flexDirection: 'row',
                alignItems: 'center'
                
            }
            ,textStatus: {
                position: 'absolute',
                left: 60,
                fontSize: 16,
                fontFamily: 'Montserrat Medium',
                color: '#000'
            }
            ,viewPendding: {
                width: 300,
                height: 35,
                
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center'
            }
            ,viewWaitting: {
                width: 300,
                height: 35,
                
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center'
            }
            ,viewDone: {
                width: 300,
                height: 35,
                
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center'
            }
    ,viewInfo: {
        width: width,
        height: 200,
        borderWidth: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
        ,viewSuppInfo: {
            width: width/2,
            height: 180,
            borderRightWidth: 0.5
        }
            ,textSuppInfo: {
                color: '#000',
                fontFamily: 'Montserrat SemiBold',
                fontSize: 16,
                textAlign: 'center',
                marginBottom: 5
            }
            ,textTitle: {
                color: '#000',
                fontFamily: 'Montserrat SemiBold',
                fontSize: 14,
                marginTop: 10,
                marginLeft: (width-380)/2
            }
            ,textInfo: {
                color: '#000',
                fontFamily: 'Montserrat Regular',
                fontSize: 14,
                marginTop: 5,
                marginLeft: (width-380)/2
            }
        ,viewUserInfo: {
            width: width/2,
            height: 180,
            borderLeftWidth: 0.5
        }
    ,viewVoucher: {
        width: 380,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
        ,viewLeft: {
            flexDirection: 'row',
            height: 40,
            alignItems: 'center'
        }
            ,textVoucher: {
                color: '#000',
                fontFamily: 'Montserrat Regular',
                fontSize: 16,
            }
            ,voucher: {
                color: '#FF6B00',
                fontFamily: 'Montserrat Medium',
                fontSize: 17,
            }
    
    ,viewProduct: {
        width: width,
        alignItems: 'center',
        marginTop: 5
    }
        
    
})