import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { itemAdded } from 'src/app/components/actions/home-repair.actions';
import { AppState, selectAllHomeRepairs } from 'src/app/components/reducers';
import { HomeRepairModel } from 'src/app/models';

@Component({
  selector: 'app-home-repairs',
  templateUrl: './home-repairs.component.html',
  styleUrls: ['./home-repairs.component.css']
})
export class HomeRepairsComponent implements OnInit {
  stuffToDo$: Observable<HomeRepairModel[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.stuffToDo$ = this.store.select(selectAllHomeRepairs)
  }

  onItemAdded(item: HomeRepairModel) {
    this.store.dispatch(itemAdded(item))
  }
}
