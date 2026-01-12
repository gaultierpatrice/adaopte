import Card from "../components/Card";
import animals from "../data/data.json";

function ListingPage() {
  return (
    <>
      <main className="min-h-[650px] flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 gap-6 p-15">
          {animals.map((animal, index) => (
            <Card key={index} {...animal} imageUrl={animal.imageUrl} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ListingPage;
