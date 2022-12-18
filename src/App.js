import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Order from "./Components/Order/Order";
import Franchise from "./Components/Franchise/Franchise";

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
          path="/order"
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
