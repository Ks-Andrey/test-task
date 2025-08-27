import { useSelector } from 'react-redux'
import { InventoryTableModel, selectItems, selectTotals } from '@entities/InventoryItem'
import { ClearInventory } from '@features/ClearInventory'
import { AddItemForm } from '@features/AddItemForm'
import ItemRow from './ItemRow'

const InventoryTable = () => {
  const items = useSelector(selectItems)
  const { totalCount, totalWeight } = useSelector(selectTotals);

  return (
    <InventoryTableModel
      addItemForm={
        <AddItemForm />
      }
      items={
        items.map(item => <ItemRow key={item.id} {...item} />)
      }
      clearInventory={
        <ClearInventory />
      }
      totalCount={totalCount}
      totalWeight={totalWeight} />
  )
}

export default InventoryTable;
