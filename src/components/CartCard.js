/* global require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ViewPropTypes,
} from 'react-native';

import Text from '../elements/Text';
import {
  responsiveWidth,
  responsiveHeight,
  marginHorizontal,
  spaceVertical,
  borderRadius,
} from '../styles/variables';
import {
  closeIc,
  arrDownIc
} from '../styles/icon-variables';

export default class CartCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      cartProInfo,
      cardStyles,
      imgStyles,
      imgWidth,
      imgHeight,
      quantity,
      onPressCloseIcon,
      onSelectQuantity,
    } = this.props;

    return (
      <View style={[styles.card, cardStyles]}>
        <Image
          source={cartProInfo.image}
          style={[
            {width: imgWidth, height: imgHeight, borderRadius: borderRadius.normal},
            imgStyles,
          ]}
        />
        <View style={styles.centerItem}>
          <Text black normal mediumBold numberOfLines={2}>
            {cartProInfo.name}
          </Text>
          <Text black normal bold style={{marginTop: 11}}>
            ${cartProInfo.price}
          </Text>
        </View>
        <View style={styles.rightItem}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPressCloseIcon}
          >
            <Image
              source={require('../../img/icons/ic_close.png')}
              style={{width: closeIc.width, height: closeIc.height}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onSelectQuantity}
          >
            <View style={styles.quantity}>
              <Text gray normal mediumBold>{quantity}</Text>
              <Image
                source={require('../../img/icons/ic_down.png')}
                style={styles.arrDownIc}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerItem: {
    flex: 1,
    marginHorizontal: marginHorizontal.small,
  },
  rightItem: {
    alignItems: 'flex-end',
    paddingLeft: marginHorizontal.small, 
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: responsiveHeight(4.21),
  },
  arrDownIc: {
    width: arrDownIc.width,
    height: arrDownIc.height,
    marginLeft: marginHorizontal.small/4,
    marginBottom: spaceVertical.small/4
  }
});

CartCard.propTypes = {
  cartProInfo: PropTypes.object,
  quantity: PropTypes.number,
  onPressCloseIcon: PropTypes.any,
  onSelectQuantity: PropTypes.any,
  imgWidth: PropTypes.number.isRequired,
  imgHeight: PropTypes.number.isRequired,

  // Styles
  cardStyles: ViewPropTypes.style,
  imgStyles: ViewPropTypes.style,
};
