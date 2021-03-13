import { Button } from "@material-ui/core";

import styled from "styled-components";

const StyledButton = styled(Button)`
  color: #525252;
  font-size: 1rem;
  font-weight: 900;
  height: 2.5rem;
  width: 5rem;
  /* padding-left: 2rem; */
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 7px 7px 15px #bbcfda, -4px -4px 13px #fff,
    inset 4px 4px 8px rgba(209, 217, 230, 0.2),
    inset -8px -8px 8px rgba(255, 255, 255, 0.2);
  // text-shadow: 3px 3px 2px #bbcfda, -3px -3px 2px #fff;
  background-color: #e8eff5;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 400ms;
  &:hover {
    box-shadow: 4px 2px 18px #bbcfda, -4px -4px 13px #fff,
      inset 6px 6px 16px rgba(209, 217, 230, 0.8),
      inset -8px -8px 8px rgba(255, 255, 255, 0.2);

    transform: translateY(2px);
    color: #f12711;
    transform: scale(0.96);
    border: 0.5px solid #f12711;
  }
`;

const PrimaryButton = (props) => {
  return <StyledButton {...props}></StyledButton>;
};

export default PrimaryButton;
