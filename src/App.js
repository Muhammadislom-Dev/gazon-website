import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Company from "./components/Company/Company";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import GalleryAll from "./components/GalleryAll/GalleryAll";

function App() {
  return (
    <div className="App">
      // <Navbar />
      // <Header />
      // <Routes>
      //   <Route
      //     path="/"
      //     element={
      //       <>
      //         <Company />
      //         <Section />
      //         <Gallery />
      //         <Blog />
      //         <Contact />
      //       </>
      //     }
      //   />
      //   <Route
      //     path="/gazon"
      //     element={
      //       <>
      //         <GalleryAll />
      //       </>
      //     }
      //   />
      // </Routes>
      // <Footer />
    </div>
  );
}

export default App;
