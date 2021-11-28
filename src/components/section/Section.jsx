import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const Section = ({
  title,
  description,
  backgroundImg,
  RightBtnText,
  leftBtnText,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <Bounce left>
              <LeftButton>{leftBtnText}</LeftButton>
            </Bounce>
            {RightBtnText && <Bounce right><RightButton>{RightBtnText}</RightButton></Bounce>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bgImage})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-family: var(--font-family);
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 45px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin: 0 0.5rem;
  cursor: pointer;
  letter-spacing: 0.5px;
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;
const RightButton = styled(LeftButton)`
  color: black;
  background: white;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  margin: 0px 0 15px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
