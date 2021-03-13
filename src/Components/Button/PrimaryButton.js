import { Button } from "antd";

import styled from "styled-components";

const StyledButton = styled(Button)``;

const PrimaryButton = (props) => {
  return <StyledButton {...props}></StyledButton>;
};

export default PrimaryButton;
