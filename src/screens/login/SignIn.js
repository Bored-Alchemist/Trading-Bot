/* global require */
import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator, BackHandler, Modal, Text as Tet, TouchableHighlight } from "react-native";
import { Form } from "native-base";
import PropTypes from "prop-types";

import PrimeButton from "../../elements/PrimeButton";
import TextInput from "../../elements/TextInput";
import Text from "../../elements/Text";

import {
  btnWidth,
  btnHeight,
  inputHeight,
  marginHorizontal,
  spaceVertical,
  responsiveHeight,
  colors,
} from "../../styles/variables";

function SignIn(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [formSubmitted, setformSubmitted] = useState(true);

  useEffect(() => {
    setformSubmitted(false);
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      backHandler.remove();
    };
  }, [props.navigation]);

  function handleBackButtonClick() {
    console.log('clicked')
    setModalVisible(true);
    return true;
  }

 

  const googleBtnSetting = {
    btnWidth: btnWidth.large,
    btnHeight: btnHeight,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    style: {},
  };

  /**
   * Handle when click sign in button
   */

  const { email, password } = form;

  const handleOnPressSignIn = (e) => {
    // console.log(props.navigation, "this are navigation props");
    e.preventDefault();
    setformSubmitted(true);
    if (!form.email || !form.password) return;

    props.onPressSignIn({ email, Password: password });
  };
  return (
    <Fragment>
      {props.isLoading ? (
        <View style={[styles.container, styles.loading]}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.container}>
          <Form style={styles.form}>
            <TextInput
              inputHeight={inputHeight}
              onChangeText={(email) => setform({ ...form, email })}
              label="Username"
            />
            {!form.email && formSubmitted ? (
              <Text red>This field is required.</Text>
            ) : null}

            <TextInput
              inputHeight={inputHeight}
              onChangeText={(password) => setform({ ...form, password })}
              label="Password"
              secureTextEntry={true}
           />
            {!form.password && formSubmitted ? (
              <Text red>This field is required.</Text>
            ) : null}
          </Form>
          <View style={styles.btnCont}>
            <PrimeButton
              navigation={props.navigation}
              setting={googleBtnSetting}
              btnText="Login"
              onPressButton={handleOnPressSignIn}
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
            <Tet style={styles.modalText}>Are you sure you want to close this application?</Tet>

            <View style={{justifyContent:'center',alignContent:'center',alignItems:'center', display:'flex',flexDirection:'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#4caf50" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Tet style={styles.textStyle}>No</Tet>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#f44336" }}
              onPress={() => {
                BackHandler.exitApp();
                setModalVisible(false);
              }}
            >
              <Tet style={styles.textStyle}>Yes</Tet>
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
    paddingBottom: responsiveHeight(4),
  },
  btnCont: {
    alignItems: "center",
    paddingBottom: spaceVertical.semiSmall,
  },
});

SignIn.propTypes = {
  navigation: PropTypes.any,
  onPressSignIn: PropTypes.any,
  onPressSignUp: PropTypes.any,
  onPressForgotPass: PropTypes.any,
  onPressFacebook: PropTypes.any,
  onPressGoogle: PropTypes.any,
  isLoading: PropTypes.bool,
};

export default SignIn;
