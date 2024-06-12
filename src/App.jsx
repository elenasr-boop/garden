import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/mainPage.jsx";
import { Plants } from "./components/plant.jsx";
import { Fertilizer } from "./components/fertilizer.jsx";
import { Light } from "./components/light.jsx";
import { Pest } from "./components/pest.jsx";
import { Soil } from "./components/soil.jsx";
import { Temp } from "./components/temp.jsx";
import { Weather } from "./components/weather.jsx";
import { NotFoundPage } from "./pages/notfoundpage.jsx";
import { Complication } from "./components/complication.jsx";
import { Water } from "./components/water.jsx";
import { Pests } from "./components/pests.jsx";
import { Weather2 } from "./components/weather2.jsx";

function App() {
  return( 
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/fertilizer/:plant" element={<Fertilizer />} />
      <Route path="/light/:plant" element={<Light />} />
      <Route path="/pest" element={<Pest />} />
      <Route path="/soil/:plant" element={<Soil />} />
      <Route path="/temperature/:plant" element={<Temp />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/water/:plant" element={<Water />} />
      <Route path="/complication" element={<Complication />} />
      <Route path="/pests/:id" element={<Pests />} />
      <Route path="/weather/:id" element={<Weather2 />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
