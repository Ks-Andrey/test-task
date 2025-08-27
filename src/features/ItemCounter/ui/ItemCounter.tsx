import { memo, type FC } from "react";
import Button from "@shared/ui/Button/Button";
import Input from "@shared/ui/Input/Input";
import styles from "./ItemCounter.module.scss";
import { useItemCounter } from '../model/useItemCounter';

type ItemCounterProps = {
  id: string;
  quantity: number;
  className?: string;
};

const ItemCounter: FC<ItemCounterProps> = ({ id, quantity, className = "" }) => {
  const { increaseItem, decreaseItem, onChange } = useItemCounter(id, quantity);

  return (
    <div className={className}>
      <Button onClick={decreaseItem}>-</Button>
      <Input
        className={styles.counterInput}
        type="number"
        value={quantity}
        min={0}
        onChange={onChange}
      />
      <Button onClick={increaseItem}>+</Button>
    </div>
  );
};

export default memo(ItemCounter);