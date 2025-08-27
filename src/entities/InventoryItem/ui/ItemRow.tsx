import { memo, type FC, type ReactNode } from 'react'
import { isImageUrl } from '../utils/isImageUrl'
import Image from '@shared/ui/Image/Image'

import styles from './InventoryTable.module.scss'

type ItemRowProps = { 
  name: string,
  icon: string,
  weight: number,
  removeBtn: ReactNode,
  counter: ReactNode,
}

const ItemRow: FC<ItemRowProps> = memo(({ name, weight, icon, removeBtn, counter }) => {
  return (
    <tr className={styles.tableRow}>
      <td>
        <div className={styles.icon} aria-label={name}>
          { isImageUrl(icon) ? 
            <Image className={styles.image} src={icon} alt={`icon ${name}`}/> :
            icon
          }
        </div>
      </td>
      <td className={styles.name}>{name}</td>
      <td>
        {counter}
      </td>
      <td className={styles.weigthCell}>
        <span className={styles.badge}>{weight.toFixed(2)} кг</span>
      </td>
      <td className={styles.toRight}>
        {removeBtn}
      </td>
    </tr>
  )
})

export default memo(ItemRow);