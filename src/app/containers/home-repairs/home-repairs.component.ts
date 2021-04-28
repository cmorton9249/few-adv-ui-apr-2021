import { Component, OnInit } from '@angular/core';
import { HomeRepairModel } from 'src/app/models';

@Component({
  selector: 'app-home-repairs',
  templateUrl: './home-repairs.component.html',
  styleUrls: ['./home-repairs.component.css']
})
export class HomeRepairsComponent implements OnInit {
  id: 3;
  stuffToDo: HomeRepairModel[] = [
    { id: '1', item: 'Clean Garage', completed: false, assignedTo: 'jeff@hypertheory.com' },
    { id: '2', item: 'Mow Grass', completed: false, assignedTo: 'Brett@aol.com', project: 'Yard' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded(item: HomeRepairModel) {
    item = { id: this.id++, ...item };
    this.stuffToDo = [item, ...this.stuffToDo];
  }
}
