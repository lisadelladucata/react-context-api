import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useSearchContext } from "../contexts/SearchContext";
export default function Header() {
  const { search, setSearch } = useSearchContext();
  return (
    <>
      <header>
        <img
          src="https://logos-world.net/wp-content/uploads/2021/02/Dragon-Ball-Logo-1996-present.png"
          alt="logo"
        />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">Chi siamo</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contattaci</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <input
                type="searc"
                placeholder="Cerca..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
