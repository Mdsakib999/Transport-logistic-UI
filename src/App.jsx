import Navbar from "./Components/SharedComponent/Navbar";
import Footer from "./Components/SharedComponent/Footer";
import { ScrollToTop } from "../utils/ScrollToTop";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../utils/ScrollToTopButton";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-[calc(100vh-196px)] lg:pt-28 xl:pt-20">
        <ScrollToTop />
        <Outlet />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
