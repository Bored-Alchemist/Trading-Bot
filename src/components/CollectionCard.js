/* global require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import Text from '../elements/Text';
import PrimeButton from '../elements/PrimeButton';

import {
  responsiveWidth,
  responsiveHeight,
  marginHorizontal,
  spaceVertical,
  deviceWidth,
  deviceHeight,
  colors,
  fontSize,
  fontFamily,
} from '../styles/variables';

export default class CollectionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      collectionInfo,
      infoContStyles,
      headerStyles,
      descStyles,
      onPressButton
    } = this.props;

    let btnHeight = 40;
    if (deviceWidth >= 768) {
      btnHeight = 40 * 1.3;
    }
    const btnSetting = {
      btnWidth: responsiveWidth(38.4), 
      btnHeight: btnHeight, 
      style: {
        alignSelf: 'flex-start'
      }
    };

    return (
      <Image
        source={collectionInfo.image}
        style={{
          width: deviceWidth,
          height: deviceHeight,
          justifyContent: 'flex-end'
        }}
      >
        
        <View style={[styles.infoCont, infoContStyles]}>
          <Text black extraSmall regular>
            Collection
          </Text>
          <Text style={[styles.header, headerStyles]}>
            {collectionInfo.header.toUpperCase()}
          </Text>
          <Text style={[styles.desc, descStyles]}>
            {collectionInfo.desc} items
          </Text>
          <PrimeButton
            navigation={this.props.navigation}
            setting={btnSetting}
            btnText='SEE MORE'
            onPressButton={onPressButton}
          />
        </View>
      </Image>
    );
  }
}

CollectionCard.propTypes = {
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  infoCont: {
    paddingLeft: marginHorizontal.normal,
    paddingBottom: responsiveHeight(19.94) 
  },
  header: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: fontSize.large,
  },
  desc: {
    marginTop: spaceVertical.small,
    marginBottom: spaceVertical.semiSmall,
    color: colors.gray,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
  }
});
