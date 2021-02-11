import React from "react"
import { Text } from "react-native";
import {createAppContainer, createStackNavigator} from "react-navigation"
import Barcode from "../screens/home/Barcode";
import ChooseOption from "../screens/home/ChooseOption";
import Details from "../screens/home/Details";

import LoginScreen from '../screens/LoginScreen';
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
     source={require('../../assets/log.png')}
    />
  );
}
const AppNavigator = createStackNavigator({
  ChooseOption: {
    screen: ChooseOption,
    navigationOptions: {
      header: null
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions:  {
      title: '',
      headerLeft: null,
      headerStyle: {
      backgroundColor: '#fff',
      shadowColor: '#fff' ,
      backgroundColor: 'transparent',
    },  
  }
  },
  Barcode: {
    screen: Barcode
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: null
    }
  },
 

});

export default createAppContainer(AppNavigator);
