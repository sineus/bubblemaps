import { Skeleton, Table } from "@chakra-ui/react";
import { COLUMNS } from "./constants";

/**
 * Component to display token list skeleton when loading state is enabled
 */
export function TokenListSkeleton({ rows = 10 }) {
  return Array.from({ length: rows }).map((_, i) => (
    <Table.Row key={i}>
      {COLUMNS.map((col) => (
        <Table.Cell key={col.header}>
          <Skeleton w={col.skeletonWidth} h="20px" />
        </Table.Cell>
      ))}
    </Table.Row>
  ));
}
