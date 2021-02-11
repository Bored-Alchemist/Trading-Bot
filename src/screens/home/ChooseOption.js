/* global require */
import React, { Fragment, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ToastAndroid,
  Modal,
  BackHandler,
  TouchableHighlight
} from 'react-native';
import { Form } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';


import PrimeButton from '../../elements/PrimeButton';
import TextInput from '../../elements/TextInput';
import Text from '../../elements/Text';

import {
  btnWidth,
  btnHeight,
  inputHeight,
  marginHorizontal,
  spaceVertical,
  responsiveHeight,
  colors,
} from '../../styles/variables';
// import {getVendorID} from "../../utils/helpers"
import api from '../../utils/api';
import Common from './Common';


function ChooseOption(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState({
    OrderID: ""
    });
  const [formSubmitted, setformSubmitted] = useState(false)
  const [anotherPage, setAnotherPage] = useState(false)

  function handleBackButtonClick() {
    console.log(props.navigation.isFocused())
    setModalVisible(true);
    return true;
    }
  

  useEffect(() => {
    setformSubmitted(false);
    async function checkAuth() {
      let auth = await AsyncStorage.getItem("authentication");
      if(!auth) {
        props.navigation.navigate("LoginScreen")
      }
    }
    checkAuth();
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      backHandler.remove();
    };
  
  }, [])

        const googleBtnSetting = {
          btnWidth: btnWidth.large,
          btnHeight: btnHeight,
          backgroundColor: colors.primary,
          borderColor: colors.primary,
          style: {
          }
        };
    
          /**
       * Handle when click sign in button
       */
      const handleOnPress = async () => {
        setformSubmitted(true);
        if(!state.OrderID) {return}
        let vendorID = await AsyncStorage.getItem("vendorID")
        console.log(vendorID, "this is vendorID");
        const dat = JSON.stringify({v_id: JSON.parse(vendorID), order_id: state.OrderID})
        api.post('/getorderdetail.php', dat)
        .then(res => {
          console.log(res.data)
          if(res.data.success) {
            setState({OrderID: ""})
            setformSubmitted(false)
            setAnotherPage(true)
            
            props.navigation.navigate("Details", {orderDetail: res.data.data});
            
          }else {
            ToastAndroid.show(res.data.message, ToastAndroid.LONG)
          }
        })
    
      }

      const openBarcode = () => {
          console.log(props, "this are props");
          props.navigation.navigate("Barcode")
      }
      return (
        <Fragment>
    { props.isLoading ? ( <View style={[styles.container, styles.loading]}>
            <ActivityIndicator />
          </View>) : (
     <View style={styles.container}>
       <Common navigation={props.navigation} />
     <Form style={styles.form}>
       <TextInput
         inputHeight={inputHeight}
         onChangeText={(orderID) => setState({OrderID: orderID})}
         value={state.OrderID}
         label='Enter ID'
       />
       {!state.OrderID && formSubmitted ? <Text red>This field is required.</Text> : (null) }
       
   
    
     </Form>
     <View style={styles.btnCont}>
        <PrimeButton
         navigation={props.navigation}
         setting={googleBtnSetting}
         btnText='Get Details'
         onPressButton={handleOnPress}
       />
       <Text style={styles.orText}> OR </Text>
        <PrimeButton
         navigation={props.navigation}
         setting={googleBtnSetting}
         btnText='Scan Code'
         onPressButton={openBarcode}
       />
     </View>
     
    </View>
    )}
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to close this application?</Text>

            <View style={{justifyContent:'center',alignContent:'center',alignItems:'center', display:'flex',flexDirection:'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#4caf50" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>No</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#f44336" }}
              onPress={() => {
                BackHandler.exitApp();
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
        </Fragment>
       
      );
}


const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    flex:1,
    margin:10
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
    container: {
      marginHorizontal: marginHorizontal.small,
    },
    form: {
      // paddingTop: spaceVertical.small,
      paddingBottom: responsiveHeight(4)
    },
    btnCont: {
      alignItems: 'center',
      paddingBottom: spaceVertical.semiSmall,
    },
    orText : {
        color: "#BBBBBB",
        fontSize: 30,
        paddingVertical: spaceVertical.normal
    }
  });
  

export default ChooseOption
