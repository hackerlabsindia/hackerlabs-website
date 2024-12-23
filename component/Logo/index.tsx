import { HackerlabsLogo } from "@hackerlabs/icons";
import clsx from "clsx";
import Image from "next/image";

export enum LogoPosition {
  START = "START",
  END = "END",
}

interface LogoProps {
  children?: React.ReactNode;
  Logo?: () => JSX.Element;
  logoPosition?: LogoPosition;
  logoContainerClass?: string;
  logoClass?: string;
}

function Logo({ logoContainerClass }: LogoProps) {
  return (
    <div className={clsx(logoContainerClass)}>
      <Image alt="logo" src={HackerlabsLogo} width={30} height={30} />
    </div>
  );
}

export default Logo;
