"use client";

import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

const Reveal = ({ children, className }: RevealProps) => {
  return (
    <div className={className} data-aos="fade-up">
      {children}
    </div>
  );
};

export default Reveal;
