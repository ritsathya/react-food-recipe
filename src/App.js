import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/pages/Home";
import ShoppingList from "./components/pages/ShoppingList";
import Login from "./components/pages/Login";
import NotFound from "./components/NotFound";
import View from "./components/pages/View";
import Result from "./components/pages/Result";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";
import { UserContext } from "./UserContext";
import toBuyRecipeList from "./components/pages/FavRecipeList";
import ToBuyRecipeList from "./components/pages/FavRecipeList";
import FavRecipeList from "./components/pages/FavRecipeList";

function App() {
  const [recipes, setRecipes] = useState(null);
  const [user, setUser] = useState(null);
  const [contextUser, setContextUser] = useState(null);
  const dbURL = "https://foodie-fake-rest-api.herokuapp.com/meals";
  const userURL = "https://foodie-fake-rest-api.herokuapp.com/users"

  useEffect(() => {
    fetch(dbURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });
      fetch(userURL)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        setUser(user);
      });
  }, []);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ contextUser, setContextUser }}>
          <Routes>
            <Route
              path="/"
              index
              element={recipes && <Home recipe={recipes} />}
            />
            <Route path="/result" element={<Result />} />
            <Route
              path="/favRecipeList"
              element={
                contextUser ? <FavRecipeList user={contextUser} recipes={recipes} /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/shoppingList"
              element={
                recipes && <ShoppingList recipe={recipes} />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={contextUser ? <Profile /> : <Navigate to="/login" />}
            />
            <Route path="/view" element={recipes && <View data={recipes} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
