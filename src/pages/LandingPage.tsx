import ImageWithText from "../components/ImageWithText";
import Button from "../components/Button.tsx";
import Card from "../components/Card.tsx";
import { NavLink } from "react-router-dom";
import { LuHandHeart } from "react-icons/lu";
import animals from "../data/data.json";
import information from "../data/information.json";

import charlieimg from "../pictures/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg";
import miaimg from "../pictures/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg";
import cocoimg from "../pictures/chan-swan-NKyl19P5IHg-unsplash.jpg";
import reximg from "../pictures/alan-king-KZv7w34tluA-unsplash.jpg";
import lunaimg from "../pictures/jae-park-7GX5aICb5i4-unsplash.jpg";
import biscuitimg from "../pictures/yosei-g-OVgE3m4MHKM-unsplash.jpg";
import rioimg from "../pictures/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg";
import rubyimg from "../pictures/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg";

const imageMap: Record<string, string> = {
  Charlie: charlieimg,
  Mia: miaimg,
  Coco: cocoimg,
  Rex: reximg,
  Luna: lunaimg,
  Biscuit: biscuitimg,
  Rio: rioimg,
  Ruby: rubyimg,
};

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
          <section className="flex flex-col justify-center items-center bg-gray-100">
            <h1 className="flex flex-col justify-center items-center text-3xl font-bold mt-5">
              Nos animaux à adopter
            </h1>
            <p className="justify-center items-center text-sm">
              Découvrez en image tous nos animaux qui attendent une famille
              aimante. Chaque photo raconte une histoire et un espoir.
            </p>

            <div className="grid grid-flow-col grid-rows-3 gap-4 max-h-[1200px] p-10">
              {animals.map((animal, index) => {
                // Define which items should span 2 rows
                const rowSpanClass = [0, 3, 4, 7].includes(index)
                  ? "row-span-2"
                  : "";

                return (
                  <div key={animal.name} className={`${rowSpanClass} h-full`}>
                    <Card
                      imageSize="grid"
                      imageUrl={imageMap[animal.name] ?? animal.imageUrl}
                      showButton={false}
                    />
                  </div>
                );
              })}
            </div>

            <NavLink to="/listing" className="flex items-center gap-2">
              <Button className="mb-5">Voir tous les animaux</Button>
            </NavLink>
          </section>

          <h1 className="flex flex-col justify-center  p-10 text-4xl font-bold">
            Comment ça marche
          </h1>
          <p className="text-sm flex px-50 text-gray-600 justify-center text-center pb-8">
            adopter un animal est un engagement serieux et à long terme. Voici
            notre processus d'adoption en
            <br /> quelques étapes simples.
          </p>

          <div className="grid grid-cols-4 gap-6 p-8">
            {information.map((information, index) => (
              <Card
                key={index}
                {...information}
                imageUrlIcons={
                  imageMap[information.title] ?? information.imageUrlIcons
                }
                imageSize="small"
                showButton={false}
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-around bg-gray-100 min-h-[300px] w-full">
            <h1 className="text-5xl mt-5">Prêt.e à changer une vie ?</h1>
            <p className="text-sm px-50">
              Adoptez, partagez, soutenez... Chaque geste compte. Que vous
              ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde
              chance à un animal abandonné.
            </p>
            <div className="flex flex-row justify-center gap-5 px-20">
              <Button>Adopter un animal</Button>
              <Button className="gap-2" variant="secondary">
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
