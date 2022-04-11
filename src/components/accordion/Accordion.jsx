import React, { useState } from "react";

const Accordion = ({ question, solution, children }) => {
  const [open, setOpen] = useState(false);

  const toogleOpen = () => {
    setOpen(!open);
  };
  return (
    <div id="accordion" className={open ? "expand" : ""}>
      <div className="top" onClick={toogleOpen}>
        <p className="question">{question}</p>
        <div className="icon">
          <img src={!open ? "/icons/plus.svg" : "/icons/minus.svg"} alt="" />
        </div>
      </div>
      {/* <p className="solution">{solution}</p> */}
      <div className="solution">{children}</div>
    </div>
  );
};

export default Accordion;
