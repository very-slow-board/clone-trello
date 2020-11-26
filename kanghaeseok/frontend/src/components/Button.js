import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div``;

// const FontAwesome = (icon) => <FontAwesomeIcon icon={icon} />;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
`;
const Icon = (props) => {
  const { icon } = props;
  const { classes, color } = icon;
  return (
    <IconContainer>
      <FontAwesomeIcon icon={classes} color={color} />
    </IconContainer>
  );
};

const Button = ({ props = {} }) => {
  const { icon, style } = props;
  return <Container style={style}>{icon && <Icon icon={icon} />}</Container>;
};

export default Button;
