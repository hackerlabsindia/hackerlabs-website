import React, { useRef } from "react";

import ProcessFlowCard, { ProcessFlowProps } from "../ProcessFlowCard";

export interface ProcessFlowContainerProps {
  iconComponent: JSX.Element;
  processFlowCard: Omit<ProcessFlowProps, "iconComponent" | "highlight">;
  highlight: boolean;
}
const ProcessFlowContainer = ({
  processFlowCard,
  iconComponent,
  highlight,
}: ProcessFlowContainerProps) => {
  return (
    <ProcessFlowCard
      title={processFlowCard.title}
      text={processFlowCard.text}
      description={processFlowCard.description}
      iconComponent={iconComponent}
      highlight={highlight}

      contactFormRef={processFlowCard.contactFormRef}

    />
  );
};
export default ProcessFlowContainer;
