import { useState } from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import BackButton from "../../ui/BackButton";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isCreatingOrder = navigation.state === "submitting";
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const isLoadingAddress = addressStatus === "loading";

  const formErrors = useActionData();

  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  function handleGetPosition(e) {
    e.preventDefault();
    dispatch(fetchAddress());
    console.log(address);
  }

  if (!cart.length)
    return (
      <div className="min-w-[50%] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">
          {cart.length === 0
            ? `Your cart is empty ${username}. Please back to menu and add some items to start ordering!`
            : `Your cart, ${username}`}
        </h2>
        <div className="text-center mt-6">
          <BackButton to="/menu">&larr; Back to menu</BackButton>
        </div>
      </div>
    );

  return (
    <div className="mx-auto h-96 max-w-xl ">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to order? Let's go!
      </h2>

      <Form
        method="POST"
        className="space-y-8  border-2 bg-white shadow-md rounded-md p-6"
      >
        <div className="w-72">
          {/* Username input */}
          <div className="relative w-full min-w-[200px] h-10">
            <input
              type="text"
              name="customer"
              defaultValue={username}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 text-lg disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent  px-3 py-7 rounded-[7px] border-blue-gray-400 focus:border-gray-900"
              placeholder=" "
              required
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[14px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-400 peer-focus:before:!border-gray-900 after:border-blue-gray-400 peer-focus:after:!border-gray-900">
              Username
            </label>
          </div>
        </div>

        <div className="w-72">
          {/* Phone input */}
          <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-7 rounded-[7px] border-blue-gray-400 focus:border-gray-900"
              placeholder=" "
              type="tel"
              name="phone"
              required
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[14px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-400 peer-focus:before:!border-gray-900 after:border-blue-gray-400 peer-focus:after:!border-gray-900">
              Phone number
            </label>
          </div>
        </div>
        {formErrors?.phone && (
          <p className="text-sm min-w-[200px] text-red-700 bg-red-100  px-4 py-1 rounded-md">
            {formErrors.phone}
          </p>
        )}

        <div className="w-[450px]">
          {/* Address input */}
          <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-lg px-3 py-7 rounded-[7px] border-blue-gray-400 focus:border-gray-900"
              placeholder=" "
              type="text"
              name="address"
              disabled={isLoadingAddress}
              required
            />

            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[14px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-400 peer-focus:before:!border-gray-900 after:border-blue-gray-400 peer-focus:after:!border-gray-900">
              Address
            </label>
            {!position.latitude && !position.longitude && (
              <span className="text absolute right-2 top-2 z-50">
                <Button
                  disabled={isLoadingAddress}
                  type="small"
                  onClick={handleGetPosition}
                  defaultValue={address}
                >
                  Get Position
                </Button>
              </span>
            )}
          </div>
        </div>

        {addressStatus ===
          "error"(
            <p className="text-sm min-w-[200px] text-red-700 bg-red-100  px-4 py-1 rounded-md">
              {errorAddress}
            </p>
          )}

        <div className="flex items-center space-x-2">
          {/* Checkbox for priority */}
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            type="checkbox"
            name="priority"
            id="priority"
          />
          {/* Label for priority checkbox */}
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        {/* Hidden input for cart */}
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div className="text-center">
          {/* Submit button */}
          <Button disabled={isCreatingOrder || isLoadingAddress}>
            {isCreatingOrder
              ? "Placing order..."
              : `Order now for $${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number.We might need it to contact you!";

  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
