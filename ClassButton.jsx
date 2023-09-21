import "../css/ClassButton.css";
import React from "react";

function ClassButton() {
  const classes = [
    "JS 22/1v",
    "GJS 23/1",
    "GM 23/1",
    "GJS 22/1",
    "GM 22/1",
    "GM 21/1",
    "GJS 21/1",
    "JS 23/1v",
    "M 23/1v",
    "M 23/2v",
    "KT 23/1v",
    "GM 20/1",
  ];

  classes.sort();

  const [currentClassChosen, setClassChosen] = React.useState(classes[0]);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
      classes_menu_el.style.background = "rgb(4, 100, 172)";
    } else {
      classes_menu_el.style.background = "white";
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
        classes_menu_el.style.background = "rgb(4, 100, 172)";
      }
      setClassChosen(e);
    } else {
      setIsMenuOpen(false);
      classes_menu_el.style.background = "white";
    }
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

export default ClassButton;
