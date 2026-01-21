/**
 * Token list columns schema, I could use tanstack table or another library to create more complexe table system
 */
export const COLUMNS = [
  { header: "Token", skeletonWidth: "140px" },
  { header: "Price", skeletonWidth: "80px" },
  { header: "Volume", skeletonWidth: "80px" },
  { header: "Liquidity", skeletonWidth: "90px" },
  { header: "6H", skeletonWidth: "60px" },
  { header: "24H", skeletonWidth: "60px" },
  { header: "Marketcap", skeletonWidth: "100px" },
  { header: "FDV", skeletonWidth: "90px" },
] as const;
