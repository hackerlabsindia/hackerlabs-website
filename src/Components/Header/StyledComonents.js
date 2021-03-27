import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 4rem;
  background: ${(props) => props.theme.colors.secondaryBackgroundColor};
  width: 100%;
  color: white;
  .container {
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo_section {
      height: 100%;
      display: flex;
      align-items: center;
      .title {
        padding: 0;
        margin: 0;
      }
    }
    img {
      width: 3rem;
      margin-right: 0.5rem;
    }

    nav {
      height: 100%;
      display: flex;
      align-items: center;
      a {
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: white;
        font-weight: 700;
        border-radius: 4px;
      }
      a:hover {
        outline: 1px solid white;
      }
      active {
        outline: 1px solid white;
      }
    }
  }
`;
