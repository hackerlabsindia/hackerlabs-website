import { Button } from "antd";

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
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  // border:1px solid lightgray;
 
  background-color: #b3c7de;
  
  transition: all 400ms;
  &:hover {
    
    transition: all 400ms;
    transform: translateY(2px);
    
    color:
    transform: scale(0.96);
  }
`;

const PrimaryButton = (props) => {
  return <StyledButton {...props}></StyledButton>;
};

export default PrimaryButton;
