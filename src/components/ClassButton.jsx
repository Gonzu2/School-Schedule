import "../css/ClassButton.css"

function ClassButton() {
    return (
        <div className="class-button">
            <div className="class-choose-button-container">
                <button className="class-choose-button">Klasė</button>
                <div className="class-choose-button-border"></div>
            </div>
            <div className="class-chosen">JS22/1v</div>
        </div>
    )
}

export default ClassButton;