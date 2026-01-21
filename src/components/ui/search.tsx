import { IconButton, Input, InputGroup, useRecipe } from "@chakra-ui/react";
import { LuSearch, LuX } from "react-icons/lu";

export type SearchProps = {
  placeholder: string;
  value: string;
  onChange(value: string): void;
  onClear(): void;
};

/**
 * Search component
 * @description This component is used for search in a list or navbar
 */
export function Search(props: SearchProps) {
  const { placeholder, value, onChange, onClear } = props;

  // To use chakra recipe, you must use this hook with recipe key and call it to get the system style object
  const recipe = useRecipe({ key: "search" });
  const styles = recipe();

  return (
    <InputGroup
      w="380px"
      startElement={<LuSearch size="18px" />}
      endElement={
        value?.length > 0 ? (
          <IconButton
            variant="subtle"
            size="xs"
            rounded="full"
            onClick={onClear}
            title="Clear"
          >
            <LuX />
          </IconButton>
        ) : null
      }
    >
      <Input
        variant="subtle"
        css={styles}
        placeholder={placeholder}
        value={value}
        size="lg"
        onChange={(evt) => onChange(evt.target.value)}
      />
    </InputGroup>
  );
}
