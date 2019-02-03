import { Component, OnInit, Input} from '@angular/core';
import { Filter } from '../../model/filter';
import { filterQueryId } from '@angular/core/src/view/util';

@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.css']
})
export class UsersFilterComponent implements OnInit {
  @Input() filter: Filter;

  constructor() { }

  ngOnInit() {
    this.filter.selected = 'all';
  }

}
