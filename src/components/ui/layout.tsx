import { Container, useRecipe } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

export function Layout(props: PropsWithChildren) {
  const recipe = useRecipe({ key: "layout" });
  const styles = recipe();

  return <Container css={styles}>{props.children}</Container>;
}
