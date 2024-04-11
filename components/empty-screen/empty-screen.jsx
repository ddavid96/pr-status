import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text } from "react-native";
import { theme } from "../../theme";
import { faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const { textSecondary } = theme.dark;

const EmptyScreen = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{message}</Text>
      <FontAwesomeIcon
        icon={faCodePullRequest}
        color={textSecondary}
        size={50}
      />
    </View>
  );
};

EmptyScreen.propTypes = {
  message: PropTypes.string,
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 34,
    fontWeight: "bold",
    color: theme.dark.textSecondary,
    textAlign: "center",
    marginBottom: 20,
  },
};

export default EmptyScreen;
