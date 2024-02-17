import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  )
}

export default Section