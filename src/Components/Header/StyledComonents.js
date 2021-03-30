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
        color: white;
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
  .toggle_btn {
    margin-right: 1rem;
  }
  .absolute_navbar {
    position: absolute;
    top: 4rem;
    left: 0;
  }
  .header_navbar {
    width: 250px;
    display: none;
  }
  .icon {
    vertical-align: middle;
  }

  @media (max-width: 1000px) {
    .container {
      width: 100%;
      padding-left: 1rem;
    }
    .header_navbar {
      display: block;
    }
    nav {
      display: none !important;
    }
  }

  @media (min-width: 1000.1px) {
    .header_navbar {
      display: block;
    }
    .toggle_btn {
      display: none;
    }
    .header_navbar {
      display: none;
    }
    .spred_nav_bar {
      display: block;
    }
  }
`;
