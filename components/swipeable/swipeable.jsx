import PropTypes from "prop-types";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { theme } from "../../theme";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { error } = theme.dark;

const SWIPE_TRESHOLD = -SCREEN_WIDTH * 0.3;
const ANIMATION_DURATION = 300;

const Swipeable = ({ children, onRemove }) => {
  const removeTextSize = useSharedValue(0);
  const opacity = useSharedValue(1);
  const marginBottom = useSharedValue(40);
  const position = useSharedValue(0);
  const height = useSharedValue(70);
  const [tresholdPassed, setTresholdPassed] = useState(false);

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationX < 0) {
        position.value = e.translationX;
        removeTextSize.value = withTiming(
          e.translationX < SWIPE_TRESHOLD ? 20 : 15,
          { duration: ANIMATION_DURATION }
        );

        if (position.value < SWIPE_TRESHOLD && !tresholdPassed) {
          runOnJS(setTresholdPassed)(true);
          runOnJS(Haptics.impactAsync)();
        } else if (position.value >= SWIPE_TRESHOLD && tresholdPassed) {
          runOnJS(setTresholdPassed)(false);
          runOnJS(Haptics.impactAsync)();
        }
      }
    })
    .onEnd((e) => {
      if (position.value === 0) return;
      if (e.translationX < SWIPE_TRESHOLD) {
        position.value = withTiming(
          -SCREEN_WIDTH,
          {
            duration: ANIMATION_DURATION,
          },
          () => {
            opacity.value = withTiming(0, { duration: ANIMATION_DURATION });
            marginBottom.value = withTiming(0, {
              duration: ANIMATION_DURATION,
            });
            height.value = withTiming(
              0,
              { duration: ANIMATION_DURATION },
              () => {
                runOnJS(onRemove)();
              }
            );
          }
        );
      } else {
        position.value = withTiming(0, { duration: ANIMATION_DURATION });
      }
    });

  const parentAnimatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    display: height.value === 0 ? "none" : "flex",
    marginBottom: marginBottom.value,
  }));

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  const animatedRightContent = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    fontSize: removeTextSize.value,
    color: error,
  }));

  return (
    <Animated.View style={parentAnimatedStyle}>
      <GestureDetector gesture={pan}>
        <Animated.View style={animatedStyle}>{children}</Animated.View>
      </GestureDetector>
      <Animated.View style={[animatedRightContent, styles.rightContent]}>
        <Animated.Text style={animatedTextStyle}>Dismiss</Animated.Text>
      </Animated.View>
    </Animated.View>
  );
};

const styles = {
  rightContent: {
    position: "absolute",
    right: 0,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -2,
    paddingRight: 20,
  },
};

Swipeable.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
  children: PropTypes.node,
  onLeftActionRelease: PropTypes.func,
  onRightActionRelease: PropTypes.func,
  disappearOnRelease: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
};

Swipeable.defaultProps = {
  leftContent: null,
  rightContent: null,
  children: null,
  onLeftActionRelease: () => {},
  onRightActionRelease: () => {},
  disappearOnRelease: true,
};

export default Swipeable;
