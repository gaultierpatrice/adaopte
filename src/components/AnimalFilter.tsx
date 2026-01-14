import TypeFilter from "./TypeFilter";
import animals from "../data/data.json";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function AnimalFilter({
  search,
  setSearch,
  selectedType,
  setSelectedType,
  filteredAnimalsCount,
  showOptions = true,
}: {
  search: string;
  setSearch: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  filteredAnimalsCount: number;
  showOptions: boolean;
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
    <div className="flex flex-col justify-center min-h-28 w-[600px]">
      <div className="flex flex-row items-center justify-center gap-5">
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
            className="w-full"
          />
        </div>
        <Button className="gap-2 hover:cursor-pointer" onClick={handleSearch}>
          Rencontrer
          <img src="src/pictures/loupe.png" className="max-h-5" />
        </Button>
      </div>
      {showOptions && (
        <div className="flex flex-row justify-between mt-5">
          <div>Nombre animaux trouvés: {filteredAnimalsCount}</div>
          <div>
            <Button
              variant="accent"
              onClick={clearFilters}
              className="hover:cursor-pointer"
            >
              réinitialiser les filtres
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
