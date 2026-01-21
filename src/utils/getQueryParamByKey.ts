/**
 * Get query params from url
 * @param key
 * @returns
 */
export function getQueryParamByKey(key: string) {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.get(key) ?? "";
}
