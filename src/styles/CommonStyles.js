import { StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  marginHorizontal,
  spaceVertical,
  deviceWidth,
  NAV_HEIGHT,
  STATUSBAR_HEIGHT,
  colors,
  borderRadius,
} from './variables';

import {
  wishHeartIc,
} from './icon-variables';

// CommonStyles
const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    marginTop: NAV_HEIGHT + STATUSBAR_HEIGHT, 
  },
  scrollviewContentContainer: {
    paddingTop: 69 
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }, 
  // wish icon
  wishCont: {
    position: 'absolute',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wishIcon: {
    width: wishHeartIc.width,
    height: wishHeartIc.height,
  },
  // step indicator
  stepIndicator: {
    paddingVertical: spaceVertical.small,
    borderBottomWidth: 1,
    borderColor: 'rgb(248,248,248)',
  },
  // modal
  modal: {
    width: deviceWidth * 0.9,
    borderRadius: borderRadius.normal,
    backgroundColor: colors.white,
  },
  modalBody: {
    maxHeight: responsiveHeight(80),
  },
  modalFooter: {
    padding: marginHorizontal.small,
  },
});

export default CommonStyles;
