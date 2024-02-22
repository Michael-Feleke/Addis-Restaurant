import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuNav from "./MenuNav";

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="flex items-center flex-col pb-10 h-full">
      <MenuNav />
      <ul className="grid grid-cols-1 gap-12 max-h-full medium:grid-cols-2 xlarge:grid-cols-3">
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
