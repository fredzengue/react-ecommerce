import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div>
      <nav class="flex ml-48" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <NavLink
              to="/"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <FontAwesomeIcon icon={faHouse} className="text-gray-middle" />
              
              Home
            </NavLink>
          </li>
          <li>
            <div class="flex items-center">
              <NavLink
                to="/contact"
                class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-gray-middle" />
                
                Contact Us
              </NavLink>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
