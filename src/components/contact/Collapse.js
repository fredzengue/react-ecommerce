import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Collapse = ({ children, title }) => {
  

  const [isOpen, setIsOpen] = useState(false);

  const handleFilterOpening = () => {
      setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <dir>
        <div className=" font-bold  text-black-600 w-full flex justify-between border-b-2 pb-4 hover:text-sky-400 ">
          <h6 onClick={handleFilterOpening} className={isOpen && "text-sky-400"}>{title}</h6>
          <button type="button" className="btn" onClick={handleFilterOpening}>
            {!isOpen ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon className="text-sky-400" icon={faChevronUp} />
            )}
          </button>
        </div>
      </dir>
      <div className="border-bottom">
        <div>
          {isOpen && (
            <div className="p-1 ml-8 text-basetext-gray-500 mt-2 leading-normal text-justify">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
