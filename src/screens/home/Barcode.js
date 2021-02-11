import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, BackHandler, ToastAndroid} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../utils/api';


function Barcode(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      const backAction = () => {
        props.navigation.push('ChooseOption', {goBack: true});
        return true
      }
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
    }, []);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    const handleBarcode = async ( type, data ) => {
      setScanned(true);
      let vendorID = await AsyncStorage.getItem("vendorID")
      const barcode_data = JSON.stringify(type);
      api.post('/getorderdetail.php', {v_id: JSON.parse(vendorID), order_id: JSON.parse(barcode_data).data})
      .then(res => {
        console.log(data, "THIS IS RESPONSE");
        if(res.data.success) {
          props.navigation.navigate("Details", {orderDetail: res.data.data});
        }else {
          props.navigation.navigate("ChooseOption");
          ToastAndroid.show(res.data.message, ToastAndroid.LONG);
        }
      })   
    };

    const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 0.5,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 7
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 0.5,
    backgroundColor: opacity
  },
});
  
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <Camera style={{ flex: 1 }} type={type} onBarCodeScanned={handleBarcode} barCodeScannerSettings={{
    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
  }}>
               <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
        </Camera>
  
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
    );



}

export default Barcode
