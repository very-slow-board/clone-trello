import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div``;

const SLink = styled(Link)``;

export default withRouter(() => <Header>Hi I'am Header</Header>);
