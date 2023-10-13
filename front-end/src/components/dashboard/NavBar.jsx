import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// style
import "./style/navbar.css"

// icons
import SearchIcon from "./icons/searchIcon"

const NavBar = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  const placeholderImageUrl =
    "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg";

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
    <nav className="navbar">
      <form className="" role="search" style={{ flex: 1, position: "relative" }}>
        <div class="icon">
          <SearchIcon />
        </div>
        <input
          className="inputStyle"
          type="search"
          placeholder="Search"
          aria-label="Search">
        </input>
      </form>
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
          marginRight: "10px",
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
    </nav>
  );
};

export default NavBar;
