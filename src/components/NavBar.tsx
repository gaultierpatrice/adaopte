import Button from "./Button.tsx";
import { NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import {
  LuBone,
  LuFish,
  LuSquirrel,
  LuHandHeart,
  LuPawPrint,
} from "react-icons/lu";

function NavBar() {
  return (
    <header className="flex flex-row justify-between p-5">
      <h1 className="flex items-center font-bold gap-2">
        <span>
          <LuPawPrint />
        </span>
        <span>
          Ada<span className="text-(--secondary-color)">opte</span>
        </span>
      </h1>
      <NavLink to="/" className="flex items-center gap-2">
        <CiHome />
        <span>Acceuil</span>
      </NavLink>
      <NavLink to="/listing" className="flex items-center gap-2">
        <LuBone />
        <span>J'adopte</span>
      </NavLink>
      <a className="flex items-center gap-2">
        <LuFish />
        <span>Guide de l'adoption</span>
      </a>
      <a className="flex items-center gap-2">
        <LuSquirrel />
        <span>Devenir bénévole</span>
      </a>
      <Button className="flex items-center gap-2">
        <LuHandHeart />
        Faire un don
      </Button>
    </header>
  );
}

export default NavBar;
