import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import CreateUser from "./components/pages/CreateUser";
import Perfil from "./components/pages/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create/user/" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
