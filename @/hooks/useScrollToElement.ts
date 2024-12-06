import { RefObject } from "react";

const useScrollToElement = (ref: RefObject<HTMLElement>) => {
  const scrollToElement = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return scrollToElement;
};

export default useScrollToElement;
