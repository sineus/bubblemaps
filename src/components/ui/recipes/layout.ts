import { defineRecipe } from "@chakra-ui/react";

export const layoutRecipe = defineRecipe({
  base: {
    h: "100dvh",
    display: "flex",
    flexDirection: "column",
    py: "8",
    gap: "6",
  },
});
