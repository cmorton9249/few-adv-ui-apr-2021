import { Action, createReducer } from "@ngrx/store";
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { HomeRepairModel } from "src/app/models";

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
  initialState
)




export function reducer(state: HomeRepairState, action: Action): HomeRepairState {
  return myReducer(state, action);
}
