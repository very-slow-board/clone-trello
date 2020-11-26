import Button from "components/Button";
import styled from "styled-components";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Container = styled.header`
  background-color: #00609a;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const CenterImage = styled.div`
  opacity: 0.5;
  width: 110px;
  height: inherit;
  background-image: url("https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80px 30px;
`;

const LeftContainer = styled.div`
  width: 100px;
  height: inherit;
  display: flex;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 100px;
  height: inherit;
  background-color: blue;
`;

const ComHeader = () => {
  return (
    <Container>
      <LeftContainer>
        <Button
          props={{
            icon: { classes: faCoffee, color: "white" },
            style: {
              width: 35,
              height: 35,
              display: "flex",
              justifyContent: "center",
            },
          }}
        />
        <Button />
        <Button />
        <Button />
      </LeftContainer>
      <CenterImage />
      <RightContainer />
    </Container>
  );
};

export default ComHeader;
