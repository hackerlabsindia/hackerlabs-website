interface IconProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  containerClass?: string;
  iconClass?: string;
  tabIndex?: number;
}

function Icon({
  width,
  height,

  Icon,
  iconClass,
  tabIndex,
}: IconProps) {
  return (
    <>
      {Icon ? (
        <Icon className={iconClass} width={width} height={height} />
      ) : null}
    </>
  );
}

export default Icon;
