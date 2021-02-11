import { deviceWidth } from './variables';

const LARGE_DEVICE_SCALE = 1.3;

// cart screen
let avaImg = { width: 80, height: 80 };
let cartProImg = { width: 96, height: 120 };
let sidebarAvaImg = { width: 56, height: 56 };
let rectangle = { width: 56, height: 80 };
let dealImg = { width: 160, height: 160 };
let postAvaImg = { width: 80, height: 80 };
let settingAvaImg = { width: 88, height: 88 };
let commentAvaImg = { width: 57, height: 57 };
let cardContainer = { width: 240, height: 160 };
let relatePostImg = { width: 96, height: 96 };

if (deviceWidth >= 768) {
  avaImg = {
    width: 80 * LARGE_DEVICE_SCALE,
    height: 80 * LARGE_DEVICE_SCALE
  };
  cartProImg = {
    width: 96 * LARGE_DEVICE_SCALE,
    height: 120 * LARGE_DEVICE_SCALE
  };
  sidebarAvaImg = {
    width: 56 * LARGE_DEVICE_SCALE,
    height: 56 * LARGE_DEVICE_SCALE
  };
  rectangle = {
    width: 56 * LARGE_DEVICE_SCALE,
    height: 80 * LARGE_DEVICE_SCALE
  };
  dealImg = {
    width: 160 * LARGE_DEVICE_SCALE,
    height: 160 * LARGE_DEVICE_SCALE
  };
  postAvaImg = {
    width: 80 * LARGE_DEVICE_SCALE,
    height: 80 * LARGE_DEVICE_SCALE
  };
  settingAvaImg = {
    width: 88 * LARGE_DEVICE_SCALE,
    height: 88 * LARGE_DEVICE_SCALE
  };
  commentAvaImg = {
    width: 57 * LARGE_DEVICE_SCALE,
    height: 57 * LARGE_DEVICE_SCALE
  };
  cardContainer = {
    width: 240 * LARGE_DEVICE_SCALE,
    height: 160 * LARGE_DEVICE_SCALE
  };
  relatePostImg = {
    width: 96 * LARGE_DEVICE_SCALE,
    height: 96 * LARGE_DEVICE_SCALE
  };
}

export {
  avaImg,
  cartProImg,
  sidebarAvaImg,
  rectangle,
  dealImg,
  postAvaImg,
  settingAvaImg,
  commentAvaImg,
  cardContainer,
  relatePostImg
}
