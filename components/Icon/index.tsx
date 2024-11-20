import clsx from "clsx";
import Image from "next/image";

interface IconProps {
  children?: React.ReactNode;
  iconSrc?: string;
  altText?: string;
  width?: number;
  height?: number;
  containerClass?: string;
}

function Icon({
  children,
  iconSrc = "",
  altText = "icon",
  width = 24,
  height = 24,
  containerClass = "",
}: IconProps) {
  return (
    <div className={clsx(containerClass)}>
      {children ? (
        children
      ) : (
        <Image src={iconSrc} alt={altText} width={width} height={height} />
      )}
    </div>
  );
}

export default Icon;
