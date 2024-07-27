export const formatDate = (timestamp, duration) => {
  const startDate = new Date(timestamp * 1000);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + duration - 1);

//   const startOptions = { month: "short", day: "numeric" };
  const endOptions = { day: "numeric", month: "short", year: "numeric" };

//   const startString = startDate.toLocaleDateString(undefined, startOptions);
  const endString = endDate.toLocaleDateString(undefined, endOptions);

  return `${startDate.getDate()}-${endString}`;
};
