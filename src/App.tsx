import { Routes, Route } from "react-router-dom";
import ListingPage from "./pages/ListingPage.tsx";
import Navbar from "./components/NavBar";
import LandingPage from "./pages/LandingPage.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listing" element={<ListingPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
