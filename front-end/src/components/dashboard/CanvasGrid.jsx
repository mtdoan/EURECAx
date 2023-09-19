import React from "react";

const gridData = [
  "Cell 1",
  "Cell 2",
  "Cell 3",
  "Cell 4",
  "Cell 5",
  "Cell 6",
  "Cell 7",
  "Cell 8",
  "Cell 9",
  "Cell 10",
  "Cell 11",
  "Cell 12",
  "Cell 13",
  "Cell 14",
  "Cell 15",
  "Cell 16",
  "Cell 17",
  "Cell 18",
];

const gridStyles = `
  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
  }

  .grid-cell {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightblue;
  }

  .grid-cell:nth-child(7),
  .grid-cell:nth-child(13) {
    grid-row: span 2;
  }

  .grid-cell:nth-child(8),
  .grid-cell:nth-child(9),
  .grid-cell:nth-child(10),
  .grid-cell:nth-child(11),
  .grid-cell:nth-child(12) {
    grid-row: span 1;
  }

  .grid-cell:nth-child(10) {
    grid-column: span 2;
  }

  .grid-cell:nth-child(7),
  .grid-cell:nth-child(13) {
    grid-column: span 3;
  }

  .grid-cell:last-child {
    grid-column: span 6;
  }
`;

function CanvasGrid() {
  return (
    <div>
      <h1>Grid</h1>
      <style>{gridStyles}</style>
      <div className="grid-container">
        {gridData.map((cell, index) => (
          <div key={index} className="grid-cell">
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CanvasGrid;
