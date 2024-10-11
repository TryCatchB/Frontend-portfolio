import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Paths from "./paths/Paths";
import ScrollToTop from "./utils/scrollToTop";
import "./styles/main.css";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Paths />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
