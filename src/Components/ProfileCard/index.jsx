import { Card } from "antd";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const StyledCard = styled(Card)`
  max-width: 18rem;
  min-width: 270px;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.fontColor};
  background: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1rem;
  border: 1px solid lightgray;

  transition: all 400ms;
  transform: scale(1);
  img {
    max-width: 100%;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 5px #e8eff5, 13px 13px 22px #bbcfda,
      -13px -13px 22px #ffffff;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
  .image_parent {
    padding: 10px 0;
    height: 100px;
    width: 100px;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 50%;
  }
  .image_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  h4 {
    margin-bottom: 0px;
  }
  h3 {
    margin: 0;
  }
  .name_section {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .staus_name {
      display: flex;
      align-items: center;
    }
  }
  .skill_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-bottom: 2rem;
  }
  .skill {
    color: ${(props) => props.theme.colors.fontColor};
    padding: 0.2rem 0.4rem;

    font-weight: bold;
    margin: 0.5rem 0.5rem;
    border: none;
    outline: none;
    font-size: 13px;
    background: ${(props) => props.theme.colors.backgroundColor};
    border-radius: 3px;
    border: 1px solid lightgray;
  }
  &:hover {
    transition: all 400ms;
    background: ${(props) => props.theme.colors.hoverBackgroundColor};
  }

  @media (max-width: 650px) and (min-width: 420px) {
    max-width: 400px;
    margin: 1rem auto;
  }
  @media (max-width: 419.9px) {
    margin: 1rem auto;
  }
`;

const PorfileCard = (props) => {
  const { developerData } = props;
  return (
    <div
      id="dev"
      style={{
        width: "85%",
        margin: "4rem auto",
      }}>
      <h1 className="section_title"> Our Team</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "space-around",
          gap: "1rem",
        }}>
        {developerData.map((info, i) => {
          return (
            <StyledCard
              key={i}
              hoverable
              cover={
                <div className="image_container">
                  <div className="image_parent">
                    <img alt={info.name} src={info.img} />
                  </div>
                </div>
              }>
              <div className="name_section">
                <div className="staus_name">
                  <RiCheckboxBlankCircleFill
                    style={{ color: info.status, marginRight: "5px" }}
                  />
                  <h3> {info.name}</h3>
                </div>
                <a href={info.linkedIn} target="_blank" rel="noreferrer">
                  <FaLinkedin
                    style={{
                      fontSize: "20px",
                      verticalAlign: "middle",
                      marginRight: ".5rem",
                    }}
                  />
                </a>
              </div>
              <h4>Expertise</h4>
              <div className="skill_container">
                {info?.skills?.map((skill, index) => (
                  <button
                    key={index}
                    className="skill"
                    style={{
                      border: `1px solid ${
                        "#" +
                        Math.floor(Math.random() * 16777215)
                          .toString(16)
                          .padStart(6, "0")
                      }`,
                    }}>
                    {" "}
                    {skill}
                  </button>
                ))}
              </div>
            </StyledCard>
          );
        })}
      </div>
    </div>
  );
};

export default PorfileCard;
