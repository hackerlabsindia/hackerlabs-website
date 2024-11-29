import React from "react";
import Card, { CardProps } from "../Cards";

interface CardContainerProps {
  children: React.ReactElement;
  card: CardProps;
}

const CardContainer = ({ children, card }: CardContainerProps) => {
  return (
    <div className="min-w-[20rem] flex-1 bg-white">
      {children}

      <div>
        <Card
          title={card.title}
          description={card.description}
          iconComponent={card.iconComponent}
        />
      </div>
    </div>
  );
};

export default CardContainer;
