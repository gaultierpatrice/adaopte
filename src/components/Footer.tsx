import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuTwitch } from "react-icons/lu";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center bg-(--dark-color) text-(--primary-color) p-2">
        <div className="flex flex-row w-full">
          <section className="flex-1">
            <h2>ADAOPTE</h2>
            <p className="">
              Notre mission est de trouver des foyers aimants pour chaque animal
              abandonné et de promouvoir le bien-être animal.
            </p>
            <div className="flex flex-row gap-4 mt-5">
              <a
                aria-label="link to facebook"
                href="#"
                className="flex items-center justify-center h-5 w-5 bg-neutral-700 rounded-full"
              >
                <LuFacebook />
              </a>
              <a
                aria-label="link to instagram"
                href="#"
                className="flex items-center justify-center h-5 w-5 bg-neutral-700 rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                aria-label="link to linkedin"
                href="#"
                className="flex items-center justify-center h-5 w-5 bg-neutral-700 rounded-full"
              >
                <SlSocialLinkedin />
              </a>
              <a
                aria-label="link to twitch"
                href="#"
                className="flex items-center justify-center h-5 w-5 bg-neutral-700 rounded-full"
              >
                <LuTwitch />
              </a>
            </div>
          </section>

          <section className="flex-1">
            <h2>INFORMATIONS UTILES</h2>
            <ul className="flex flex-col h-full justify-around py-5 text-gray-400">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Conseils d'adoption</a>
              </li>
              <li>
                <a href="mailto:contact@adaopte.fr">Nous contacter</a>
              </li>
              <li>
                <a href="#">Mentions légales</a>
              </li>
            </ul>
          </section>

          <section className="flex-1">
            <h2>CONTACT</h2>
            <ul>
              <li>116 rue du Faubourg Saint-Martin</li>
              <li>75010 Paris, France</li>
              <li>Email: contact@adaopte.fr</li>
              <li>Tél: +33 1 23 45 67 89</li>
            </ul>
          </section>
        </div>
        <div className="flex flex-col justify-center items-center w-full text-gray-400 mt-5 border-t border-neutral-700">
          <p>© 2025 Adaopte. Tous droits réservés.</p>
          <p>
            Ce site a été développé dans le cadre d'un projet pour ADA Tech
            School.
          </p>
        </div>
      </footer>
    </>
  );
}
