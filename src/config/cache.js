import { Asset, Font } from 'expo';
import { Image } from 'react-native';

const cacheImages = (images) => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const cacheFonts = (fonts) => {
  return fonts.map(font => Font.loadAsync(font));
}

export {
  cacheFonts,
  cacheImages,
};
