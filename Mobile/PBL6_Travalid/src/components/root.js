import React from 'react' ;

import {
  View,
  Text,StyleSheet,
  BlurView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import InfoPage from './DetailPage/InfoPage';
import DetailsPage from './DetailPage/DetailsPage';
import ProfilePage from './ProfilePage/ProfilePage';
import SplishPage from './SplishPage'
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import ProfileDetails from './ProfilePage/ProfileDetails';
import AttractionsPage from './AttractionsPage';
import HomePage from './HomePage';
import A from './Attraction';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscountPage from './DiscountPage/DiscountPage';
import BookingCartPage from './CartPage/BookingCartPage';
import PaymentPage from './CartPage/PaymentPage';
import EditProfile from './ProfilePage/EditProfile';
import {Provider} from 'react-redux'
import store from '../reducers/store';
import Icon from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styleTabBar.View} >
      <Svg height="75" width="100%" viewBox='0,0,411,70' >
        <Path
            d="M0 62.5948C0 48.0822 0 40.8259 2.30577 34.7816C5.34372 26.8181 11.4044 20.0305 18.9745 16.1137C24.7201 13.1409 31.7845 12.339 45.9133 10.7351C162.309 -2.47789 244.571 -2.69258 365.403 10.8159C379.567 12.3994 386.65 13.1911 392.406 16.1601C399.993 20.0734 406.063 26.86 409.109 34.8347C411.42 40.8852 411.42 48.1559 411.42 62.6973V593.2C411.42 609.558 411.42 617.737 408.748 624.189C405.184 632.791 398.35 639.626 389.747 643.189C383.296 645.861 375.116 645.861 358.758 645.861H52.6618C36.3036 645.861 28.1245 645.861 21.6727 643.189C13.0702 639.626 6.23566 632.791 2.67243 624.189C0 617.737 0 609.558 0 593.2V62.5948Z"
            fill="#000" // Màu của shadow
            opacity="1" // Độ trong suốt của shadow
          />
        <Path
            d="M0 62.5948C0 48.0822 0 40.8259 2.30577 34.7816C5.34372 26.8181 11.4044 20.0305 18.9745 16.1137C24.7201 13.1409 31.7845 12.339 45.9133 10.7351C162.309 -2.47789 244.571 -2.69258 365.403 10.8159C379.567 12.3994 386.65 13.1911 392.406 16.1601C399.993 20.0734 406.063 26.86 409.109 34.8347C411.42 40.8852 411.42 48.1559 411.42 62.6973V593.2C411.42 609.558 411.42 617.737 408.748 624.189C405.184 632.791 398.35 639.626 389.747 643.189C383.296 645.861 375.116 645.861 358.758 645.861H52.6618C36.3036 645.861 28.1245 645.861 21.6727 643.189C13.0702 639.626 6.23566 632.791 2.67243 624.189C0 617.737 0 609.558 0 593.2V62.5948Z" fill="#FFF"
          />
        </Svg>
        <View style={styleTabBar.view}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;
            
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            const colorStyle = isFocused ? color= 'black' :  color='white' ;
            const touchStyle = index === 0 ? styleTabBar.home : 
                                index === 1 ? styleTabBar.attraction : 
                                  index ==2 ? styleTabBar.cart : 
                                    index ==3 ? styleTabBar.discount : styleTabBar.profile ;
            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style = {touchStyle}
              >
                  {index === 0 ?  <ButtonComponent iconName={"home-outline"} text = {"Home"} colora = {isFocused ? '#FF852C' : '#6F757C'}/> : 
                    index ===1 ? <ButtonComponent iconName={"location-outline"} text = {"Attraction"} colora = {isFocused ? '#FF852C' : '#6F757C'}/> :
                      index ===2? <ButtonCartComponent/> :
                        index ===3? <ButtonComponent iconName={"ticket-outline"} text = {"Discounts"} colora = {isFocused ? '#FF852C' : '#6F757C'}/> : 
                          <ButtonComponent iconName={"person-outline"} text = {"Profile"} colora = {isFocused ? '#FF852C' : '#6F757C'}/>  }
                
              </TouchableOpacity>
            );
          })}
        </View>  
      
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator 
    tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Attractions" component={AttractionsPage} />
      <Tab.Screen name="BookingCartPage" component={BookingCartPage}/>
      <Tab.Screen name="DiscountPage" component={DiscountPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export default RootComponent = function(){
    return(
      <Provider store ={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SplishPage">
            <Stack.Screen name='Home1' component={MyTabs}/>
            <Stack.Screen name="SignInPage" component={SignInPage}/>
            <Stack.Screen name="SignUpPage" component={SignUpPage}/>
            <Stack.Screen name="SplishPage" component={SplishPage}/>
            <Stack.Screen name="DetailsPage" component={DetailsPage } />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails}/>
            <Stack.Screen name="BookingCartPage" component={BookingCartPage} />
            <Stack.Screen name="PaymentPage" component={PaymentPage} />
            <Stack.Screen name="EditProfile" component={EditProfile} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      
      
    );
  }

const styleTabBar = StyleSheet.create({
  View: {
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: 0,
    width: width, 
    elevation: 2,
    
  },
  view: {
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: 0, 
    width: 390, 
    marginLeft: (width-390)/2, 
    justifyContent: 'space-between',
    
    
  },
  home: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 50,
    borderWidth: 0,
    marginTop: 20
  },
  attraction: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 50,
    borderWidth: 0,
    marginTop: 15
  },
  cart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 72,
    borderWidth:0 ,
    
    top: 0
  },
  discount: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 50,
    borderWidth: 0,
    marginTop: 15
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 50,
    borderWidth: 0,
    marginTop: 20
    
  }

})

const ButtonComponent = ({iconName,text,colora}) => {
  return(
    <View>
      <View style = {{width: 70, height: 30, borderWidth: 0, alignItems: 'center'}}>  
        <Icon name={iconName} color={colora} size={27}/>
      </View>
      <View style = {{width: 70, height: 20, borderWidth: 0, alignItems: 'center'}}>
        <Text style = {{color: '#7D848D', fontSize: 13.16, fontFamily: 'Montserrat Medium'}}>{text}</Text>
      </View>
      
    </View>
  )
}
const ButtonCartComponent = () => {
  return(
    <View style = {{width: 62, height: 62, borderRadius: 31, borderWidth: 0, backgroundColor: '#FF6B00', alignItems: 'center', justifyContent: 'center'}}>
      <Icon name = 'cart-outline' color = '#FFF' size = {30}/>
    </View>
  )
}
  