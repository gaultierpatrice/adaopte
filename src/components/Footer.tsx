export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center bg-(--dark-color) text-(--primary-color) p-2">
        <div className="flex flex-row">
          <section className="flex-1">
            <h2>ADOPTE</h2>
            <p className="p-2">
              Notre mission est de trouver des foyers aimants pour chaque animal
              abandonné et de promouvoir le bien-être animal.
            </p>
            <div>Facebook Insta Linkedin Discord</div>
          </section>

          <section className="flex-1">
            <h2>INFORMATIONS UTILES</h2>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Conseils d'adoption</a>
              </li>
              <li>
                <a href="#">Nous contacter</a>
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
        <div className="flex flex-col justify-center items-center">
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
