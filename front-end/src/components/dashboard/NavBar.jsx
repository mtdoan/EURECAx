import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const placeholderImageUrl =
    "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg";

  const styles = `
    .inputStyle {
      border: none;
      border-radius: 20px;
      padding-left: 20px;
      padding-right: 40px;
      background-color: #f0f0f0;
      color: #333;
      font-size: 16px;
      height: 32px;
      width: 820px;
      line-height: 32px;
      margin-left: 35px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .buttonStyle {
      background-color: ${isButtonClicked ? "#0056b3" : "#006CFD"};
      color: white;
      border: none;
      border-radius: 0;
      padding: 10px 20px;
      height: 100%;
      width: 200px;
      margin-right: 15px;
      flex: 1;
      transform: ${isButtonClicked ? "scale(0.95)" : "scale(1)"};
      transition: background-color 0.2s, transform 0.2s;
    }

    .dropdownContentStyle {
      display: ${isDropdownOpen ? "block" : "none"};
      position: absolute;
      background-color: #fff;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      right: 0;
      top: 100%;
      min-width: 150px;
      flex-direction: column;
    }
  `;

  const handleButtonClick = () => {
    console.log("Clicked");
    setIsButtonClicked(true);

    setTimeout(() => {
      setIsButtonClicked(false);
    }, 100);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfile = () => {
    console.log("Profile beep");
  };

  const handleSettings = () => {
    console.log("Settings boop");
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("User");
      navigate("/signIn");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <style>{styles}</style>
        <form className="d-flex" role="search">
          <input
            className="inputStyle"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className="buttonStyle btn btn-primary"
            type="button"
            onClick={handleButtonClick}
          >
            Execute with AI
          </button>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            style={{
              width: "170px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
              justifyContent: "space-between",
            }}
            onClick={handleDropdownClick}
          >
            <img
              src={placeholderImageUrl}
              alt="Profile"
              style={{
                marginRight: "15px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
              }}
            />
            <span> Profile </span>
          </button>
          <div className="dropdownContentStyle">
            <button
              type="button"
              style={{
                display: "block",
                padding: "10px",
                fontWeight: "bold",
              }}
              onClick={handleProfile}
            >
              View Profile
            </button>
            <button
              type="button"
              style={{
                display: "block",
                padding: "10px",
                fontWeight: "bold",
              }}
              onClick={handleSettings}
            >
              Settings
            </button>
            <button
              type="button"
              style={{
                display: "block",
                padding: "10px",
                fontWeight: "bold",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
