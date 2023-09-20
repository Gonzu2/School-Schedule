import "../css/ClassButton.css"
import React from "react"

function ClassButton() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function openClassMenu() {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true)
        }
    }

    return (
        <div className="class-button-container">
            <div className="class-button">
                <div className="class-choose-button-container">
                    <button className="class-choose-button" onClick={openClassMenu}>Klasė</button>
                    <div className="class-choose-button-border" onClick={openClassMenu}></div>
                </div>
                <div className="class-chosen" style={isMenuOpen ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : { borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }} onClick={openClassMenu}>JS22/1v</div>
            </div>
            <ul className="classes-menu" style={isMenuOpen ? { display: "flex" } : { display: "none" }}>
                <li className="classes-menu-item">
                    JS22/1v
                </li>
            </ul>
        </div>
    )
}

export default ClassButton;