import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Dashboard from "./Dashboard"; // Ensure you have a Dashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;