import Button from "./Button.tsx";

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="flex flex-row justify-between p-5">
      <h1>
        Ada<span className="text-[--secondary-color]">opte</span>
      </h1>
      <NavLink to="/">Acceuil</NavLink>
      <NavLink to="/listing">J'adopte</NavLink>
      <a>Guide de l'adoption</a>
      <h2>devenir bénévole</h2>
      <Button>Faire un don</Button>
    </header>
  );
}

export default NavBar;
