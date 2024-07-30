import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState([]);
  const [multiSelectionButton, setMultiSelectionButton] = useState(true);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiSelection];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      // console.log(findIndexOfCurrentId);
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiSelection(copyMultiple);
  }

  console.log(selected, multiSelection);
  function selectionButton() {
    setMultiSelectionButton(!multiSelectionButton);
    setMultiSelection([]);
    setSelected(null);
  }
  return (
    <>
      <div className="accordion">
        <h1>Accordion</h1>
        <button className="multiSelectionBtn" onClick={selectionButton}>
          {multiSelectionButton
            ? "Enable Multi selection"
            : "Enable Single selection"}
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  multiSelectionButton
                    ? () => handleSingleSelection(dataItem.id)
                    : () => handleMultiSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {/* {multiSelectionButton
                ? multiSelection.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )} */}

              {selected === dataItem.id ||
              multiSelection.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <h4>No data available </h4>
        )}
      </div>
    </>
  );
};

export default Accordion;
