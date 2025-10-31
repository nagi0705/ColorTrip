import { useSharedValue, useAnimatedStyle, withTiming, withSpring, Easing } from 'react-native-reanimated';

/**
 * フェードイン・フェードアウトアニメーション
 */
export const useFadeAnimation = (duration: number = 300) => {
  const opacity = useSharedValue(0);

  const fadeIn = () => {
    opacity.value = withTiming(1, {
      duration,
      easing: Easing.out(Easing.ease),
    });
  };

  const fadeOut = () => {
    opacity.value = withTiming(0, {
      duration,
      easing: Easing.in(Easing.ease),
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return { fadeIn, fadeOut, animatedStyle };
};

/**
 * スライドインアニメーション
 */
export const useSlideAnimation = (direction: 'left' | 'right' | 'up' | 'down' = 'right', duration: number = 300) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const slideIn = () => {
    if (direction === 'left' || direction === 'right') {
      translateX.value = withTiming(0, { duration });
    } else {
      translateY.value = withTiming(0, { duration });
    }
  };

  const slideOut = () => {
    if (direction === 'left') {
      translateX.value = withTiming(-300, { duration });
    } else if (direction === 'right') {
      translateX.value = withTiming(300, { duration });
    } else if (direction === 'up') {
      translateY.value = withTiming(-300, { duration });
    } else {
      translateY.value = withTiming(300, { duration });
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return { slideIn, slideOut, animatedStyle };
};

/**
 * スケールアニメーション
 */
export const useScaleAnimation = (duration: number = 300) => {
  const scale = useSharedValue(0);

  const scaleIn = () => {
    scale.value = withSpring(1, {
      damping: 10,
      stiffness: 100,
    });
  };

  const scaleOut = () => {
    scale.value = withTiming(0, { duration });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return { scaleIn, scaleOut, animatedStyle };
};

/**
 * バウンスアニメーション
 */
export const useBounceAnimation = () => {
  const translateY = useSharedValue(0);

  const bounce = () => {
    translateY.value = withSpring(0, {
      damping: 8,
      stiffness: 150,
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return { bounce, animatedStyle };
};

/**
 * パルスアニメーション
 */
export const usePulseAnimation = () => {
  const scale = useSharedValue(1);

  const pulse = () => {
    scale.value = withTiming(1.1, { duration: 200 }, () => {
      scale.value = withTiming(1, { duration: 200 });
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return { pulse, animatedStyle };
};


