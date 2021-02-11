import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import CommonStyles from '../styles/CommonStyles';
import {
  spaceVertical,
  colors,
  fontSize,
  fontFamily,
  inputHeight
} from '../styles/variables';

export default class SelectBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={this.props.containerStyle}
        onPress={this.props.onPressAction}>
        <View style={this.props.fieldStyle}>
          <Text style={this.props.labelStyle}>{this.props.label}</Text>
          {this.props.isRightIcon &&
            <Icon
              style={this.props.leftIconStyle}
              name="chevron-thin-down"
            />
          }
        </View>
      </TouchableOpacity>
    );
  }
}

SelectBox.propTypes = {
  label: PropTypes.string,
  isRightIcon: PropTypes.bool,
  onPressAction: PropTypes.any,

  // styles
  containerStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number
  ]),
  fieldStyle: ViewPropTypes.style,
  labelStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
  leftIconStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object]),
};

SelectBox.defaultProps = {
  isRightIcon: true,
  containerStyle: {
    height: inputHeight,
    marginTop: spaceVertical.normal,
  },
  fieldStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: inputHeight,
    borderColor: '#D9D5DC',
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
  },
  labelStyle: {
    color: colors.gray,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
  },
  leftIconStyle: {
    fontSize: fontSize.semiLarge,
    color: '#D9D5DC', 
  }
};
