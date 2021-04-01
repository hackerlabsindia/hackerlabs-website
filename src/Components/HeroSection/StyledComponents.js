import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 85%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .heading_container {
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // text-align: center;
  }
  .hero_title2 {
    color: #23232326;
    font-size: 4rem;
    margin: 0.5rem 0;
    padding: 0;
  }
  .hero_title1 {
    color: #314584;
    font-size: 4rem;
    margin: 0.5rem 0;
    padding: 0;
  }
  .hero_title {
    color: #314584;
    font-size: 4rem;
    margin: 0;
    padding: 0;
  }
  .hero_sub_title {
    padding: 0;
    margin-top: 1rem;
  }
  .image_container {
    width: 50%;

    img {
      width: 100%;
      // height:100%
    }
  }
`;
