import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[650px] flex flex-col items-center justify-center bg-pink-300">
        <h1 className="text-3xl font-bold underline">Adaopte</h1>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
