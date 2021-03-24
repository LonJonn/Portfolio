import React from "react";
import tw, { styled } from "twin.macro";
import Button from "../components/Button";

const IndexPage = () => (
  <Container hasBackground>
    <ButtonGroup>
      <Button primary>Submit</Button>
      <Button>Cancel</Button>
    </ButtonGroup>
  </Container>
);

//#region Internal Styles

type ContainerProps = { hasBackground?: boolean };
const Container = styled.div<ContainerProps>(p => [
  tw`flex flex-col items-center justify-center h-screen`,
  p.hasBackground && tw`bg-gradient-to-tl from-primary-100 to-yellow-100`,
]);

const ButtonGroup = tw.div`flex flex-col justify-center h-full gap-y-5`;

//#endregion

export default IndexPage;
