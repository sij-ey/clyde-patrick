import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import DryNeedling from "./pages/DryNeedling";
import DmdSma from "./pages/DmdSma";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dry-needling" element={<DryNeedling />} />
        <Route path="/dmd-sma" element={<DmdSma />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;