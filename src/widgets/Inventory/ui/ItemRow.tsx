import { ItemRowModel } from "@entities/InventoryItem";
import type { InventoryItem } from "@entities/InventoryItem/model/types";
import { ItemCounter } from "@features/ItemCounter";
import { RemoveItem } from "@features/RemoveItem";
import { memo, type FC } from "react";

type ItemRowProps = InventoryItem;

const ItemRow: FC<ItemRowProps> = ({ name, icon, weight, id, quantity }) => {
    return (
        <ItemRowModel
            name={name}
            icon={icon}
            weight={weight * quantity}
            counter={
                <ItemCounter
                    id={id}
                    quantity={quantity}
                />
            }
            removeBtn={
                <RemoveItem
                    id={id} />
            }
        />
    )
}  

export default memo(ItemRow);