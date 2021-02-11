import React from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { Dimensions, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import AppWithNavigationState from './navigators/AppNavigator';
import { AppLoading } from 'expo';

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import { Root } from 'native-base';
 


/**
 * REM parameter is optional, default is 16
 * ZERO -> 319 : rem = 14
 * 320 -> 480  : rem = 16
 * 481 -> 720  : rem = 18
 * 720 -> UP   : rem = 20
 */
const dWidth = Dimensions.get('window').width;

let cRem;
if (dWidth < 320) {
  cRem = 14;
} else if (dWidth <= 480) {
  cRem = 16;
} else if (dWidth <= 720) {
  cRem = 18;
} else {
  cRem = 20;
}

NativeTachyons.build({
  rem: cRem,
  colors: {
    palette: {
      green: "#00FF00",
    }
  },
  // fonts: {
  //   regular: 'SanRegular',
  //   medium: 'SanMedium',
  //   semi: 'SanSemibold',
  //   bold: 'SanBold',
  // }
}, StyleSheet);



export default function() {


  
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

    if(!fontsLoaded) {
      return <AppLoading />
    } else {
      return (
        // <Provider >
        <SafeAreaView style={{flex: 1}}>
          <Root>
            <AppWithNavigationState />
           </Root>
        </SafeAreaView>
          
        // </Provider>
      )
    }
  
}
