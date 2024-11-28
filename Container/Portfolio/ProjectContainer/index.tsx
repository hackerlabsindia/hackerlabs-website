import React from "react";
import ProjectCards, { ProjectCardProps } from "../ProjectsShowCase";
import {
  AMF,
  Apollo247,
  Audvice,
  Beehive,
  CityMall,
  CityMallOnline,
  FintechClone,
  GutesLeben,
  Loonoy,
  RNFashionApp,
  VestedFinance,
} from "@hackerlabs/icons";

const ProjectImages = {
  apollo: Apollo247,
  cityMallOnline: CityMallOnline,
  vestedFinance: VestedFinance,
  beehive: Beehive,
  audvice: Audvice,
  amf: AMF,
  loonoy: Loonoy,
  cityMall: CityMall,
  gutesleben: GutesLeben,
  fintechClone: FintechClone,
  rnFashionApp: RNFashionApp,
};

export interface ProjectContainerProps {
  projectCards: Omit<ProjectCardProps, "img" | "highlight">;
  projectKey: string;
  highlight: boolean;
}
const ProjectContainer = ({
  projectCards,
  projectKey,
  highlight,
}: ProjectContainerProps) => {
  return (
    <>
      <ProjectCards
        title={projectCards.title}
        description={projectCards.description}
        bulletPoints={projectCards.bulletPoints}
        img={ProjectImages[projectKey as keyof typeof ProjectImages]}
        androidLink={projectCards.androidLink}
        androidLinkName={projectCards.androidLinkName}
        highlight={highlight}
        iosLink={projectCards.iosLink}
        iosLinkName={projectCards.iosLinkName}
      />
    </>
  );
};
export default ProjectContainer;
