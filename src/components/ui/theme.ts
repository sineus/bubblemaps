import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { layoutRecipe, searchRecipe } from "./recipes";

// Here you can customize chakra theme and add new recipes
const customConfig = defineConfig({
  theme: {
    recipes: {
      search: searchRecipe,
      layout: layoutRecipe,
    },
  },
});

// Create new theme with merged default config
export const system = createSystem(defaultConfig, customConfig);
