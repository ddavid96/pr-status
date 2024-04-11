import styled from "styled-components";
import { theme } from "../../theme";

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.dark.text};
  font-weight: bold;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const PullRequestContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  background-color: ${theme.dark.backgroundSecondary};
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const SecondaryText = styled.Text`
  font-size: 16px;
  color: ${theme.dark.textSecondary};
`;
