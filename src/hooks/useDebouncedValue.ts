import { useEffect, useState } from "react";

/**
 * Hook to debounce a value, to avoid make function call on each change
 * @param value value to debounce
 * @param delay delay to debounce
 */
export function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounced;
}
