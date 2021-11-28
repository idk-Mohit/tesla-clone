import React from "react";
import styled from "styled-components";
import Section from "../section/Section";
import { ModelS,Model3,ModelX,ModelY,DownArrow,Logo,SolarPanel,Accessories } from '../images';

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelS}
        RightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelY}
        RightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={Model3}
        RightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelX}
        RightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-Back Guarantee"
        backgroundImg={SolarPanel}
        RightBtnText="Order Now"
        leftBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg={Accessories}
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
