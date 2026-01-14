import ImageWithText from "../components/ImageWithText";
import volunteerData from "../data/volunteer.json";
import Card from "../components/Card";
import Button from "../components/Button.tsx";
import { useState } from "react";

function VolunteerPage() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [dispo, setDisponibilite] = useState("");
  const [motivation, setMotivation] = useState("");

  const isFormValid =
    nom.trim() !== "" &&
    prenom.trim() !== "" &&
    mail.trim() !== "" &&
    ville.trim() !== "" &&
    codePostal.trim() !== "" &&
    dispo.trim() !== "" &&
    motivation.trim() !== "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Le Formulaire à bien été envoyé !");
  };

  return (
    <main className="flex flex-col items-center ">
      <ImageWithText
        src="src/pictures/alin-luna-8LfPXM6abRk-unsplash.jpg"
        alt="chien dans une cage"
        title="Devenir bénévole"
        subtitle="Offrez votre temps, changerez des vies. Chez adaopte,chaque bénévole à redonner espoir aux animaux en attente d'un foyer."
      />
      <div className=" flex flex-col w-full bg-white shadow-xl  p-12 max-w-4xl rounded-xl absolute top-80 left-1/2  -translate-x-1/2 ">
        <div className="flex justyfy-center items-center flex-col mb-8">
          <h1 className="text-7xl mb-5 p-5">Formulaire d'inscription</h1>
          <h2 className="text-center">
            Remplissez ce formulaire pour rejoindre notre reseau de benevoles.
            Nous vous contacterons rapidement pour vous présenter les prochaines
            étapes.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mt-4 required-label">Prénom</label>
              <input
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                className="w-full p-2 my-2 border rounded-xl"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>

            <div>
              <label className="mt-4 required-label">Nom</label>
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                className="w-full p-2 my-2 border rounded-xl"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="mt-4 required-label">Adresse email</label>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              className="w-full p-2 my-2 border rounded-xl"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mt-4 required-label">Ville</label>
              <input
                type="text"
                name="ville"
                placeholder="Votre ville"
                className="w-full p-2 my-2 border rounded-xl"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
              />
            </div>

            <div>
              <label className="mt-4 required-label">Code postal</label>
              <input
                type="text"
                name="codePostal"
                placeholder="Code postal"
                className="w-full p-2 my-2 border rounded-xl"
                value={codePostal}
                onChange={(e) => setCodePostal(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="mt-4 required-label">Disponibilités</label>
            <select
              name="disponibilite"
              className="w-full p-2 my-2 border rounded-xl"
              value={dispo}
              onChange={(e) => setDisponibilite(e.target.value)}
            >
              <option value="" disabled>
                Sélectionnez votre disponibilité
              </option>
              <option value="mercredi_21">Mercredi 21 janvier</option>
              <option value="jeudi_22">Jeudi 22 janvier</option>
              <option value="vendredi_23">Vendredi 23 janvier</option>
              <option value="samedi_24">Samedi 24 janvier</option>
              <option value="lundi_26">Lundi 26 janvier</option>
              <option value="mardi_27">Mardi 27 janvier</option>
            </select>
          </div>

          <div>
            <label className="mt-4 required-label">Votre motivation</label>
            <textarea
              name="motivation"
              placeholder="Parlez-nous de votre motivation à devenir bénévole chez Adaopte"
              className="w-full p-6 my-2 border rounded-xl"
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
            />
          </div>

          <div className="flex justify-center pb-8">
            <Button
              type="submit"
              disabled={!isFormValid}
              className={`px-4 py-2 rounded ${
                isFormValid
                  ? "bg-pink-500 text-white cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
              }`}
            >
              Envoyer ma candidature
            </Button>
          </div>
        </form>
      </div>

      <div className="flex flex-col justify-center items-center p-115 w-full  bg-gray-100"></div>
      <div className="flex flex-col justify-center items-center p-15 w-full  bg-white">
        <h1 className="text-5xl font-bold">Pourquoi devenir bénévole ?</h1>
        <p className="text-sm text-center text-gray-600 px-50">
          Être bénévole chez Adaopte, c'est bien plus qu'un coup de main : c'est
          un engagement du coeur, <br /> qui change des vies - humaines et
          animales.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-7 p-9 mx-10">
        {volunteerData.map((volunteerData, index) => (
          <Card
            key={index}
            {...volunteerData}
            imageUrlIcons={volunteerData.imageUrlIcons}
            imageSize="small"
            showButton={false}
            className="h-92 shadow-xl rounded-xl"
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
