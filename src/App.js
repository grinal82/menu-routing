import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Menu from "./components/Menu";
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";
import DriftPage from "./components/DriftPage";
import HomePage from "./components/HomePage";
import "./App.css";


export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
