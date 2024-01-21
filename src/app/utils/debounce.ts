/**
 * debounce - rate limit the function call
 * @param func callback function which run after delay
 * @param delay delay for debounce
 * @returns function
 */
const debounce = <Params extends any[]>(
  func: (...args: Params) => void,
  delay: number
): ((...args: Params) => void) => {
  let debounceTimer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;
