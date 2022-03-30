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
        <div className=" font-bold  text-dark-low w-full flex justify-between border-b-2 pb-4 hover:text-blue  ">
          <h6 onClick={handleFilterOpening} className={isOpen && "text-blue"}>{title}</h6>
          <button type="button" className={isOpen && "btn text-blue"} onClick={handleFilterOpening}>
            {!isOpen ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </button>
        </div>
      </dir>
      
      <div className="border-bottom">
        <div>
          {isOpen && (
            <div 
            className="p-1 ml-8 text-base text-gray-low mt-2 leading-normal text-justify transition">
              {children}
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Collapse;
