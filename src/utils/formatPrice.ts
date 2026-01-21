/**
 * Format raw USD price
 * @param price price to format
 */
export function formatPrice(price: number) {
  const options: Intl.NumberFormatOptions = {
    maximumFractionDigits: 10,
    currency: "USD",
    style: "currency",
  };

  return new Intl.NumberFormat("en-US", options).format(price);
}
