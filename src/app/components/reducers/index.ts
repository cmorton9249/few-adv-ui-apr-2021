import { ActionReducerMap, createSelector } from '@ngrx/store'
import * as fromHomeRepairs from './home-repairs.reducer'
import * as itemFormTemp from './item-form-temp.reducer'

export interface AppState {
  homeRepairs: fromHomeRepairs.HomeRepairState,
  itemFormTemp: itemFormTemp.ItemFormTempState
}

export const reducers: ActionReducerMap<AppState> = {
  homeRepairs: fromHomeRepairs.reducer,
  itemFormTemp: itemFormTemp.reducer
}

//selector "per" branch
const selectHomeRepairs = (state: AppState) => state.homeRepairs;
const selectItemFormTemp = (state: AppState) => state.itemFormTemp;

const { selectAll: selectAllHomeRepairsArray } = fromHomeRepairs.adapter.getSelectors(selectHomeRepairs);

export const selectAllHomeRepairs = createSelector(
  selectAllHomeRepairsArray,
  a => a
)

const selectCurrentItemValue = createSelector(
  selectItemFormTemp,
  f => f.value
)

const selectCurrentItemOnForm = createSelector(
  selectCurrentItemValue,
  f => f.item
)

export const selectItemExists = createSelector(
  selectAllHomeRepairsArray,
  selectCurrentItemOnForm,
  (repairs, item) => repairs.filter(repair => repair.item === item).length > 0
)
