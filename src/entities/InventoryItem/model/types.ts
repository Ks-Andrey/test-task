export type ItemBase = {
  id: string;
  name: string;
  icon: string;
  weight: number;
}

export type InventoryItem = ItemBase & {
  quantity: number;
}

export type AddPayload = {
  item: ItemBase;
  quantity?: number;
}

export type RemovePayload = {
  id: string
}

export type ChangeQuantityPayload = {
  id: string
  delta?: number
}

export type SetQuantityPayload = {
  id: string
  quantity: number
}