import { DataTableRow } from '../components/row/row.component';
import { DataTableColumn } from '../components/column/column.component';

export type CellCallback = (
  item: any,
  row: DataTableRow,
  column: DataTableColumn,
  index: number
) => string;
