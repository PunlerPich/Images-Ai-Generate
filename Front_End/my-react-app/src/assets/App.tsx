import Appbar from "./Appbar";
import Login from "../components/Login";
import Home from "../components/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
function App() {
  return (
    <>
      <Appbar />
      <Routes>
        {/* Other components and routes */}
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
