import ImageWithText from "../components/ImageWithText";
import Button from "../components/Button.tsx";
import { NavLink } from "react-router-dom";
import { LuHandHeart } from "react-icons/lu";

function LandingPage() {
  return (
    <>
      <main className="flex flex-col items-center">
        <ImageWithText
          src="src/pictures/background.jpg"
          alt="chien sur la plage"
          title="Donnons-leur autant qu'ils nous apportent"
          subtitle="Chaque jour, des milliers d'animaux attendent une famille aimante. Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption"
        />
        <div className="flex flex-col items-center w-full">
          <h2 className="flex flex-col justify-center min-h-[650px] text-3xl font-bold underline">
            Placeholder image grid
          </h2>
          <NavLink to="/listing" className="flex items-center gap-2">
            <Button className="mb-5">Voir tous les animaux</Button>
          </NavLink>
          <h2 className="flex flex-col justify-center min-h-[650px] text-3xl font-bold underline">
            Placeholder Comment ca marche
          </h2>
          <div className="flex flex-col items-center justify-around bg-gray-100 min-h-[300px] w-full">
            <h1 className="text-5xl mt-5">Prêt.e à changer une vie ?</h1>
            <p className="text-sm px-50">
              Adoptez, partagez, soutenez... Chaque geste compte. Que vous
              ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde
              chance à un animal abandonné.
            </p>
            <div className="flex flex-row justify-center gap-5 px-60">
              <Button>Adopter un animal</Button>
              <Button variant="secondary">
                Faire un don <LuHandHeart />
              </Button>
              <Button variant="accent">Devenir bénévole</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
