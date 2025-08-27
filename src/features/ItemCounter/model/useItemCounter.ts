import { useRef } from "react";
import { useDebounce } from "@shared/model/useDebounce";
import { toast } from "react-toastify";
import { decrease, increase, setQuantity } from "@entities/InventoryItem";
import { SUCCESS_CHANGE_COUNT_TEXT } from "@shared/model";
import useAppDispatch from "@shared/redux/hook";

export const useItemCounter = (id: string, quantity: number) => {
    const dispatch = useAppDispatch();
    const userAction = useRef(false);

    useDebounce(() => {
        if (userAction.current) {
            toast.success(SUCCESS_CHANGE_COUNT_TEXT);
            userAction.current = false;
        }
    }, 300, [quantity]);

    const increaseItem = () => {
        userAction.current = true;
        dispatch(increase({ id }));
    };

    const decreaseItem = () => {
        userAction.current = true;
        dispatch(decrease({ id }));
    };

    const changeQuantity = (value: number) => {
        if (Number.isFinite(value)) {
            userAction.current = true;
            dispatch(setQuantity({ id, quantity: value }));
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeQuantity(Number(e.target.value));
    };

    return {
        quantity,
        increaseItem,
        decreaseItem,
        onChange,
    };
};
