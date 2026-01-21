import { defineRecipe } from "@chakra-ui/react";

/**
 * With Chakra, you can define a new custom recipe to avoid inline css prop
 */
export const searchRecipe = defineRecipe({
  // Define base styles
  base: {
    rounded: "full",
    borderWidth: "1px",
    borderColor: "gray.800",
    transition: "all .2s ease",
    _hover: {
      borderColor: "gray.500",
      bg: "gray.800",
    },
    _focus: {
      borderColor: "gray.500",
    },
  },
});
