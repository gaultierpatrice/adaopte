import { Routes, Route } from "react-router-dom";
import ListingPage from "./pages/ListingPage.tsx";
import Navbar from "./components/NavBar";
import LandingPage from "./pages/LandingPage.tsx";
import Footer from "./components/Footer.tsx";
import DevenirBenevole from "./pages/VolunteerPage.tsx";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/devenir-benevole" element={<DevenirBenevole />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
