import Button from "./Button.tsx";

export default function Navbar() {
  return (
    <header className="flex flex-row justify-between p-5">
      <h1>
        Ada<span className="text-[--secondary-color]">opte</span>
      </h1>
      <a>Accueil</a>
      <a>J'adopte</a>
      <a>Guide de l'adoption</a>
      <a>Devenir bénévole</a>
      <Button>Faire un don</Button>
    </header>
  );
}
