import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 40px;
  background-color: #00609a;
  background-image: url("https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80px 30px;
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  width: 400px;
  height: inherit;
  background-color: red;
`;

const RightContainer = styled.div`
  width: 200px;
  height: inherit;
  background-color: blue;
`;

const SLink = styled(Link)``;

export default withRouter(() => (
  <Header>
    <LeftContainer />
    <RightContainer />
  </Header>
));
