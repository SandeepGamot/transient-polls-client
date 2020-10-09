export default (current, total) => {
  return total === 0 ? 0 : ((100 * current) / total).toFixed(1);
};
