import { useDebouncedValue, useSearchTokenByPair } from "@/hooks";
import { useSearchFilterStore } from "@/stores";
import { Table } from "@chakra-ui/react";
import { COLUMNS } from "./constants";
import { TokenListBody } from "./TokenListBody";

/**
 * Component to display token list
 */
export function TokenList() {
  // Get query from the store
  const query = useSearchFilterStore((state) => state.query);
  // Debounce it
  const debouncedQuery = useDebouncedValue(query, 300);

  // Call API to get the token list result
  const {
    data: pairs = [],
    isLoading,
    isError,
  } = useSearchTokenByPair(debouncedQuery);

  return (
    <Table.ScrollArea borderWidth="1px" rounded="lg">
      <Table.Root stickyHeader size="lg" interactive>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            {COLUMNS.map((col) => (
              <Table.ColumnHeader
                key={col.header}
                color="gray.500"
                fontSize="sm"
              >
                {col.header}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <TokenListBody
            pairs={pairs}
            isLoading={isLoading}
            isError={isError}
          />
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
