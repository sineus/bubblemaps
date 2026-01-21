import type { DexScreenerTokenPair } from "@/hooks";
import { formatPrice } from "@/utils";
import { Table } from "@chakra-ui/react";

/**
 * Component to display the token item in token list, allow you to format data without impacting the performance
 */
export function TokenListItem({ pair }: { pair: DexScreenerTokenPair }) {
  const price = formatPrice(+pair.priceNative);
  const liquidity = formatPrice(pair.liquidity.usd);
  const volume = formatPrice(pair.volume.h24);
  const marketCap = formatPrice(pair.marketCap);
  const fdv = formatPrice(+pair.fdv);

  const navigateToDexScreenerToken = () => {
    window.open(pair.url, "_blank");
  };

  return (
    <Table.Row onClick={navigateToDexScreenerToken} cursor="pointer">
      <Table.Cell>
        {pair.baseToken.symbol} / {pair.quoteToken.symbol}
      </Table.Cell>
      <Table.Cell>{price}</Table.Cell>
      <Table.Cell>{volume}</Table.Cell>
      <Table.Cell>{liquidity}</Table.Cell>
      <Table.Cell color={pair.priceChange?.h6 > 0 ? "green.500" : "red.500"}>
        {pair.priceChange?.h6 ?? 0}%
      </Table.Cell>
      <Table.Cell color={pair.priceChange?.h24 > 0 ? "green.500" : "red.500"}>
        {pair.priceChange?.h24 ?? 0}%
      </Table.Cell>
      <Table.Cell>{marketCap}</Table.Cell>
      <Table.Cell>{fdv}</Table.Cell>
    </Table.Row>
  );
}
