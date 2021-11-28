import React from "react";
import styled from "styled-components";
import Section from "../section/Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-s.jpg"
        RightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-y.jpg"
        RightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-3.jpg"
        RightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="/images/model-x.jpg"
        RightBtnText="Existing Inventory"
        leftBtnText="Custom Order"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-Back Guarantee"
        backgroundImg="/images/solar-roof.jpg"
        RightBtnText="Order Now"
        leftBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="/images/accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
