import "./App.css";
import Company from "./components/Company/Company";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Company />
      <Section />
      <Gallery />
    </div>
  );
}

export default App;
