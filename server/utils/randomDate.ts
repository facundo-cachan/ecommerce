const randomDateAfterDate = (start, days) => {
  return new Date(start.getTime() + Math.random() * days * 24 * 60 * 60 * 1000);
};

export { randomDateAfterDate as default };
