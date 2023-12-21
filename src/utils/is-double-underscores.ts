export const isDoubleUnderscores = (string: string) => {
  if (string === "--") {
    return true;
  }
  return false;
};
