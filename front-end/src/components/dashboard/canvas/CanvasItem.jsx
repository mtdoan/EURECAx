import React, { useContext } from "react";

// style
import "../style/canvas.css";
import { SearchContext } from "util/SearchContextProvider";

const CanvasItem = (props) => {
  const { searchText } = useContext(SearchContext);

  const highlightText = (text) => {
    if (searchText.length === 0) return text;
    const selectionRange = searchText.length;
    const letterArray = text.split("");
    let newText = [];
    let i = 0;
    while (i < letterArray.length) {
      const letter = letterArray[i];
      const selectedText = letterArray.slice(i, i + selectionRange).join("");
      const letterMatches = new RegExp(searchText, "ig").test(selectedText);
      if (letterMatches) {
        newText.push(<mark className="bg-blue-100">{selectedText}</mark>);
        i += selectionRange;
      } else {
        newText.push(letter);
        i++;
      }
    }
    return newText;
  };

  return (
    <>
      <div className="grid-item" onClick={props.onClick}>
        <div className="item-title top">{props.title}</div>
        <div className="scroll-box">
          <div className="scroll-box__wrapper">{highlightText(props.text)}</div>
        </div>
      </div>
    </>
  );
};

export default CanvasItem;
