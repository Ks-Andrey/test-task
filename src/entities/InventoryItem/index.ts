import { inventoryReducer, addItem, removeItem, increase, decrease, setQuantity, clear } from "./model/slice";
import { selectItemsMap, selectItems, makeSelectItemById, selectTotals } from './model/selectors'
import type { InventoryItem } from './model/types';
import ItemRowModel from "./ui/ItemRow";
import InventoryTableModel from "./ui/InventoryTable";

export type { InventoryItem }

export { 
    ItemRowModel,
    InventoryTableModel,

    inventoryReducer,

    addItem,
    removeItem,
    increase,
    decrease,
    setQuantity,
    clear,

    selectItemsMap,
    selectItems,
    makeSelectItemById,
    selectTotals
} 