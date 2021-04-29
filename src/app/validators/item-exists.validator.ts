import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { selectItemExists } from "../components/reducers";


@Injectable({ providedIn: 'root' })
export class ItemExistsValidator implements AsyncValidator {
  exists: boolean = false;

  constructor(private store: Store) {
    store.select(selectItemExists).pipe(
      tap(exists => this.exists = exists)
    ).subscribe();
  }

  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this.exists ? of({ itemExists: true }) : null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

}
