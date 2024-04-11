import React, { useState, useRef } from "react";
import { StyledTypeWriter } from "./welcome-screen.styled";
import { theme } from "../../theme";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Button from "../../components/button/";
import FadeIn from "../../components/fade-in/fade-in";
import PropTypes from "prop-types";
import Container from "../../components/container/container";
import { SCREENS } from "../../const/screens";
import * as Haptic from "expo-haptics";

const { accent, buttonText } = theme.dark;

const WelcomeScreen = ({ navigation }) => {
  const textRef = useRef(null);
  const [isLogInVisible, setIsLogInVisible] = useState(false);

  const handleLogIn = () => {
    navigation.navigate(SCREENS.MAIN);
  };

  return (
    <Container>
      <StyledTypeWriter
        onTyped={() => Haptic.impactAsync()}
        ref={textRef}
        typing={1}
        typingDelay={10}
        maxDelay={10}
        typingAnimationDuration={10}
        blinkCursor={true}
        cursorStyle={{ color: accent }}
        fixed={true}
        onTypingEnd={() => setIsLogInVisible(true)}
      >
        Stay on top of your pull requests&apos; status. Log in with GitHub now!
      </StyledTypeWriter>
      <FadeIn visible={isLogInVisible}>
        <Button
          onPress={handleLogIn}
          icon={<FontAwesomeIcon icon={faGithub} color={buttonText} />}
        >
          Log in with GitHub
        </Button>
      </FadeIn>
    </Container>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WelcomeScreen;
