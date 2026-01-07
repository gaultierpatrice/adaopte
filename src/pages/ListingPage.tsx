import Card from "../components/Card";
import animals from "../data/data.json";

// import photos des animaux d'adoption
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

function ListingPage() {
  return (
    <>
      <main className="min-h-[650px] flex flex-col items-center justify-center bg-pink-300">
        <h1 className="text-3xl font-bold underline">
          Liste d'animaux a adopter.
        </h1>
        <div className="grid grid-cols-4 gap-6 p-8">
          {animals.map((animal, index) => (
            <Card
              key={index}
              {...animal}
              imageUrl={imageMap[animal.name] ?? animal.imageUrl}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ListingPage;
