import TypeFilter from "./TypeFilter";
import animals from "../data/data.json";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function AnimalFilter({
  search,
  setSearch,
  selectedType,
  setSelectedType,
  animalsToDisplay,
}: {
  search: string;
  setSearch: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  animalsToDisplay: [];
}) {
  function clearFilters() {
    setSearch("");
    setSelectedType("");
  }

  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (search) params.set("city", search);
    if (selectedType) params.set("type", selectedType);

    navigate(`/listing?${params.toString()}`);
  };
  // Extract unique animal types
  const animalTypes = Array.from(new Set(animals.map((animal) => animal.type)));

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center gap-5 min-h-[200px]">
        <TypeFilter
          options={animalTypes}
          value={selectedType}
          onChange={setSelectedType}
        />
        <div>
          {/* Search Input */}
          <h2>Localisation</h2>
          <input
            type="text"
            placeholder="Votre Ville"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button className="gap-2" onClick={handleSearch}>
          Rencontrer
          <img src="src/pictures/loupe.png" className="max-h-5" />
        </Button>
      </div>
      <div className="flex flex-row justify-between">
        <div>Nombre animaux trouvés: {animalsToDisplay.length}</div>
        <div>
          <Button variant="accent" onClick={clearFilters}>
            réinitialiser les filtres
          </Button>
        </div>
      </div>
    </div>
  );
}
