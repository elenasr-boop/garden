import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/mainPage.jsx";
import { Plants } from "./components/plant.jsx";
import { Fertilizer } from "./components/fertilizer.jsx";
import { Light } from "./components/light.jsx";
import { Pests } from "./components/pests.jsx";
import { Soil } from "./components/soil.jsx";
import { Temp } from "./components/temp.jsx";
import { Water } from "./components/water.jsx";
import { Weather } from "./components/weather.jsx";
import { NotFoundPage } from "./pages/notfoundpage.jsx";

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
