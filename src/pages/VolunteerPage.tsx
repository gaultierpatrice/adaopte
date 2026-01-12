import ImageWithText from "../components/ImageWithText";
import volunteerData from "../data/volunteer.json";
import Card from "../components/Card";

function VolunteerPage() {
  return (
    <main className="flex flex-col items-center ">
      <ImageWithText
        src="src/pictures/alin-luna-8LfPXM6abRk-unsplash.jpg"
        alt="chien dans une cage"
        title="Devenir bénévole"
        subtitle="Offrez votre temps, changerez des vies. Chez adaopte,chaque bénévole à redonner espoir aux animaux en attente d'un foyer."
      />
      <div className="flex flex-col justify-center items-center p-50 max-w-4xl ">
        <h2 className="text-sm font-bold mb-5 underline">
          formulaire de demande pour devenir bénévole
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-6 p-8">
        {volunteerData.map((volunteerData, index) => (
          <Card
            key={index}
            {...volunteerData}
            imageUrlIcons={volunteerData.imageUrlIcons}
            imageSize="small"
            showButton={false}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center p-50 w-full  bg-pink-200">
        <h2 className="text-sm font-bold mb-5 underline">
          témoignages de bénévoles
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center p-50 w-full bg-pink-300">
        <h2 className="text-sm font-bold mb-5 underline">
          des questions ? contactez-nous !
        </h2>
      </div>
    </main>
  );
}
export default VolunteerPage;
