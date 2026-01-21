import { useQuery } from "@tanstack/react-query";
import { searchResponseSchema } from "./schema";

/**
 * Search token pair with the help of DEX Screener
 * @param token token to search (ex: SOL/USDC)
 */
export async function searchTokenByPair(token: string) {
  const url = new URL(`https://api.dexscreener.com/latest/dex/search`);
  url.searchParams.append("q", token);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch from DexScreener");
  }

  const data = await res.json();
  return searchResponseSchema.parse(data).pairs;
}

/**
 * Create hook to use with tanstack query
 * @param token token to search (ex: SOL/USDC)
 */
export function useSearchTokenByPair(token: string) {
  return useQuery({
    queryKey: ["dexscreener:search:pair", token],
    queryFn: () => {
      return searchTokenByPair(token);
    },
  });
}
