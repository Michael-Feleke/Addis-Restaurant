import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuantity } from "./cartSlice";
import { decreaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(id));
  }
  function handleDecreaseQuantity() {
    dispatch(decreaseItemQuantity(id));
  }

  return (
    <div className="flex gap-2 items-center">
      <Button type="round" onClick={handleDecreaseQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleIncreaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
