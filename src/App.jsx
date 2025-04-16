import { Outlet } from "react-router-dom";
import { Footer } from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="container mx-auto px-0 ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
