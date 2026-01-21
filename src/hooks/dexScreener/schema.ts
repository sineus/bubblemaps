import { z } from "zod";

/**
 * DEX Screener API schema, allow you to validate the response from API before use in component
 * @note This API is inconsistent, sometimes, fields are empty or missing
 */
const txnsSchema = z.object({
  buys: z.number(),
  sells: z.number(),
});

const tokenSchema = z.object({
  address: z.string(),
  name: z.string(),
  symbol: z.string(),
});

const socialSchema = z.looseObject({
  platform: z.string().optional(),
  handle: z.string().optional(),
});

const pairSchema = z.looseObject({
  chainId: z.string(),
  dexId: z.string(),
  url: z.string(),
  pairAddress: z.string(),
  labels: z.array(z.string()).optional().default([]),
  baseToken: tokenSchema,
  quoteToken: tokenSchema,
  priceNative: z.string().optional().default("0"),
  priceUsd: z.string().optional(),
  txns: z
    .object({
      m5: txnsSchema.optional(),
      h1: txnsSchema.optional(),
      h6: txnsSchema.optional(),
      h24: txnsSchema.optional(),
    })
    .optional(),
  volume: z
    .object({
      m5: z.number().optional().default(0),
      h1: z.number().optional().default(0),
      h6: z.number().optional().default(0),
      h24: z.number().optional().default(0),
    })
    .optional()
    .default({
      m5: 0,
      h1: 0,
      h6: 0,
      h24: 0,
    }),
  priceChange: z
    .object({
      m5: z.number().optional().default(0),
      h1: z.number().optional().default(0),
      h6: z.number().optional().default(0),
      h24: z.number().optional().default(0),
    })
    .optional()
    .default({
      m5: 0,
      h1: 0,
      h6: 0,
      h24: 0,
    }),
  liquidity: z
    .object({
      usd: z.number().optional().default(0),
      base: z.number().optional().default(0),
      quote: z.number().optional().default(0),
    })
    .optional()
    .default({
      usd: 0,
      base: 0,
      quote: 0,
    }),
  fdv: z.number().optional().default(0),
  marketCap: z.number().optional().default(0),
  pairCreatedAt: z.number().optional(),
  info: z
    .object({
      imageUrl: z.string().optional(),
      websites: z
        .array(z.object({ url: z.string() }))
        .optional()
        .default([]),
      socials: z.array(socialSchema).optional().default([]),
    })
    .optional(),
  boosts: z
    .object({
      active: z.number(),
    })
    .optional(),
});

const searchResponseSchema = z.object({
  schemaVersion: z.string(),
  pairs: z.array(pairSchema),
});

export type DexScreenerTokenPair = z.infer<typeof pairSchema>;
export type DexScreenerSearchTokenPairResponse = z.infer<
  typeof searchResponseSchema
>;

export { pairSchema, searchResponseSchema };
