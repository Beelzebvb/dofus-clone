import "./styles/App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreHome from "./routes/PreHome";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/prehome" element={<PreHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
