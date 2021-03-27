import styled from "styled-components";

export const AppWrapper = styled.section`
  background: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.fontColor};
  .section_title {
    font-size: 2.5rem;
    padding: 0;
    margin: 0;
    color: #314584;
  }
`;
