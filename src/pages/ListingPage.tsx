import Card from "../components/Card";
import animals from "../data/data.json";

function ListingPage() {
  return (
    <>
      <main className="min-h-[650px] flex flex-col items-center justify-center bg-pink-300">
        <h1 className="text-3xl font-bold underline">
          Liste d'animaux a adopter.
        </h1>
        <div className="grid grid-cols-4 gap-6 p-8">
          {animals.map((animal, index) => (
            <Card key={index} {...animal} imageUrl={animal.imageUrl} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ListingPage;
