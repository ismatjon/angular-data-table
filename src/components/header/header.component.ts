import { Component, Inject, forwardRef } from '@angular/core';
import { DataTable } from '../table/table.component';

@Component({
  selector: 'data-table-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    '(document:click)': '_closeSelector()'
  }
})
export class DataTableHeader {
  columnSelectorOpen = false;

  _closeSelector() {
    this.columnSelectorOpen = false;
  }

  constructor(
    @Inject(forwardRef(() => DataTable)) public dataTable: DataTable
  ) {}
}
