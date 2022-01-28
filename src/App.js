import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import ShoppingList from "./components/pages/ShoppingList";
import Login from "./components/pages/Login";
import NotFound from "./components/NotFound";
import View from "./components/pages/View";
import Result from "./components/pages/Result";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";

function App() {
  const [recipes, setRecipes] = useState(null);
  const dbURL = "https://foodie-fake-rest-api.herokuapp.com/meals";

  useEffect(() => {
    fetch(dbURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            index
            element={recipes && <Home recipe={recipes} />}
          />
          <Route path="/result" element={<Result />} />
          <Route path="/shoppingList" element={<ShoppingList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/view" element={recipes && <View data={recipes} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
