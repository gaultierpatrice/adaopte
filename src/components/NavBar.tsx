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
      <h2 className="flex items-center font-bold gap-2">
        <span>
          <LuPawPrint />
        </span>
        <span className="text-2xl">
          Ada<span className="text-(--secondary-color)">opte</span>
        </span>
      </h2>
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
      <NavLink to="/devenir-benevole" className="flex items-center gap-2">
        <LuBone />
        <span>Devenir bénévole</span>
      </NavLink>
      <Button className="flex items-center gap-2">
        <span>Faire un don</span>
        <LuHandHeart />
      </Button>
    </header>
  );
}

export default NavBar;
