import React, { useState } from "react";
import Modal from "react-modal";
import CustomModalHeader from "./CustomModalHeader";

function CanvasGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [savedTime, setSavedTime] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const gridStyle = {
    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)", // 2 rows
    gridTemplateColumns: "repeat(6, 1fr)", // 6 columns
  };

  const gridItemStyle = {
    backgroundColor: "#ccc",
    fontWeight: "bold",
    padding: "10px",
    height: "430px",
    border: "1px solid #000",
    cursor: "pointer",
  };

  const modalContentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    minHeight: "300px",
    padding: "20px",
  };

  const modalContentScrollStyle = {
    maxHeight: "200px", // Adjust the height as needed
    overflow: "auto",
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsSaved(false);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    // Get the current time and update the state
    const now = new Date();
    const hours = now.getHours();
    const amPm = hours >= 12 ? "PM" : "AM";
    const twelveHourFormatHours = hours % 12 || 12;

    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const currentTime = `${twelveHourFormatHours}:${minutes}:${seconds} ${amPm}`;

    setSavedTime(currentTime);
    setIsSaved(true);
  };

  return (
    <div style={{ padding: "10px" }}>
      <div style={gridStyle}>
        {/* Row 1 */}
        <div style={gridItemStyle} onClick={() => openModal("EVENT")}>
          EVENT
        </div>
        <div style={gridItemStyle} onClick={() => openModal("UNDERSTAND")}>
          UNDERSTAND
        </div>
        <div style={gridItemStyle} onClick={() => openModal("REFINE")}>
          REFINE
        </div>
        <div style={gridItemStyle} onClick={() => openModal("EXPLORE")}>
          EXPLORE
        </div>
        <div style={gridItemStyle} onClick={() => openModal("CREATE")}>
          CREATE
        </div>
        <div style={gridItemStyle} onClick={() => openModal("ACTION")}>
          ACTION
        </div>
        {/* Row 2 */}
        <div style={gridItemStyle} onClick={() => openModal("INNOVATION WNGO")}>
          INNOVATION WNGO
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div style={gridItemStyle} onClick={() => openModal("INNOVATION OGRP")}>
          INNOVATION OGRP
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
      >
        <CustomModalHeader
          savedTime={savedTime}
          handleSave={handleSave}
          isSaved={isSaved}
          closeModal={closeModal}
        />
        <div style={{ ...modalContentStyle, ...modalContentScrollStyle }}>
          <h2>{selectedItem}</h2>
          <p>"asdasd"</p>
        </div>
      </Modal>
    </div>
  );
}

export default CanvasGrid;
