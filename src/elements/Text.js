import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

import {
  colors,
  fontSize,
  fontFamily,
} from '../styles/variables'

export default class TextElement extends Component {

  constructor(props) {
    super(props);
  }

  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <Text
        ref={component => this._root = component} {...this.props}
        style={[
          this.props.large && { fontSize: fontSize.large },
          this.props.semiLarge && { fontSize: fontSize.semiLarge },
          this.props.medium && { fontSize: fontSize.medium },
          this.props.normal && { fontSize: fontSize.normal },
          this.props.small && { fontSize: fontSize.small },
          this.props.extraSmall && { fontSize: fontSize.extraSmall },

          this.props.regular && { fontFamily: fontFamily.regular },
          this.props.mediumBold && { fontFamily: fontFamily.medium },
          this.props.semiBold && { fontFamily: fontFamily.semiBold },
          this.props.bold && { fontFamily: fontFamily.bold },

          this.props.white && { color: colors.white },
          this.props.black && { color: colors.black },
          this.props.darkGray && { color: colors.darkGray },
          this.props.gray && { color: colors.gray },
          this.props.lightGray && { color: colors.lightGray },
          this.props.green && { color: colors.green },
          this.props.red && { color: colors.red },
          this.props.irisBlue && { color: colors.irisBlue },

          this.props.style && this.props.style,

          { backgroundColor: 'transparent' },
        ]}
      >
        {this.props.children}
      </Text> 
    );
  }
}
