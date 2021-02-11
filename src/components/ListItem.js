/* global require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ViewPropTypes,
} from 'react-native';

import Text from '../elements/Text';
import Border from '../elements/Border';

import {
  responsiveWidth,
  marginHorizontal,
  spaceVertical,
  colors,
  fontSize,
  fontFamily,
} from '../styles/variables';
import { arrRightIc } from '../styles/icon-variables';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          underlayColor={colors.lightGray}
          onPress={this.props.onPressItem}
        >
          <View style={[styles.card, this.props.cardStyles]}>
            <View style={[styles.leftItem, this.props.leftItemStyles]}>
              {this.props.leftIcon != null &&
                <Image
                  source={this.props.leftIcon}
                  style={[styles.leftIcon]}
                />
              }
              <Text style={this.props.headerStyles}>
                {this.props.header}
              </Text>
            </View>
            <Image
              source={require('../../img/icons/ic_arrow_right.png')}
              style={this.props.rightIconStyles}
            />
          </View>
        </TouchableHighlight>
        <Border
          bottom
          width={this.props.borderWidth}
          alignSelf='flex-end'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 25,
  },
  leftIcon: {
    marginRight: marginHorizontal.small,
  }
});

ListItem.propTypes = {
  header: PropTypes.string,
  leftIcon: PropTypes.any,
  borderWidth: PropTypes.number,
  onPressItem: PropTypes.any,

  // Styles
  cardStyles: ViewPropTypes.style,
  leftItemStyles: ViewPropTypes.style,
  rightIconStyles: ViewPropTypes.style,
  headerStyles: PropTypes.any,
};

ListItem.defaultProps = {
  cardStyles: {
    marginHorizontal: marginHorizontal.normal,
    marginVertical: spaceVertical.semiSmall,
  },
  headerStyles: {
    color: colors.darkGray,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
  },
  rightIconStyles: {
    width: arrRightIc.width,
    height: arrRightIc.height,
  }
};
