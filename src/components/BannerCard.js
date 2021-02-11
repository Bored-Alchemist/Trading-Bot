import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';

import {
  colors,
  fontSize,
  fontFamily,
} from '../styles/variables';

export default class BannerCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {
      categoryInfo,
      center,
      left,
      right,
      onPressItem,
      cardStyle,
      imgStyles,
      imgWidth,
      imgHeight,
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.card,
          cardStyle, {width: imgWidth},
          center && {alignItems: 'center'}
        ]}
        onPress={onPressItem}
      >
        <Image
          source={categoryInfo.image}
          style={[
            imgStyles,
            styles.image,
            {width: imgWidth, height: imgHeight}
          ]}
        />
        {left &&
          <View style={[styles.textCont, {left: 25}]}>
            <Text numberOfLines={1} style={styles.header}>
              {categoryInfo.name.toUpperCase()}
            </Text>
            <Text style={styles.count}>
              {categoryInfo.count + ' items'}
            </Text>
          </View>
        }
        {right &&
          <View style={[styles.textCont, {right: 25}]}>
            <Text numberOfLines={1} style={styles.header}>
              {categoryInfo.name.toUpperCase()}
            </Text>
            <Text style={styles.count}>
              {categoryInfo.count + ' items'}
            </Text>
          </View>
        }
        {center &&
          <View style={styles.textCont}>
            <Text numberOfLines={1} style={styles.header}>
              {categoryInfo.name.toUpperCase()}
            </Text>
            <Text style={styles.count}>
              {categoryInfo.count + ' items'}
            </Text>
          </View>
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 4,
  },
  textCont: {
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  header: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.bold,
    textAlign: 'center'
  },
  count: {
    marginTop: 4,
    color: colors.gray,
    fontSize: fontSize.small,
    fontFamily: fontFamily.regular,
    textAlign: 'center'
  },
});

BannerCard.propTypes = {
  categoryInfo: PropTypes.object,
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  onPressItem: PropTypes.any,
  imgWidth: PropTypes.number.isRequired,
  imgHeight: PropTypes.number.isRequired,

  // Styles
  cardStyle: ViewPropTypes.style,
  imgStyles: ViewPropTypes.style,
};
