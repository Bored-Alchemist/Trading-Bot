import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  ViewPropTypes,
} from 'react-native';

import { deviceHeight } from '../styles/variables';

export default class PrimeModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={this.props.onRequestClose}
      >
        <StatusBar
          translucent={true}
          barStyle='dark-content'
          backgroundColor='transparent'
        />
        <View style={[this.props.containerStyle, styles.container]}>
          {this.props.body}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

PrimeModal.propTypes = {
  onRequestClose: PropTypes.any,
  modalVisible: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
};
