import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuNav from "./MenuNav";

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="flex flex-col">
      <MenuNav />
      <ul className="grid grid-cols-3 gap-12 max-h-full">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
