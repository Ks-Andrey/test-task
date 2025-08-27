import { removeItem } from "@entities/InventoryItem";
import { SUCCEESS_REMOVE_TEXT } from "@shared/model";
import { memo, type FC } from "react";
import { toast } from "react-toastify";
import useAppDispatch from "@shared/redux/hook";
import Button from "@shared/ui/Button/Button";

type ItemCounterProps = {
    id: string,
    className?: string
}

const RemoveItem: FC<ItemCounterProps> = ({ id, className = "" }) => {
    const dispatch = useAppDispatch();

    const removeItemHandler = () => {
        dispatch(removeItem({ id }));
        toast.success(SUCCEESS_REMOVE_TEXT);
    }

    return (
        <Button className={className} onClick={removeItemHandler}>Удалить</Button>
    )
}

export default memo(RemoveItem);