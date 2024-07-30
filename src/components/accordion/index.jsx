import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <>
      <div className="accordion">
        <h1>Accordion</h1>
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div className="item">
                <div
                  className="title"
                  onClick={() => handleSingleSelection(dataItem.id)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <h3>{dataItem.question}</h3>
                  {selected === dataItem.id ? <span>-</span> : <span>+</span>}
                </div>
                {selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          : "No data available"}
      </div>
    </>
  );
};

export default Accordion;
