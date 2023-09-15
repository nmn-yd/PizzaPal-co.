import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";
import Username from "../features/user/username";

function Header() {
  return (
    <header className="  flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        PizzaPal & Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
