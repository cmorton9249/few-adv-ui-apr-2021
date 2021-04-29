import { Action, createReducer } from "@ngrx/store";
import { HomeRepairModel } from "src/app/models";

export interface ItemFormTempState {
  value: HomeRepairModel
}

const initialState: ItemFormTempState = {
  value: null
}

const myReducer = createReducer(
  initialState,

)

export function reducer(state: ItemFormTempState, action: Action): ItemFormTempState {
  return myReducer(state, action);
}
