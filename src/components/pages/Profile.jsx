import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Profile = () => {
  return (
    <div>
      <Navbar />

      <div className="container mt-5">
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Profile
            </button>
            <button
              className="nav-link"
              id="v-pills-post-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-post"
              type="button"
              role="tab"
              aria-controls="v-pills-post"
              aria-selected="false"
            >
              Posts
            </button>
            <button
              className="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Settings
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div className="profile-container">
                <div className="profile-header flex ai-center jc-center">
                  <div className="profile-avatar flex-center">
                    <i className="fa-solid fa-user-ninja" />
                  </div>
                  <div className="profile-name">User Name</div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-post"
              role="tabpanel"
              aria-labelledby="v-pills-post-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
