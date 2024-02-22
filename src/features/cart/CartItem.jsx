import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="py-3 flex flex-col flex-wrap items-start justify-between medium:flex-row medium:items-center medium:gap-9">
      <p className="mb-1 medium:mb-0">
        {quantity}&times; {name}
      </p>
      <div className=" flex self-stretch justify-between items-center gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity id={id} currentQuantity={currentQuantity} />
        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
