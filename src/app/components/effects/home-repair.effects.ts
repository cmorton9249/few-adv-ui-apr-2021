import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map } from 'rxjs/operators';
import { HomeRepairModel } from "src/app/models";
import * as actions from '../actions/home-repair.actions';

@Injectable()
export class HomeRepairEffects {

  // itemAdded => (*send to the API*) => newItemRequestSucceeded
  saveItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.itemAdded),
      switchMap(action => this.client.post<HomeRepairModel>('http://localhost:5000/items', action.payload)
        .pipe(
          map(response => actions.newItemRequestSucceeded({ item: response, oldId: action.payload.id }))
        )
      )
    )
    , { dispatch: true } // this means return an action.  False means "this action stream is done here"
  )

  constructor(private client: HttpClient, private actions$: Actions) { }
}
