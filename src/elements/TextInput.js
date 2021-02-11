import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { Item, Input, Icon } from 'native-base';

import {
  responsiveWidth,
  spaceVertical,
  colors,
  fontSize,
  fontFamily,
} from '../styles/variables';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Item
        error={this.props.error}
        style={[
          styles.item,
          this.props.itemStyles,
          {height: this.props.inputHeight}
        ]}
      >
        {this.props.leftIcon != null &&
          <Image
            source={this.props.leftIcon}
            style={[this.props.leftIconStyles,styles.leftIcon]}
          />
        }
        <Input
          textAlignVertical={this.props.textAlignVertical}
          placeholder={this.props.label}
          placeholderTextColor={colors.gray}
          multiline={this.props.multiline}
          numberOfLines={this.props.numberOfLines}
          style={StyleSheet.flatten([
            styles.input,
            this.props.inputStyles,
            {height: this.props.inputHeight}
          ])}
          onChangeText={this.props.onChangeText}
          secureTextEntry={this.props.secureTextEntry}
          value={this.props.value}
        />
      </Item>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    marginTop: spaceVertical.normal,
    marginLeft: 0,
  },
  input: {
    paddingLeft: 20,
    backgroundColor: '#ebebeb',
    borderRadius: 5,
    color: colors.gray,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
  },
  leftIcon: {
    marginRight: responsiveWidth(3.47),
  },
});

TextInput.propTypes = {
  itemStyles: PropTypes.object,
  leftIcon: PropTypes.any,
  label: PropTypes.string,
  inputStyles: PropTypes.object,
  onChangeText: PropTypes.any,
  error: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  textAlignVertical: PropTypes.any,
  multiline: PropTypes.any,
  numberOfLines: PropTypes.any,

  leftIconStyles: ViewPropTypes.style,
};

TextInput.defaultProps = {
};
