"use client";

import React, { createContext, useContext, useState } from "react";

export interface FaqContextType {
  openFaqIndex: number | null;
  toggleFaq: (index: number) => void;
}

const FaqContext = createContext<FaqContextType | undefined>(undefined);

export const FaqProvider = ({ children }: { children: React.ReactNode }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <FaqContext.Provider value={{ openFaqIndex, toggleFaq }}>
      {children}
    </FaqContext.Provider>
  );
};

export const useFaqContext = (): FaqContextType => {
  const context = useContext(FaqContext);
  if (!context) {
    throw new Error("useFaqContext must be used within a FaqProvider");
  }
  return context;
};
