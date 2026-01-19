import ImageWithText from "../components/ImageWithText";
import Button from "../components/Button.tsx";
import Card from "../components/Card.tsx";
import { NavLink } from "react-router-dom";
import { LuHandHeart } from "react-icons/lu";
import animals from "../data/data.json";
import information from "../data/information.json";
import AnimalFilter from "../components/AnimalFilter.tsx";
import usePagination from "../hooks/usePagination.tsx";
import AnimalImage from "../components/AnimalImage.tsx";
import type SearchProps from "../types/types.ts";

function LandingPage({
  search,
  setSearch,
  selectedType,
  setSelectedType,
}: SearchProps) {
  const filteredAnimals = animals.filter((animal) => {
    const matchesCity = animal.city
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType = selectedType === "" || animal.type === selectedType;
    return matchesCity && matchesType;
  });

  const { currentItems: animalsToDisplay } = usePagination(filteredAnimals, 8);

  return (
    <>
      <main className="flex flex-col items-center">
        <ImageWithText
          src="/pictures/background.jpg"
          alt="chien sur la plage"
          title="Donnons-leur autant qu'ils nous apportent"
          subtitle="Chaque jour, des milliers d'animaux attendent une famille aimante. Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption"
        />
        <div className="flex flex-row md:absolute bg-(--primary-color) px-5 top-80 rounded-lg">
          <AnimalFilter
            search={search}
            setSearch={setSearch}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            filteredAnimalsCount={filteredAnimals.length}
            showOptions={false}
          />
        </div>

        <div className="flex flex-col items-center w-full mt-10">
          <section className="flex flex-col justify-center items-center bg-gray-100">
            <h1 className="flex flex-col justify-center items-center text-3xl font-bold mt-5">
              Nos animaux à adopter
            </h1>
            <p className="justify-center items-center text-sm px-2">
              Découvrez en image tous nos animaux qui attendent une famille
              aimante. Chaque photo raconte une histoire et un espoir.
            </p>

            <div className="grid grid-flow-col grid-rows-3 gap-4 max-h-300 p-10">
              {animalsToDisplay.map((animal, index) => {
                // Define which items should span 2 rows
                const rowSpanClass = [0, 3, 4, 7].includes(index)
                  ? "row-span-2"
                  : "";

                return (
                  <div key={animal.name} className={`${rowSpanClass} h-full`}>
                    <AnimalImage
                      src={animal.imageUrl}
                      alt={(animal.name, animal.breed)}
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
          <p className="text-sm flex px-10 md:px-50 text-gray-600 justify-center text-center pb-8">
            adopter un animal est un engagement serieux et à long terme. Voici
            notre processus d'adoption en
            <br /> quelques étapes simples.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
            {information.map((information, index) => (
              <Card
                key={index}
                {...information}
                imageUrlIcons={information.imageUrlIcons}
                imageSize="small"
                showButton={false}
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-around bg-gray-100 min-h-75 w-full">
            <h1 className="text-5xl mt-5">Prêt.e à changer une vie ?</h1>
            <p className="text-sm px-5 md:px-50">
              Adoptez, partagez, soutenez... Chaque geste compte. Que vous
              ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde
              chance à un animal abandonné.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-2 p-5 md:p-20 ">
              <NavLink to="/listing">
                <Button className="hover:cursor-pointer">
                  Adopter un animal
                </Button>
              </NavLink>

              <Button className="gap-2" variant="secondary">
                Faire un don <LuHandHeart />
              </Button>

              <NavLink to="/devenir-benevole">
                <Button variant="accent" className="hover:cursor-pointer">
                  Devenir bénévole
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
