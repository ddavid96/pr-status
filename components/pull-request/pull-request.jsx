import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import {
  faCheck,
  faTimes,
  faComment,
  faCodePullRequest,
} from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../theme";
import {
  Title,
  Container,
  PullRequestContainer,
  SecondaryText,
} from "./pull-request.styled";
import Swipeable from "../swipeable/swipeable";
import PropTypes from "prop-types";
import Gap from "../gap/gap";

const { accent, success, error, textSecondary } = theme.dark;

const PullRequest = ({ onRemove }) => {
  return (
    <Swipeable onRemove={onRemove}>
      <PullRequestContainer>
        <Gap direction={"row"}>
          <Gap direction={"column"}>
            <Gap direction={"row"}>
              <FontAwesomeIcon icon={faCodePullRequest} color={accent} />
              <Title numberOfLines={1} ellipsizeMode="tail">
                JIRA-ID: Add some features
              </Title>
            </Gap>
            <Gap direction="row" gap={10}>
              <SecondaryText>Opened by user on 2021-09-01</SecondaryText>
              <FontAwesomeIcon icon={faCheck} color={success} />
              <FontAwesomeIcon icon={faTimes} color={error} />
            </Gap>
          </Gap>
          <FontAwesomeIcon icon={faComment} color={textSecondary} />
          <SecondaryText>3</SecondaryText>
        </Gap>
      </PullRequestContainer>
    </Swipeable>
  );
};

PullRequest.propTypes = {
  onRemove: PropTypes.func,
};

PullRequest.defaultProps = {
  onRemove: () => {},
};

export default PullRequest;
