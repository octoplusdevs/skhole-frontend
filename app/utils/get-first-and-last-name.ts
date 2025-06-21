export const getFirstAndLastName = (content: string) => {
  const fullName = content?.split(" ");
  const firstAndLastName =
    fullName && fullName[0].concat(" ", fullName[fullName.length - 1]);

  return firstAndLastName;
};
