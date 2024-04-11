import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import PropTypes from "prop-types";

const FadeIn = ({ children, visible }) => {
  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (!visible) {
      return;
    }
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View style={{ opacity: fadeAnimation }}>{children}</Animated.View>
  );
};

FadeIn.propTypes = {
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default FadeIn;
