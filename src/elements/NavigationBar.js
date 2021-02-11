import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  StatusBar,
  ViewPropTypes,
} from 'react-native';

import CommonStyles from '../styles/CommonStyles';
import {
  responsiveWidth,
  responsiveHeight,
  marginHorizontal,
  spaceVertical,
  NAV_HEIGHT,
  STATUSBAR_HEIGHT,
  deviceWidth,
  colors,
  fontSize,
  fontFamily,
} from '../styles/variables';
import {
  menuIc,
  backIc
} from '../styles/icon-variables';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.outerCont, this.props.outerContStyle]}>
        <StatusBar {...this.props.statusBarProps} />
        <View style={[styles.innerCont, this.props.innerContStyle]}>
          <View style={[styles.left, this.props.leftStyle]}>
            {this.props.menu &&
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  // this.props.navigation.navigate('DrawerOpen')
                  this.props.navigation.openDrawer();
                }}
              >
                <View style={[this.props.leftBtnStyle, styles.leftBtn]}>
                  <Image
                    source={require('../../img/icons/menu.png')}
                    style={{width: menuIc.width, height: menuIc.height}}
                  />
                </View>
              </TouchableOpacity>
            }
            {this.props.back &&
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => this.props.navigation.goBack()}
              >
                <View style={[this.props.leftBtnStyle, styles.leftBtn]}>
                  <Image
                    source={require('../../img/icons/back.png')}
                    style={{width: backIc.width, height: backIc.height}}
                  />
                </View>
              </TouchableOpacity>
            }
            {!this.props.menu && !this.props.back &&
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.props.onPressLeftChildren}
              >
                <View style={[this.props.leftBtnStyle, styles.leftBtn]}>
                    {this.props.leftChildren}
                </View>
              </TouchableOpacity>
            }
          </View>
          <View style={[styles.center, this.props.centerStyle]}>
            {this.props.title != null &&
              <Text style={[this.props.titleStyle, styles.title]}>
                {this.props.title}
              </Text>
            }
            {this.props.title == null && this.props.centerChildren}
          </View>
          <View style={[styles.right, this.props.rightStyle]}>
            {this.props.rightButtons != null &&
              this.props.rightButtons.map(button => (
                <TouchableOpacity
                  key={button.key}
                  onPress={button.buttonAction}
                >
                  <View style={[this.props.rightBtnStyle, styles.rightBtn]}>
                    <Image
                      source={button.buttonIcon}
                      style={{width: button.buttonWidth, height: button.buttonHeight}}
                    />
                  </View>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerCont: {
    top: 0,
    left: 0,
    right: 0,
    width: deviceWidth,
    height: NAV_HEIGHT + STATUSBAR_HEIGHT,
  },
  innerCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: STATUSBAR_HEIGHT,
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 3/5,
  },
  title: {
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  left: {
    height: NAV_HEIGHT,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftBtn: {
    height: NAV_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    height: NAV_HEIGHT,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4)/2,
  },
  rightBtn: {
    height: NAV_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

NavigationBar.propTypes = {
  title: PropTypes.string,
  centerChildren: PropTypes.any,
  leftChildren: PropTypes.any,
  rightChildren: PropTypes.any,

  // Styles
  outerContStyle: ViewPropTypes.style,
  innerContStyle: ViewPropTypes.style,
  leftStyle: ViewPropTypes.style,
  rightStyle: ViewPropTypes.style,
  centerStyle: ViewPropTypes.style,
  leftBtnStyle: ViewPropTypes.style,
  rightBtnStyle: ViewPropTypes.style,
  titleStyle: Text.propTypes.style,
};

NavigationBar.defaultProps = {
  statusBarProps: {
    translucent: true,
    barStyle: "dark-content",
    backgroundColor: "white",
  },
  outerContStyle: {
    backgroundColor: colors.white,
  },
  titleStyle: {
    color: colors.black,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.bold,
  },
  leftBtnStyle: {
    paddingHorizontal: responsiveWidth(4),
  },
  rightBtnStyle: {
    paddingHorizontal: responsiveWidth(4)/2,
  },
};
