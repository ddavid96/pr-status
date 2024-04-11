import styled from "styled-components/native";
import { theme } from "../../theme";
import TypeWriter from "react-native-typewriter";

const { accent } = theme.dark;

export const StyledTypeWriter = styled(TypeWriter)`
  font-size: 24px;
  color: ${accent};
  margin-bottom: 20px;
`;
