import React from "react";
import PropTypes from "prop-types";
import { ButtonText, StyledButton } from "./button.styled";

const Button = ({ children, icon, onPress }) => {
  return (
    <StyledButton onPress={onPress}>
      {icon}
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

Button.defaultProps = {
  icon: null,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onPress: PropTypes.func.isRequired,
};

export default Button;
