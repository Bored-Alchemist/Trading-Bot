/* global require */
/* global console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ToastAndroid,
  AsyncStorage
  
} from 'react-native';
import SignIn from './login/SignIn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CommonStyles from '../styles/CommonStyles';
import {
  responsiveWidth,
  responsiveHeight,
  marginHorizontal,
  spaceVertical,
  NAV_HEIGHT,
  STATUSBAR_HEIGHT,
  deviceHeight,
  scrollableTabHeight,
  bottomTxtHeight
} from '../styles/variables';
import api from '../utils/api';
import {Toast} from "native-base"
import {Font} from "expo"

const logoWidth = responsiveWidth(75.67);
const logoHeight = logoWidth * 0.695;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinLayout: {
        width: null,
        height: null,
      },
      signupLayout: {
        width: null,
        height: null,
      },
      logoContLayout: {
        width: null,
        height: null,
      },
      apiResponse : null
    };
  }

  render() {
    const logoContHeight = this.state.logoContLayout.height;
    const signinHeight = this.state.signinLayout.height;
    const signinBottomHeight = deviceHeight - (scrollableTabHeight + signinHeight + logoContHeight);


    return (
      <KeyboardAwareScrollView
      enableOnAndroid
      enableAutomaticScroll
      keyboardOpeningTime={0}
      extraHeight={Platform.select({ android: 200 })}
    >
      <View style={CommonStyles.container}>
        {/* logo start here */}
        <View
          style={styles.logo}
          onLayout={this.onLogoContLayout.bind(this)}
        >
          <Image
            source={require('../../img/imba/loginImage.png')}
            style={{width: logoWidth, height: logoHeight}}
          />
        </View>
        {/* logo end here */}
  

          {/* sign in form start here */}
          <ScrollView heading='SIGN IN'>
            <View onLayout={this.onSigninLayout.bind(this)}>
              <SignIn
                isLoading={false}
                onPressSignIn={this.handleSignInWithEmailAndPassword.bind(this)}
                onPressSignUp={() => this.tabView.goToPage(1)}
                navigation={this.props.navigation}
              />
            </View>
            <View style={[
              styles.bottomCont,
              signinBottomHeight > (bottomTxtHeight + spaceVertical.semiSmall)
                ? {height: signinBottomHeight, paddingBottom: spaceVertical.semiSmall}
                : {marginBottom: spaceVertical.semiSmall}
            ]}>
              
            </View>
          </ScrollView>
      </View>
      </KeyboardAwareScrollView>    );
  }

  /**
   * Get size of logo container
   */
  onLogoContLayout = (e) => {
    this.setState({
      logoContLayout: {
        width: e.nativeEvent.layout.width,
        height: e.nativeEvent.layout.height,
      }
    });
  }

  /**
   * Get size of sign in form
   */
  onSigninLayout = (e) => {
    this.setState({
      signinLayout: {
        width: e.nativeEvent.layout.width,
        height: e.nativeEvent.layout.height,
      }
    });
  }

  /**
   * Get size of sign up form
   */
  onSignupLayout = (e) => {
    this.setState({
      signupLayout: {
        width: e.nativeEvent.layout.width,
        height: e.nativeEvent.layout.height,
      }
    });
  }

 

  /**
   * Handle sign in with email and password
   *
   * @param {String} email
   * @param {String} password
   */
  handleSignInWithEmailAndPassword(obj) {

    api.post("/vendorlogin.php", obj)
    .then(res => {
      console.log(res.data,"this is api response"); 
      if(res.data.success) {
        this.props.navigation.navigate('ChooseOption')
        AsyncStorage.setItem("vendorID", JSON.stringify(res.data.id));
        AsyncStorage.setItem("authentication", JSON.stringify({isAuthenticated: true}));
      }else {
         ToastAndroid.show(res.data.msg, ToastAndroid.LONG)
       
        AsyncStorage.setItem("authentication", JSON.stringify({isAuthenticated: false}));

      }
    }
     )
   ;
  }

  /**
   * Handle sign up with email and password
   *
   * @param {String} email
   * @param {String} password
   */
  handleSignUpWithEmailAndPassword(email, password) {
    this.props.navigation.navigate('HomeScreen');
  }
}

const styles = StyleSheet.create({
  logo: {
    paddingTop: NAV_HEIGHT + STATUSBAR_HEIGHT,
    paddingBottom: responsiveHeight(10.64),
    marginHorizontal: marginHorizontal.large,
  },
  bottomCont: {
    justifyContent: 'flex-end',
  },
  bottomTxt: {
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
});

LoginScreen.propTypes = {
  navigation: PropTypes.any,
};
