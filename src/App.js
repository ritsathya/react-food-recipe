import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import BreakfastSection from './components/BreakfastSection';


function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <SearchForm />
      <BreakfastSection />
    </>
  );
}

export default App;
