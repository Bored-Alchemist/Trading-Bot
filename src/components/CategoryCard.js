import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';

import Text from '../elements/Text';
import {
  borderRadius,
  fontSize
} from '../styles/variables';

export default class CategoryCard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {
      subCateInfo,
      cardStyles,
      imgStyles,
      onPressItem,
      imgWidth,
      imgHeight,
      isTile
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[cardStyles, {width: imgWidth}]}
        onPress={onPressItem}
      >
        {isTile != null &&
          <View style={styles.tileCardItem}>
            <Image
              source={subCateInfo.image}
              style={[
                styles.image,
                imgStyles,
                {width: imgWidth, height: imgHeight}
              ]}
            />
            <View style={styles.tileTextCont}>
              <Text white bold style={styles.tileHeader}>
                {subCateInfo.name.toUpperCase()}
              </Text>
              <Text white small regular style={styles.tileCount}>
                {subCateInfo.count + ' items'}
              </Text>
            </View>
          </View>
        }
        {!isTile && isTile == null &&
          <View style={styles.cardItem}>
            <Image
              source={subCateInfo.image}
              style={[
                styles.image,
                imgStyles,
                {width: imgWidth, height: imgHeight}
              ]}
            />
            <View style={styles.textCont}>
              <Text black normal mediumBold
                numberOfLines={1}
                style={styles.header}
              >
                {subCateInfo.name}
              </Text>
              <Text gray small regular style={styles.count}>
                {subCateInfo.count + ' items'}
              </Text>
            </View>
          </View>
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: borderRadius.normal,
  },
  cardItem: {
    alignItems: 'center',
  },
  tileCardItem: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tileTextCont: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  textCont: {
    alignItems: 'center',
    paddingTop: 10,
  },
  tileHeader: {
    fontSize: fontSize.tileHeader,
    marginBottom: 6,
    textAlign: 'center'
  },
  header: {
    marginBottom: 3,
    textAlign: 'center'
  },
  tileCount: {
    opacity: 0.7,
    textAlign: 'center'
  },
  count: {
    textAlign: 'center'
  }
});

CategoryCard.propTypes = {
  subCateInfo: PropTypes.object,
  isTile: PropTypes.bool,
  imgWidth: PropTypes.number.isRequired,
  imgHeight: PropTypes.number.isRequired,
  onPressItem: PropTypes.any,

  // Styles
  cardStyles: ViewPropTypes.style,
  imgStyles: ViewPropTypes.style,
};
