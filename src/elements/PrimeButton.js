import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import {
  colors,
  fontSize,
  fontFamily,
  borderRadius,
} from '../styles/variables';

export default class PrimeButton extends Component {
  render = () => {
    const {
      setting: {
        btnWidth = 0,
        btnHeight = 0,
        backgroundColor = colors.black,
        borderColor = colors.black,
        color = colors.white,
        style = {}
      },
      onPressButton,
      btnText,
      leftIcon,
      leftIconStyles,
      rightIcon,
      rightIconStyles,
      underlayColor,
    } = this.props;

    // Define button style
    const styles = StyleSheet.create({
      button: {
        backgroundColor: backgroundColor,
        borderRadius: borderRadius.normal,
        borderWidth: 2,
        borderColor: borderColor,
      },
      innerCont: {
        alignItems: 'center',
        justifyContent: 'center',
        width: btnWidth,
        height: btnHeight,
      },
      text: {
        color: color,
        fontSize: fontSize.normal,
        fontFamily: fontFamily.medium,
      },
      leftIcon: {
        position: 'absolute',
        left: 15,
      },
      rightIcon: {
        position: 'absolute',
        right: 15,
      }
    });

    return (
      <TouchableHighlight
        underlayColor={underlayColor}
        style={[styles.button, style]}
        onPress={onPressButton}
      >
        <View style={styles.innerCont}>
          {leftIcon != null &&
            <Icon
              name={leftIcon}
              style={[styles.leftIcon, leftIconStyles]}
            />
          }
          <Text style={styles.text}>{btnText}</Text>
          {rightIcon != null &&
            <Icon
              name={rightIcon}
              style={[styles.rightIcon, rightIconStyles]}
            />
          }
        </View>
      </TouchableHighlight>
    );
  }
}

PrimeButton.propTypes = {
  setting: PropTypes.any,
  onPressButton: PropTypes.any,
  btnText: PropTypes.string,
  leftIcon: PropTypes.any,
  leftIconStyles: PropTypes.any,
  rightIcon: PropTypes.any,
  rightIconStyles: PropTypes.any,
  underlayColor: PropTypes.any,
};
