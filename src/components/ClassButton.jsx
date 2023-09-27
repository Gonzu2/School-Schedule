/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import "../css/ClassButton.css";
import { useState } from "react";

const classes = ["JS 22/1v", "GJS 23/1"];
classes.sort();

let currentClassChosenInitial = classes[0];

function ClassButton({ onClassChange }) {
  const [currentClassChosen, setClassChosen] = useState(
    currentClassChosenInitial
  );
  const [currentClassChosenTop, setCurrentClassChosenTop] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openClassMenu() {
    const classes_menu_el = document.getElementsByClassName("classes-menu")[0];

    let currentClassChosenIndex = -1;

    classes.forEach((element, index) => {
      if (element === currentClassChosen) {
        currentClassChosenIndex = index;
      }
    });

    if (
      currentClassChosenIndex === 0 &&
      classes_menu_el &&
      currentClassChosen
    ) {
      setCurrentClassChosenTop(true);
    } else {
      setCurrentClassChosenTop(false);
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }

  function classClicked(e, index) {
    if (e !== currentClassChosen) {
      if (index === 0) {
        setCurrentClassChosenTop(true);
      } else {
        setCurrentClassChosenTop(false);
      }
      setClassChosen(e);

      // Call the callback function to notify the parent (Schedule.jsx)
      onClassChange(e);
    } else {
      setIsMenuOpen(false);
      setCurrentClassChosenTop(false);
    }
    currentClassChosenInitial = currentClassChosen;
  }

  return (
    <div className="class-button-container">
      <div className="class-button">
        <div className="class-choose-button-container">
          <button className="class-choose-button" onClick={openClassMenu}>
            Klasė
          </button>
          <div
            className="class-choose-button-border"
            onClick={openClassMenu}
          ></div>
        </div>
        <div
          className="class-chosen"
          style={
            isMenuOpen
              ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }
              : {
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }
          }
          onClick={openClassMenu}
        >
          {currentClassChosen}
        </div>
      </div>
      <ul
        className="classes-menu"
        style={isMenuOpen ? { display: "flex" } : { display: "none" }}
      >
        {classes.map((classItem, index) => (
          <li
            key={index}
            className={`classes-menu-item ${
              classItem == currentClassChosen && currentClassChosenTop
                ? "classes-menu-item-top"
                : ""
            } ${
              classItem === currentClassChosen
                ? "classes-menu-item-selected"
                : ""
            }`}
            data-class-name={classItem}
            onClick={() => classClicked(classItem, index)}
          >
            {classItem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function getCurrentClassChosen() {
  return currentClassChosenInitial;
}
export const allClasses = classes;

export default ClassButton;
