import { useRef, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@entities/InventoryItem";
import { generateId } from "@entities/InventoryItem/utils/generateId";
import { validateItem } from "../utils/validateItem";
import { toast } from "react-toastify";
import { SUCCEESS_ADD_TEXT } from "@shared/model";

export const useAddItemForm = () => {
    const dispatch = useDispatch();

    const nameRef = useRef<HTMLInputElement>(null);
    const iconRef = useRef<HTMLInputElement>(null);
    const weightRef = useRef<HTMLInputElement>(null);
    const qtyRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const itemData = {
            name: nameRef.current?.value.trim() || "",
            icon: iconRef.current?.value.trim() || "📦",
            weight: Math.max(0.001, Number(weightRef.current?.value) || 0),
            quantity: Math.max(1, Math.floor(Number(qtyRef.current?.value) || 1)),
        };

        const validation = validateItem(itemData);
        if (!validation.valid) {
            toast.error(validation.error);
            return;
        }

        const id = generateId(itemData.name);
        const item = { id, ...itemData };
        dispatch(addItem({ item, quantity: itemData.quantity }));

        toast.success(SUCCEESS_ADD_TEXT);

        nameRef.current!.value = "";
        iconRef.current!.value = "";
        weightRef.current!.value = "";
        qtyRef.current!.value = "";
    };

    return {
        refs: { nameRef, iconRef, weightRef, qtyRef },
        handleSubmit,
    };
};
