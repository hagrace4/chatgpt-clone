import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div>
      <textarea
        className="text-area"
        cols={40}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        Do it!
      </button>

      <h3 className="result-text"> {result.length > 0 ? result : ""}</h3>
    </div>
  )
};

