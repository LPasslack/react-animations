// @flow
import {
  compose,
  scale3d,
  translate3d,
  cubicBezier,
} from './utils';
import type { Animation } from './types';

const scaleAndTranslate = compose(scale3d, translate3d);

const zoomInUp: Animation = {
  from: {
    opacity: 0,
    transform: scaleAndTranslate(
      [0.1, 0.1, 0.1],
      [0, '1000px', 0]
    ),
    animationTimingFunction: cubicBezier(
      0.550,
      0.055,
      0.675,
      0.190
    ),
  },
  '60%': {
    opacity: 1,
    transform: scaleAndTranslate(
      [0.475, 0.475, 0.475],
      [0, '-60px', 0]
    ),
    animationTimingFunction: cubicBezier(
      0.175,
      0.885,
      0.320,
      1
    ),
  },
};

export default zoomInUp;
