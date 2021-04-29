import { createAction, props } from "@ngrx/store";
import { HomeRepairModel } from "src/app/models";

// This is the first step in doing this syncronously.  UI Blocker required..... gross
// export const newItemRequest = createAction(
//   '[home repairs] new item requested',
//   props<{ props }>()
// );

let id = 99;
export const itemAdded = createAction(
  '[home repairs] new item added',
  ({ item, project, completed, assignedTo }: ItemAddRequest) => ({
    payload: {
      id: 'McLovin' + id++,
      item, project, completed, assignedTo
    } as HomeRepairModel
  })
);

export const newItemRequestSucceeded = createAction(
  '[home repair] new item request succeeded',
  props<{ item: HomeRepairModel, oldId: string }>()
)

export interface ItemAddRequest { item: string, project?: string, completed: boolean, assignedTo: string }
