import styled from "styled-components/native";
import { theme } from "../../theme";

const { button, buttonText } = theme.dark;

export const ButtonText = styled.Text`
  color: ${buttonText};
  font-size: 18px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${button};
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 20px;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
