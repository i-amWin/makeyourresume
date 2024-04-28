import React from "react";

type ShowProps = {
  when: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export const Show = ({ when, fallback = null, children }: ShowProps) => {
  return <>{when ? children : fallback}</>;
};
