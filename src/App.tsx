import { Routes, Route } from "react-router-dom";
import ListingPage from "./pages/ListingPage.tsx";
import Navbar from "./components/NavBar";
import LandingPage from "./pages/LandingPage.tsx";
import Footer from "./components/Footer.tsx";
import DevenirBenevole from "./pages/VolunteerPage.tsx";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              search={search}
              setSearch={setSearch}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />
          }
        />
        <Route
          path="/listing"
          element={
            <ListingPage
              search={search}
              setSearch={setSearch}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />
          }
        />
        <Route path="/devenir-benevole" element={<DevenirBenevole />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
