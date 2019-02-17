import memoizeOne from 'memoize-one';
import { Dimensions, Platform, PixelRatio } from 'react-native';

const normalize = memoizeOne((size) => {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');

  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;

  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
});

export default normalize;