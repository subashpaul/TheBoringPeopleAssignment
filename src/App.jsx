import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.component";
import Stats from "./pages/Stats";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
        {/* <Stats /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
