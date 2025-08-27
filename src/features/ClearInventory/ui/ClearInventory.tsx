import { clear } from "@entities/InventoryItem";
import { memo, type FC } from "react";
import { toast } from "react-toastify";
import { SUCCEESS_CLEAR_TEXT } from "@shared/model";
import useAppDispatch from "@shared/redux/hook";
import Button from "@shared/ui/Button/Button";

type ClearInventoryProps = {
    className?: string
}

const ClearInventory: FC<ClearInventoryProps> = ({ className = "" }) => {
    const dispatch = useAppDispatch();

    const clearInventoryHandler = () => {
        dispatch(clear());
        toast.success(SUCCEESS_CLEAR_TEXT);
    };
    
    return (
        <Button className={className} typeStyle="danger" onClick={clearInventoryHandler}>Очистить инвентарь</Button>
    )
}

export default memo(ClearInventory);