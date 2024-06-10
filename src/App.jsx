import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "../components/main.jsx";
import { Plants } from "../components/cards/plant.jsx";
import { Fertilizer } from "../components/cards/fertilizer.jsx";
import { Light } from "../components/cards/light.jsx";
import { Pests } from "../components/cards/pests.jsx";
import { Soil } from "../components/cards/soil.jsx";
import { Temp } from "../components/cards/temp.jsx";
import { Water } from "../components/cards/water.jsx";
import { Weather } from "../components/cards/weather.jsx";
import { NotFoundPage } from "../components/notfoundpage.jsx";

function App() {
  return( 
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/fertilizer/:plant" element={<Fertilizer />} />
      <Route path="/light/:plant" element={<Light />} />
      <Route path="/pests/:plant" element={<Pests />} />
      <Route path="/soil/:plant" element={<Soil />} />
      <Route path="/temperature/:plant" element={<Temp />} />
      <Route path="/water/:plant" element={<Water />} />
      <Route path="/weather/:plant" element={<Weather />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
