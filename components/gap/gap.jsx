import React, { Children } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

const Gap = ({ gap, direction, children, styles }) => {
  return (
    <View style={(styles, { flexDirection: direction })}>
      {Children.map(children, (child) => {
        const itemStyles = {
          marginBottom: gap,
          marginRight: gap,
          justifyContent: "center",
          alignItems: "center",
        };
        return <View style={itemStyles}>{child}</View>;
      })}
    </View>
  );
};

Gap.propTypes = {
  gap: PropTypes.number,
  children: PropTypes.node,
  styles: PropTypes.object,
  direction: PropTypes.string,
};

Gap.defaultProps = {
  gap: 10,
  styles: {},
};

export default Gap;
