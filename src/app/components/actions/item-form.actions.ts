import { createAction, props } from "@ngrx/store";
import { HomeRepairModel } from "../models";

export const updateData = createAction(
  '[item form] item form data updated',
  props<{ payload: HomeRepairModel }>()
);

export const clearTempData = createAction(
  '[item form] clear temp data'
);
