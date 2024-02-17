import { Link } from "react-router-dom";
import SearchOder from "../features/order/SearchOder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza.co</Link>
      <SearchOder />
      <p>Michael F</p>
    </header>
  );
}

export default Header;
