import { TechStackWrapper } from "./StyledComponents";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCplusplus,
  SiPython,
  SiDjango,
  SiFigma,
  SiAdobephotoshop,
  SiReact,
  SiVueDotJs,
} from "react-icons/si";

const data = [
  {
    name: "Language",
    list: [<IoLogoJavascript />, <SiCplusplus />, <SiPython />],
  },
  {
    name: "Library and FrameWork",
    list: [<SiReact />, <SiVueDotJs />, <SiDjango />],
  },
  { name: "Design", list: [<SiFigma />, <SiAdobephotoshop />] },
];

const TechStack = (props) => {
  return (
    <TechStackWrapper>
      {" "}
      <h1 className="section_title"> Tech Stack</h1>
      <div className="card_section">
        {data.map((oneCard, index1) => {
          return (
            <div className="card_wrapper" key={index1}>
              {oneCard.list.map((icon, index2) => {
                return (
                  <div className="icon" key={index1 + "" + index2}>
                    {icon}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </TechStackWrapper>
  );
};

export default TechStack;
