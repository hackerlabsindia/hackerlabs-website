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
  SiTypescript,
  SiApollographql,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiBootstrap,
  SiMaterialUi
} from "react-icons/si";
import { FaNode } from "react-icons/fa"
import { AiOutlineAntDesign } from "react-icons/ai"

const data = [
  {
    name: "Language",
    list: [<IoLogoJavascript />, <SiCplusplus />, <SiPython />, <SiTypescript />],
  },
  {
    name: "Library and FrameWork",
    list: [<SiReact />, <SiVueDotJs />, <SiDjango />],
  },
  {
    name: "Backend",
    list: [<FaNode />, <SiMongodb />, <SiMysql />, <SiApollographql />, <SiGraphql />]
  },
  {
    name: "Component Library",
    list: [<AiOutlineAntDesign />, <SiBootstrap />, <SiMaterialUi />]
  },
  {
    name: "Design",
    list: [<SiFigma />, <SiAdobephotoshop />]
  },
];

const TechStack = (props) => {
  return (
    <TechStackWrapper id="tech">
      {" "}
      <h1 className="section_title"> We Prefer</h1>
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
