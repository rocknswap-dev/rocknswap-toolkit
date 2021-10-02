import React from "react";
import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import { SpinnerProps } from "./types";

const scale = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.3);
  }
`;

const Container = styled.div`
  position: relative;
`;

const RotatingLogo = styled(Logo)`
  animation: ${scale} 2s alternate infinite ease-in;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 500 }) => {
  return (
    <Container>
      <RotatingLogo width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
