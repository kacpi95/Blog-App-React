export const dateToStr = (date) => {
  const mm = (date.getMonth() + 1).toString();
  const dd = date.getDate().toString();
  const yyyy = date.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
};
