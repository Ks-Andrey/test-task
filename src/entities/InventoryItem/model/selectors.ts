import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '@shared/redux/root'
import type { InventoryItem } from './types'

export const selectItemsMap = (state: RootState) => state.inventoryReducer.items
export const selectItems = createSelector(selectItemsMap, (map): InventoryItem[] => Object.values(map));

export const makeSelectItemById = (id: string) => (state: RootState) => state.inventoryReducer.items[id]

export const selectTotals = createSelector(selectItems, (items) => {
  const totalCount = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  )
  const totalWeight = items.reduce(
    (acc, item) => acc + item.quantity * item.weight,
    0
  )
  return { totalCount, totalWeight }
})

export const selectIsEmpty = createSelector(
  selectItems,
  (items) => items.length === 0
)
