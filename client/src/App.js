import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EngineForm from "./components/Form/EngineForm";
import WelcomePage from "./components/First/WelcomePage";
import HomePage from "./components/First/HomePage";
import ServiveCenterWebpage from "./components/Service/ServiceCenterWebpage.jsx";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<EngineForm />} />
      <Route path ="/service-center" element={<ServiveCenterWebpage />} />
      <Route
        path="/main"
        element={user ? <Main /> : <Navigate to="/login" replace />}
      />
      {/* Optional: Handle unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
