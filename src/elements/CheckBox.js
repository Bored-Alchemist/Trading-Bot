import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {
  colors,
  fontFamily,
  fontSize,
} from '../styles/variables';
import {
  checkboxIc,
} from '../styles/icon-variables';
const CB_ENABLED_IMAGE = require('../../img/icons/ic_checked.png');
const CB_DISABLED_IMAGE = require('../../img/icons/ic_unchecked.png');

export default class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      internalChecked: false
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    if (this.props.onChange &&  typeof this.props.checked === 'boolean') {
      this.props.onChange(this.props.checked);
    } else {
      let internalChecked = this.state.internalChecked;

      if(this.props.onChange){
        this.props.onChange(internalChecked);
      }
      this.setState({
        internalChecked: !internalChecked
      });
    }
  }

  render() {
    let container = (
      <View style={this.props.containerStyle || styles.checkboxField}>
        <Image
          style={this.props.checkboxStyle || styles.checkboxImg}
          source={source}
        />
        <View style={styles.labelContainer}>
          <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
        </View>
      </View>
    );

    let source;

    if(typeof this.props.checked === 'boolean') {
      source = this.props.checked ? this.props.checkedImage : this.props.uncheckedImage;
    } else {
      source = this.state.internalChecked ? this.props.checkedImage : this.props.uncheckedImage;
    }


    if (this.props.labelBefore) {
      container = (
        <View style={this.props.containerStyle || styles.checkboxField}>
          <View style={styles.labelContainer}>
            <Text
              numberOfLines={this.props.labelLines}
              style={[styles.label, this.props.labelStyle]}
            >
              {this.props.label}
            </Text>
          </View>
          <Image
            style={[styles.checkboxImg, this.props.checkboxStyle]}
            source={source}
          />
        </View>
      );
    } else {
      container = (
        <View style={[styles.checkboxField, this.props.containerStyle]}>
          <Image
            style={[styles.checkboxImg, this.props.checkboxStyle]}
            source={source}
          />
          <View style={styles.labelContainer}>
            <Text
              numberOfLines={this.props.labelLines}
              style={[styles.label, this.props.labelStyle]}
            >
              {this.props.label}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <TouchableHighlight
        onPress={this.onChange}
        underlayColor={this.props.underlayColor}
      >
        {container}
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  checkboxField: {
    flexDirection: 'row',
  },
  checkboxImg: {
    width: checkboxIc.width,
    height: checkboxIc.height, 
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  label: {
    color: 'rgb(174,174,174)',
    fontSize: fontSize.small,
    fontFamily: fontFamily.regular,
  }
});

CheckBox.propTypes = {
  label: PropTypes.string,
  labelBefore: PropTypes.bool,
  labelStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
  labelLines: PropTypes.number,
  checkboxStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
  containerStyle: PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number]),
  checked: PropTypes.bool,
  checkedImage: PropTypes.number,
  uncheckedImage: PropTypes.number,
  underlayColor: PropTypes.string,
  onChange: PropTypes.any
};

CheckBox.defaultProps = {
  label: 'Label',
  labelLines: 1,
  labelBefore: false,
  checked: null,
  checkedImage: CB_ENABLED_IMAGE,
  uncheckedImage: CB_DISABLED_IMAGE,
  underlayColor: 'white'
};
