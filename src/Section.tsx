import React, { ReactNode } from "react";
import { LevelContext } from "./LevelContext";

interface SectionProps {
  children: ReactNode;
  level?: number;
}

const Section: React.FC<SectionProps> = ({ children, level }) => {
  const sectionLevel = level || 0;
  return (
    <section>
      <LevelContext.Provider value={sectionLevel + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}

export default Section