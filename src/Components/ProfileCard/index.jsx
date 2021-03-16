import { Card } from "antd";
import { PrimaryButton } from "Components/Button";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";

const StyledCard = styled(Card)`
  max-width: 20rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.fontColor};
  background: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  border: 1px solid lightgray;

  transition: all 400ms;
  transform: scale(1);
  img {
    max-width: 100%;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 5px #e8eff5, 13px 13px 22px #bbcfda,
      -13px -13px 22px #ffffff;
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
`;

const PorfileCard = (props) => {
  const { developerData } = props;
  return (
    <div style={{ padding: "1rem", display: "flex", flexWrap: "wrap" }}>
      {developerData.map((info) => {
        return (
          <StyledCard
            hoverable
            cover={
              <div className="image_container">
                <div className="image_parent">
                  <img alt={info.name} src={info.img} />
                </div>
              </div>
            }>
            <h3> {info.name}</h3>
            <h4>Skills</h4>
            <div className="skill_container">
              {info?.skills?.map((skill) => (
                <button className="skill"> {skill}</button>
              ))}
            </div>
            <a href={info.linkedIn} target="_blank">
              <PrimaryButton
                style={{ width: "100%" }}
                icon={
                  <FaLinkedin
                    style={{
                      fontSize: "20px",
                      verticalAlign: "middle",
                      marginRight: "1rem",
                    }}
                  />
                }>
                {" "}
                Connect
              </PrimaryButton>
            </a>
          </StyledCard>
        );
      })}
    </div>
  );
};

export default PorfileCard;
