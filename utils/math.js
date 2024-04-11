export const max = (a, b) => (a > b ? a : b);
export const min = (a, b) => {
  console.log("min");
  console.log(a);
  console.log(b);
  return a < b ? a : b;
};
