import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import BreakfastSection from "./components/BreakfastSection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SearchForm />
        <BreakfastSection />
      </Router>
    </>
  );
}

export default App;
