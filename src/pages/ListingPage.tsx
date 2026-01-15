import Card from "../components/Card";
import animals from "../data/data.json";
import AnimalFilter from "../components/AnimalFilter";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import usePagination from "../hooks/usePagination.tsx";
import type SearchProps from "../types/types.ts";

function ListingPage({
  search,
  setSearch,
  selectedType,
  setSelectedType,
}: SearchProps) {
  const [searchParams] = useSearchParams();

  const cityFromUrl = searchParams.get("city") ?? "";
  const typeFromUrl = searchParams.get("type") ?? "";

  const filteredAnimals = animals.filter(
    (animal) =>
      (!search || animal.city.toLowerCase().includes(search.toLowerCase())) &&
      (!selectedType || animal.type === selectedType)
  );

  const {
    currentItems: animalsToDisplay,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination(filteredAnimals, 8);

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
          filteredAnimalsCount={filteredAnimals.length}
          showOptions={true}
        />
      </div>

      <main className="min-h-162.5 flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 gap-6 p-15">
          {animalsToDisplay.map((animal, index) => (
            <Card key={index} {...animal} imageUrl={animal.imageUrl} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex gap-2 my-5">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-3 py-1 ${
                page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}

export default ListingPage;
