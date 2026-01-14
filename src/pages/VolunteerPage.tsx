import ImageWithText from "../components/ImageWithText";
import volunteerData from "../data/volunteer.json";
import Card from "../components/Card";
import Button from "../components/Button.tsx";
import { useState } from "react";
import Claire from "../pictures/omid-armin-yisZonvqh54-unsplash.jpg";
import Juan from "../pictures/christian-buehner-DItYlc26zVI-unsplash.jpg";

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
        <div className="flex justify-center items-center flex-col mb-8">
          <h1 className="text-7xl mb-5 p-5 font-bold ">
            Formulaire d'inscription
          </h1>
          <h2 className="text-center">
            Remplissez ce formulaire pour rejoindre notre reseau de benevoles.
            Nous vous contacterons rapidement pour vous présenter les prochaines
            étapes.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="prenom" className="mt-4 required-label">
                Prénom
              </label>
              <input
                id="prenom"
                autoComplete="given-name"
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                className="w-full p-2 my-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="nom" className="mt-4 required-label">
                Nom
              </label>
              <input
                id="nom"
                autoComplete="family-name"
                type="text"
                name="nom"
                placeholder="Votre nom"
                className="w-full p-2 my-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mt-4 required-label">
              Adresse email
            </label>
            <input
              id="email"
              autoComplete="email"
              type="email"
              name="email"
              placeholder="Votre email"
              className="w-full p-2 my-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="ville" className="mt-4 required-label">
                Ville
              </label>
              <input
                id="ville"
                type="text"
                autoComplete="address-level2"
                name="ville"
                placeholder="Votre ville"
                className="w-full p-2 my-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="codePostal" className="mt-4 required-label">
                Code postal
              </label>
              <input
                id="codePostal"
                autoComplete="postal-code"
                inputMode="numeric"
                pattern="[0-9]{5}"
                maxLength={5}
                type="text"
                name="codePostal"
                placeholder="Code postal"
                className="w-full p-2 my-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={codePostal}
                onChange={(e) => setCodePostal(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="disponibilite" className="mt-4 required-label">
              Disponibilités
            </label>
            <select
              id="disponibilite"
              name="disponibilite"
              className="w-full p-2 my-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={dispo}
              onChange={(e) => setDisponibilite(e.target.value)}
              required
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
            <label htmlFor="motivation" className="mt-4 required-label">
              Votre motivation
            </label>
            <textarea
              id="motivation"
              autoComplete="off"
              rows={5}
              name="motivation"
              placeholder="Parlez-nous de votre motivation à devenir bénévole chez Adaopte"
              className="w-full p-6 my-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              required
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
        <h1 className="text-5xl pt-1 pb-10 font-bold">
          Pourquoi devenir bénévole ?
        </h1>
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

      <div className="flex flex-col items-center justify-around bg-gray-100 gap-4 min-h-75 w-full">
        <h1 className=" flex justify-center pt-15 text-5xl font-bold ">
          Témoignage de bénévoles
        </h1>
        <p className="text-sm  place-items-center text-center pb-7">
          Découvrez ce que nos bénévoles partagent de leur éxperience avec
          Adaopte
        </p>
        <div className="bg-white shadow-xl rounded-xl p-6 max-w-5xl mx-auto">
          {/* Ligne du haut : photo + nom */}
          <div className="flex flex-row items-center gap-4 ">
            <img
              src={Claire}
              alt="Portrait de Claire, bénévole"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-lg">Claire M.</h3>
              <p className="text-gray-500 text-sm">Bénévole depuis 1 an</p>
            </div>
          </div>

          <p className="text-sm text-gray-700 italic leading-relaxed">
            "J'ai commencé à m'occuper de Louna, une chienne timide arrivée au
            refuge. Petit à petit, elle m'a fait confiance. Aujourd'hui, elle a
            été adoptée, mais je garde un souvenir inoubliable de notre
            complicité. Être bénévole chez Adaopte, c'est offrir de l'amour...
            et en recevoir énormément."
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-4 max-w-5xl mx-auto">
          <div className="flex flex-row items-center gap-4 ">
            <img
              src={Juan}
              alt="Portrait de Juan, bénévole "
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-lg">Juan R.</h3>
              <p className="text-gray-500 text-sm">Bénévole depuis 8 mois</p>
            </div>
          </div>

          <p className="text-sm text-gray-700 italic leading-relaxed">
            "Je voulais m'investir concrètement pour une cause qui me tient à
            coeur. Avec Adaopte, j'ai découvert le refuge, les histoires de
            chaque animal, et une equipe soudée. Marcher avec les chiens, jouer
            avec les chats, les voir progresser... C'est profondément
            gratifiant."
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around bg-gray-100 min-h-75 w-full">
        <h1 className="text-5xl font-bold pt-10">des questions ?</h1>
        <p className="text-sm text-center">
          Nous sommes là pour repondre à toutes vos interrogations concernant le
          bénévolat chez Adaopte.
          <br />
          N'hésitez pas à nous contacter pour en savoir plus sur notre démarche.
        </p>
        <div className="flex flex-row justify-center gap-5 p-4 px-20">
          <Button className="hover:cursor-pointer">Foire aux questions</Button>

          <Button className="gap-2 " variant="secondary">
            Contactez-nous
          </Button>
        </div>
      </div>
    </main>
  );
}

export default VolunteerPage;
