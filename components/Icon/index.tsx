interface IconProps {
  children?: React.ReactNode;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  containerClass?: string;
  iconClass?: string;
  tabIndex?: number;
}

function Icon({
  children,
  width,
  height,
  containerClass = "",
  Icon,
  iconClass,
  tabIndex,
}: IconProps) {
  return (
    <>
      {children ? (
        children
      ) : Icon ? (
        <Icon className={iconClass} width={width} height={height} />
      ) : null}
    </>
  );
}

export default Icon;
