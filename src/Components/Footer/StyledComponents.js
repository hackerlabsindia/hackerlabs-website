import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 1rem;
  background: ${(props) => props.theme.colors.secondaryBackgroundColor};
  width: 100%;
  color: white;
  text-align: center;
  h3 {
    padding: 0;
    margin: 0;
    margin-bottom: 0.4rem;
    color: #ffffff;
  }
  h5 {
    padding: 0;
    margin: 0;
    color: #ffffff;
  }
`;
