import React from "react";

import Icon from "../Icon";

export interface CardProps {
  description: string;
  title: string;
  iconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Card = ({ description, title, iconComponent }: CardProps) => {
  return (
    <div className="no-transform">
      <div className="tableSubContainer1 border-color">
        <h2 className="font-inter subContainer1-heading">
          {title}
          <Icon Icon={iconComponent} iconClass="h-8 w-8" />
        </h2>
        <p className="mt-2 text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default Card;
