const getRandomInt = (...args) => {
  const defaultRange = [1, 30];
  let min; let max;
  if (args.length === 0) [min, max] = defaultRange;
  if (args.length === 1) [min, max] = [defaultRange[0], args[0]];
  if (args.length > 1) [min, max] = args;
  return Math.floor(Math.random() * max) + min;
};

export default getRandomInt;
