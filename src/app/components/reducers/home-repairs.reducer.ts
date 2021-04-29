import { Action, createReducer, on } from "@ngrx/store";
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { HomeRepairModel } from "src/app/models";
import * as actions from '../actions/home-repair.actions';

export interface HomeRepairState extends EntityState<HomeRepairModel> {

}

export const adapter = createEntityAdapter<HomeRepairModel>();

const initialState: HomeRepairState = {
  ids: ['1'],
  entities: {
    '1': { id: '1', item: 'Clean Garage', assignedTo: 'jeff@aol.com', completed: false }
  }
}

const myReducer = createReducer(
  initialState,
  on(actions.itemAdded, (oldState, action) => adapter.addOne(action.payload, oldState)),
  on(actions.newItemRequestSucceeded, (oldState, action) => adapter.updateOne({
    id: action.oldId,
    changes: {
      id: action.item.id
    }
  }, oldState))
)




export function reducer(state: HomeRepairState, action: Action): HomeRepairState {
  return myReducer(state, action);
}
