import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { InventoryItem, AddPayload, RemovePayload, ChangeQuantityPayload, SetQuantityPayload } from './types'

type InventorySchema = {
  items: Record<string, InventoryItem>;
}

const initialState: InventorySchema = {
  items: {}
}

const slice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AddPayload>) => {
      const { item, quantity = 1 } = action.payload
      const existing = Object.values(state.items).find(
        i =>
          i.name === item.name &&
          i.icon === item.icon &&
          i.weight === item.weight
      );

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items[item.id] = { ...item, quantity };
      }
    },
    removeItem: (state, action: PayloadAction<RemovePayload>) => {
      delete state.items[action.payload.id]
    },
    increase: (state, action: PayloadAction<ChangeQuantityPayload>) => {
      const item = state.items[action.payload.id]
      if (item) item.quantity += (action.payload.delta ?? 1)
    },
    decrease: (state, action: PayloadAction<ChangeQuantityPayload>) => {
      const item = state.items[action.payload.id]
      if (!item) return
      const val = item.quantity - (action.payload.delta ?? 1)
      if (val <= 0) {
        delete state.items[action.payload.id]
      } else {
        item.quantity = val
      }
    },
    setQuantity: (state, action: PayloadAction<SetQuantityPayload>) => {
      const item = state.items[action.payload.id]
      if (!item) return
      if (action.payload.quantity <= 0) {
        delete state.items[action.payload.id]
      } else {
        item.quantity = Math.floor(action.payload.quantity)
      }
    },
    clear: (state) => {
      state.items = {}
    }
  }
})

export const inventoryReducer = slice.reducer
export const { addItem, removeItem, increase, decrease, setQuantity, clear } = slice.actions
