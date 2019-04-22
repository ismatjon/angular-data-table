import {
  Component,
  Input,
  Inject,
  forwardRef,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { DataTable } from '../table/table.component';

@Component({
  selector: '[dataTableRow]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class DataTableRow implements OnDestroy {
  @Input() item: any;
  @Input() index: number;

  _this = this; // FIXME is there no template keyword for this in angular 2?
  expanded: boolean;

  // row selection:

  private _selected: boolean;

  @Output() selectedChange = new EventEmitter();

  constructor(
    @Inject(forwardRef(() => DataTable)) public dataTable: DataTable
  ) {}

  get selected() {
    return this._selected;
  }

  set selected(selected) {
    this._selected = selected;
    this.selectedChange.emit(selected);
  }

  // other:

  get displayIndex() {
    if (this.dataTable.pagination) {
      return this.dataTable.displayParams.offset + this.index + 1;
    } else {
      return this.index + 1;
    }
  }

  getTooltip() {
    if (this.dataTable.rowTooltip) {
      return this.dataTable.rowTooltip(this.item, this, this.index);
    }
    return '';
  }

  ngOnDestroy() {
    this.selected = false;
  }
}
