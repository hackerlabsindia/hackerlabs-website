import styled from "styled-components";

export const TechStackWrapper = styled.section`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 4rem;
  .card_section {
    margin: 1rem 0 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .card_wrapper {
      border-radius: 5px;
      color: ${(props) => props.theme.colors.fontColor};
      background: ${(props) => props.theme.colors.backgroundColor};
      border: 1px solid lightgray;
      display: flex;
      flex-wrap: wrap;
      padding: 1rem;
      margin: 0.5rem;
      .icon {
        font-size: 3rem;
        padding: 1rem;
      }
    }
  }
`;
