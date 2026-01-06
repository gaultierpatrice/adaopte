import Button from "./Button.tsx";

export default function Navbar() {
  return (
    <header className="flex flex-row justify-between p-5">
      <h1>
        Ada<span className="text-[--secondary-color]">opte</span>
      </h1>
      <a>Acceuil</a>
      <a>J'adopte</a>
      <a>Guide de l'adoption</a>
      <h2>devenir bénévole</h2>
      <Button>Faire un don</Button>
    </header>
  );
}
