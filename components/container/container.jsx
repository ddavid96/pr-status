import styled from "styled-components/native";
import { theme } from "../../theme";

const { background } = theme.dark;

const Container = styled.View`
  flex: 1;
  background-color: ${background}; /* Dark theme background color */
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export default Container;
