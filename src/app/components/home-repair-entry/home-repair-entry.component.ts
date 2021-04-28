import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeRepairModel } from 'src/app/models';

@Component({
  selector: 'app-home-repair-entry',
  templateUrl: './home-repair-entry.component.html',
  styleUrls: ['./home-repair-entry.component.css']
})
export class HomeRepairEntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<HomeRepairModel>();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      item: ['', [Validators.required, Validators.minLength(5)]],
      project: ['Kitchen', []],
      completed: [false, []],
      assignedTo: ['', [Validators.required, Validators.email]]
    })
  }


  get item(): AbstractControl { return this.form.get('item'); }
  get project(): AbstractControl { return this.form.get('project'); }
  get completed(): AbstractControl { return this.form.get('completed'); }
  get assignedTo(): AbstractControl { return this.form.get('assignedTo'); }

  submit() {
    if (this.form.valid) {
      this.itemAdded.emit(this.form.value);
    }
  }
}
