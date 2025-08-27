import type { FC, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './InventoryTable.module.scss'

type InventoryTableProps = {
    items: ReactNode[],
    clearInventory: ReactNode,
    addItemForm: ReactNode,
    totalCount: number,
    totalWeight: number
}

const InventoryTable: FC<InventoryTableProps> = ({ items, clearInventory, totalCount, totalWeight, addItemForm }) => {
  return (
    <div className={styles.inventoryTable}>
      <div className={styles.card}>
        {addItemForm}
      </div>
      <div className={clsx(styles.card, styles.tableCard)}>
        <table className={styles.table} role="table" aria-label="Инвентарь">
          { items.length > 0 && 
            <thead>
              <tr>
                <th className={styles.tableHead}>Картинка</th>
                <th className={styles.tableHead}>Название</th>
                <th className={styles.tableHead}>Количество</th>
                <th className={styles.tableHead}>Вес (итог)</th>
                <th className={clsx(styles.tableHead, styles.toRight)}>Действия</th>
              </tr>
            </thead>
          }
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={5} className={styles.empty}>Пока пусто. Добавьте предметы выше.</td></tr>
            )}
            {items}
          </tbody>
        </table>
      </div>

      <div className={clsx(styles.summary, styles.card)}>
        <div>
          <span className={styles.badge} title="Всего предметов">Всего: <b>{totalCount}</b></span>
          <span className={styles.badge} title="Суммарный вес">Вес: <b>{totalWeight.toFixed(2)} кг</b></span>
        </div>
        { clearInventory }
      </div>
    </div>
  )
}

export default InventoryTable;
