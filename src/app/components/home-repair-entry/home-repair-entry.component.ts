import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-repair-entry',
  templateUrl: './home-repair-entry.component.html',
  styleUrls: ['./home-repair-entry.component.css']
})
export class HomeRepairEntryComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      item: ['', []],
      project: ['Kitchen', []],
      completed: [false, []],
      assignedTo: ['', []]
    })
  }

  submit() {
    console.log(this.form.value);
  }
}
