import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet,
  View,
  TouchableHighlight,
  ViewPropTypes,
} from 'react-native';

import Text from '../elements/Text';
import Border from '../elements/Border';

import CommonStyles from '../styles/CommonStyles';
import {
  marginHorizontal,
  colors,
  fontSize,
  fontFamily
} from '../styles/variables';

export default class ListCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      proInfo,
      subHeader,
      onPressListItem,
      cardStyles,
      imgStyles,
      imgWidth,
      imgHeight,
      rightItemStyles,
      rightInfoStyles,
      headerStyles,
      rightItemChildren,
      borderBottom,
      borderBottomWidth,
      hasImgIc,
      iconContStyles,
      onPressIcon,
      iconStyles,
      icon,
    } = this.props;
    return (
      <View style={{position: 'relative'}}>
        <TouchableHighlight
          underlayColor={colors.lightGray}
          onPress={onPressListItem}
        >
          <View style={[styles.card, cardStyles]}>
            <Image
              source={proInfo.image}
              style={[
                {width: imgWidth, height: imgHeight, borderRadius: 4},
                imgStyles,
              ]}
            />
            <View style={[styles.rightItem, rightItemStyles]}>
              <View style={rightInfoStyles}>
                <Text style={headerStyles}>{proInfo.name}</Text>
                {subHeader}
              </View>
              {rightItemChildren}
            </View>
          </View>
        </TouchableHighlight>
        {borderBottom &&
          <Border
            bottom
            width={borderBottomWidth}
            alignSelf='flex-end'
          />
        }
        {hasImgIc &&
          <TouchableHighlight
            underlayColor={'transparent'}
            style={[CommonStyles.wishCont, iconContStyles]}
            onPress={onPressIcon}
          >
            <Image
              source={icon}
              style={iconStyles}
            />
          </TouchableHighlight>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  rightItem: {
    flex: 1,
    paddingLeft: marginHorizontal.small,
  },
});

ListCard.propTypes = {
  proInfo: PropTypes.object,
  hasImgIc: PropTypes.bool,
  onPressListItem: PropTypes.any,
  onPressIcon: PropTypes.any,
  imgWidth: PropTypes.number.isRequired,
  imgHeight: PropTypes.number.isRequired,
  rightItemChildren: PropTypes.any,
  borderBottom: PropTypes.any,
  borderBottomWidth: PropTypes.number,
  icon: PropTypes.any,

  // Styles
  cardStyles: ViewPropTypes.style,
  imgStyles: ViewPropTypes.style,
  iconContStyles: ViewPropTypes.style,
  rightItemStyles: ViewPropTypes.style,
  rightInfoStyles: ViewPropTypes.style,
  //headerStyles: ViewPropTypes.style,
  iconStyles: ViewPropTypes.style,
};

ListCard.defaultProps = {
  headerStyles: {
    color: colors.black,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium
  },
};
