import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HomeRepairModel } from 'src/app/models';
import { ItemExistsValidator } from 'src/app/validators/item-exists.validator';

@Component({
  selector: 'app-home-repair-entry',
  templateUrl: './home-repair-entry.component.html',
  styleUrls: ['./home-repair-entry.component.css']
})
export class HomeRepairEntryComponent implements OnInit, OnDestroy {

  @Output() itemAdded = new EventEmitter<HomeRepairModel>();
  form: FormGroup;
  subscriptions: Subscription[];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      item: ['', [Validators.required, Validators.minLength(5)], [ItemExistsValidator]],
      project: ['Kitchen', [invalidProject("mowing")]],
      completed: [false, []],
      assignedTo: ['', [Validators.required, Validators.email]]
    }, {
      validators: [henryDoesDishesPoorly()]
    });

    this.subscriptions.push(this.form.valueChanges.pipe(
      tap(val => console.log(val))
    ).subscribe());

    this.item.setAsyncValidators(ItemExistsValidator)
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
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

// This is a function that returns a function.  This allows you to input params
export function invalidProject(project: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const bad = control.value === project;
    return bad ? {
      invalidProject: {
        message: `${project} will never happen`
      }
    } : null;
  }
}

function henryDoesDishesPoorly(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const who = control.get('assignedTo').value;
    const item = control.get('item').value;
    return who === 'henry@aol.com' && item === 'dishes' ? { 'henryDoesDishesPoorly': true } : null;
  }
}
