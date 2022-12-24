import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Order from "./Components/Items/Items";
import Franchise from "./Components/Franchise/Franchise";
import Item from "./Components/Item/Item";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/items"
          element={
            <>
              <Order />
            </>
          }
        />
        <Route
          exact
          path="/apply"
          element={
            <>
              <Franchise />
            </>
          }
        /> 
        <Route
          path="/item/:id"
          element={
            <>
              <Item />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
