import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { colors } from '../styles/variables'

export default class Border extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[
          this.props.bottom && {borderBottomWidth: 1},
          this.props.right && {borderRightWidth: 1},
          this.props.left && {borderLeftWidth: 1},
          this.props.top && {borderTopWidth: 1},
          {
            width: this.props.width,
            height: this.props.height,
            alignSelf: this.props.alignSelf,
            borderColor: colors.lightGray,
          },
          this.props.borderStyle,
        ]}
      />
    );
  }
}
