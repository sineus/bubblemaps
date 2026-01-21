import { Layout, Search } from "@/components";
import { useSearchFilterStore } from "@/stores";
import { Heading, Stack } from "@chakra-ui/react";
import { useShallow } from "zustand/shallow";
import { TokenList } from "../components";

/**
 * Explore screen component, screen component is module page in feature based architecture
 */
export function ExploreScreen() {
  // Use shallow hook from zustand to avoid multiple re-render
  const { setQuery, query } = useSearchFilterStore(
    useShallow((state) => ({
      setQuery: state.setQuery,
      query: state.query,
    })),
  );

  const search = (value: string) => {
    setQuery(value);
  };

  const clear = () => {
    setQuery("");
  };

  return (
    <Layout>
      <Stack gap="4">
        <Heading size="4xl">Token explorer</Heading>
        <Search
          placeholder="Search tokens..."
          value={query}
          onChange={search}
          onClear={clear}
        />
      </Stack>
      <TokenList />
    </Layout>
  );
}
