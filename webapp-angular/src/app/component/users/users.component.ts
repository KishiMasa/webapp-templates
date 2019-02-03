import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UsersFilterComponent } from '../users-filter/users-filter.component';
import { Filter } from '../../model/filter';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[];
  filter: Filter = new Filter();

  constructor() { }

  ngOnInit() {
  }

  isMatched(filter: Filter, value: string) {
    if ( filter.selected === 'all' ) {
      return true;
    }
    return filter.selected === value;
  }

  getUsers() {
    this.users = [
      { id: '0001', displayname: '東京太郎', sex: 'male', note: '仕事中' },
      { id: '0002', displayname: '神奈川花子', sex: 'female', note: '休憩中'},
      { id: '0003', displayname: '千葉二郎', sex: 'male', note: '退社'},
    ];
    return this.users;
  }
}
