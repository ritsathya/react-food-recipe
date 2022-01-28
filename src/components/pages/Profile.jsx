import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ResultRecipe from "../ResultRecipe";

const Profile = () => {
  const { contextUser, setContextUser } = useContext(UserContext);
  const [posts, setPost] = useState(null);
  let navigate = useNavigate();

  const renderPost = () => {
    if (!contextUser) return;
    fetch(
      `https://foodie-fake-rest-api.herokuapp.com/meals?userID=${contextUser[0].id}`
    )
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-post-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-post"
              type="button"
              role="tab"
              aria-controls="pills-post"
              aria-selected="false"
              onClick={() => renderPost()}
            >
              Posts
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="profile-container">
              <div className="profile-header flex ai-center jc-center">
                <div className="profile-avatar flex-center">
                  <i className="fa-solid fa-user-ninja" />
                </div>
                <div className="profile-name">{contextUser[0].userName}</div>
              </div>
              <div className="profile-body">
                <div className="profile-email flex">
                  <i className="fa-solid fa-envelope" />
                  <p>{contextUser[0].email}</p>
                </div>
                <div className="profile-phone flex">
                  <i className="fa-solid fa-mobile-button" />
                  <p>{contextUser[0].phone}</p>
                </div>
                <button
                  className="btn btn-login"
                  onClick={() => {
                    setContextUser(null);
                    navigate("../", { replace: true });
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-post"
            role="tabpanel"
            aria-labelledby="pills-post-tab"
          >
            <h2>Your Recipes</h2>
            <ul className="grid">
              {posts && <ResultRecipe recipes={posts} />}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
