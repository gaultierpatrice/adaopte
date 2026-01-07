import ImageWithText from "../components/ImageWithText";

function LandingPage() {
  return (
    <>
      <main className="min-h-[650px] flex flex-col items-center">
        <ImageWithText
          src="src/pictures/background.jpg"
          alt="chien sur la plage"
          title="Donnons-leur autant qu'ils nous apportent"
          subtitle="Chaque jour, des milliers d'animaux attendent une famille aimante. Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption"
        />
        <div className=""></div>
        <h2 className="text-3xl font-bold underline">Adaopte</h2>
      </main>
    </>
  );
}

export default LandingPage;
