import React from "react";

type ForProps<T> = {
  each: T[];
  children: (item: T, index: number) => React.ReactNode;
};

export const For = <T,>({ each, children }: ForProps<T>) => {
  return each.map(children);
};
