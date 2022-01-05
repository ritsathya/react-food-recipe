import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import ShoppingList from "./components/pages/ShoppingList";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Navbar path="/" />
                <Home />
              </>
            }
          />
          <Route
            path="/shoppingList"
            element={
              <>
                <Navbar path="/shopping" />
                <ShoppingList />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar path="/login" />
                <Login />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
