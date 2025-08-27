import Container from "@shared/ui/Container/Container";
import { Inventory } from "@widgets/Inventory";

import styles from './InventoryPage.module.scss'

const InventoryPage = () => {
  return (
    <Container className={styles.inventory}>
      <h1>Мини‑инвентарь</h1>
      <Inventory />
    </Container>
  )
}

export default InventoryPage;