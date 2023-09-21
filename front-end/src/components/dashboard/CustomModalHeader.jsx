import React from "react";

function CustomModalHeader({ closeModal, handleSave, isSaved, savedTime }) {
  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div
      style={{
        backgroundColor: "#ccc",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {isSaved ? (
        <div>
          Saved {savedTime} {getCurrentDate()}
        </div>
      ) : (
        <div></div>
      )}
      <div>
        {!isSaved && (
          <button
            style={{
              width: "70px",
              borderRadius: "10px",
              backgroundColor: "#006CFD",
              fontSize: "13px",
              height: "20px",
              color: "white",
              marginRight: "10px",
            }}
            onClick={handleSave}
          >
            Save
          </button>
        )}
        <button onClick={closeModal} style={{ marginRight: "15px" }}>
          Discard
        </button>
        <button onClick={closeModal}>Close</button>{" "}
        {/* Close button in the header */}
        <div
          style={{
            display: "inline-block",
            position: "relative",
            marginLeft: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default CustomModalHeader;
