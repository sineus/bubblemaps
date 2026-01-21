/**
 * Add new query in url query params with key and value
 * @param key param key
 * @param value param value
 */
export function setQueryParam(key: string, value: string) {
  const searchParams = new URLSearchParams(window.location.search);

  if (value) {
    searchParams.set(key, value);
  } else {
    searchParams.delete(key);
  }

  const query = searchParams.toString();
  window.history.replaceState(
    null,
    "",
    query ? `?${query}` : window.location.pathname,
  );
}
