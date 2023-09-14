import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/main.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Projects />
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default App;
