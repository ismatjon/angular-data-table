import { DataTableRow } from '../components/row/row.component';

export type RowCallback = (
  item: any,
  row: DataTableRow,
  index: number
) => string;
