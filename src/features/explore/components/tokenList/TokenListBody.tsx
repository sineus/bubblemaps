import type { DexScreenerTokenPair } from "@/hooks";
import { Table, Text } from "@chakra-ui/react";
import { TokenListItem } from "./TokenListItem";
import { TokenListSkeleton } from "./TokenListSkeleton";

export type TokenListBodyProps = {
  isError: boolean;
  isLoading: boolean;
  pairs: DexScreenerTokenPair[];
};

/**
 * Component to display the body of token list with different state (loading, error, empty or success)
 * @returns
 */
export function TokenListBody({
  isError,
  isLoading,
  pairs,
}: TokenListBodyProps) {
  const isErrorOrEmpty = isError || pairs?.length === 0;

  if (isLoading) {
    return <TokenListSkeleton rows={10} />;
  }

  if (isErrorOrEmpty) {
    return (
      <Table.Row>
        <Table.Cell colSpan={100} align="center" borderBottomWidth="0px">
          <Text color="gray.500" textAlign="center">
            No token found
          </Text>
        </Table.Cell>
      </Table.Row>
    );
  }

  return pairs.map((pair) => (
    <TokenListItem pair={pair} key={pair.pairAddress} />
  ));
}
