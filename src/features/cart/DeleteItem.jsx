import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(id));
  }

  return (
    <Button
      onClick={handleDeleteItem}
      className="bg-red-400 rounded-full text-slate-700"
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
