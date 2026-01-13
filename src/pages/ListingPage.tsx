import Card from "../components/Card";
import animals from "../data/data.json";
import AnimalFilter from "../components/AnimalFilter";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function ListingPage() {
  const [searchParams] = useSearchParams();

  const cityFromUrl = searchParams.get("city") ?? "";
  const typeFromUrl = searchParams.get("type") ?? "";

  const [search, setSearch] = useState(cityFromUrl);
  const [selectedType, setSelectedType] = useState(typeFromUrl);

  const animalsToDisplay = animals.filter(
    (animal) =>
      (!search || animal.city.toLowerCase().includes(search.toLowerCase())) &&
      (!selectedType || animal.type === selectedType)
  );

  useEffect(() => {
    setSearch(cityFromUrl);
    setSelectedType(typeFromUrl);
  }, [cityFromUrl, typeFromUrl]);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <AnimalFilter
          search={search}
          setSearch={setSearch}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          animalsToDisplay={animalsToDisplay}
        />
      </div>

      <main className="min-h-[650px] flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 gap-6 p-15">
          {animalsToDisplay.map((animal, index) => (
            <Card key={index} {...animal} imageUrl={animal.imageUrl} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ListingPage;
