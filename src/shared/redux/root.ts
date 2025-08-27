
import { inventoryReducer } from '@entities/InventoryItem/';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    inventoryReducer
})

export type RootState = ReturnType<typeof rootReducer>