import { createAction, props } from "@ngrx/store";

export const changeItemActive = createAction(
    '[NavBar] Change Item Active',
    props<{ id: number }>()
)

export const selectItem = createAction(
    '[NavBar] Select Item',
    props<{ id: number }>()
)

export const deselectAllItem = createAction(
    '[NavBar] Deselect All'
)