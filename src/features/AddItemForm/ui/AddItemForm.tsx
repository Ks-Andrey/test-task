import { memo } from "react";
import Input from "@shared/ui/Input/Input";
import Button from "@shared/ui/Button/Button";
import styles from "./AddItemForm.module.scss";
import { useAddItemForm } from "../model/useAddItemForm";

const AddItemForm = () => {
  const { refs, handleSubmit } = useAddItemForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input ref={refs.nameRef} className="input" placeholder="Название" required />
      <Input ref={refs.iconRef} className="input" placeholder="Иконка (emoji или URL)" />
      <Input ref={refs.weightRef} className="number" type="number" step="0.1" min="0" placeholder="Вес, кг" />
      <Input ref={refs.qtyRef} className="number" type="number" min="1" placeholder="Кол-во" />
      <Button className="button buttonAccent" type="submit">Добавить</Button>
    </form>
  );
};

export default memo(AddItemForm);
