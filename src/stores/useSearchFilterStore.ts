import { getQueryParamByKey, setQueryParam } from "@/utils";
import { create } from "zustand";

type UseSearchFilterStore = {
  query: string;
  setQuery(query: string): void;
};

/**
 * Search filter store, this store is used to filter a list with a query
 * You can add more kind of filters like "minimum liquidity" or "minimum volume"
 */
export const useSearchFilterStore = create<UseSearchFilterStore>((set) => ({
  query: getQueryParamByKey("query"),
  setQuery(query: string) {
    set((s) => ({
      ...s,
      query,
    }));

    setQueryParam("query", query);
  },
}));
