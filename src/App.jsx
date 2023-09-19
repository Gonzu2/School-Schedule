import Navbar from "./components/Navbar"
import "./css/app.css"

function App() {

  return (
    <div className="app-main-div">
      <Navbar></Navbar>

      <div className="schedule-container">
        <div className="main">
          <div className="class-button">
            <div className="class-choose-button-container">
              <button className="class-choose-button">Klasė</button>
              <div className="class-choose-button-border"></div>
            </div>
            <div className="class-chosen">JS22/1v</div>
          </div>

          <table className="main-schedule">
            <tr className="days-and-time-container">
              <th className="days-container">Dienos</th>
              <th className="lesson-number-container">
                <div className="lesson-number">1</div>
                <div className="lesson-time">8:00 - 8:45</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">2</div>
                <div className="lesson-time">8:55 - 9:40</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">3</div>
                <div className="lesson-time">9:50 - 10:35</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">4</div>
                <div className="lesson-time">10:45 - 11:30</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">5</div>
                <div className="lesson-time">12:00 - 12:45</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">6</div>
                <div className="lesson-time">12:55 - 13:40</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">7</div>
                <div className="lesson-time">13:50 - 14:35</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">8</div>
                <div className="lesson-time">14:45 - 15:30</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">9</div>
                <div className="lesson-time">15:40 - 16:25</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">10</div>
                <div className="lesson-time">16:35 - 17:20</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">11</div>
                <div className="lesson-time">17:30 - 18:15</div>
              </th>
              <th className="lesson-number-container">
                <div className="lesson-number">12</div>
                <div className="lesson-time">18:25 - 19:10</div>
              </th>
            </tr>
            <tr>
              <th id="monday-lessons" className="lessons">
                Pirmadienis
              </th>
              <th className="monday-lesson lesson">
                <div className="lesson-name" style={{ background: "rgb(26, 180, 26)" }}>Anglų</div>
                <div className="lesson-extra-info">
                  <div className="lesson-class">28</div>
                  <div className="lesson-teacher">DV</div>
                </div>
              </th>
            </tr>

            <tr>
              <th id="monday-lessons" className="lessons">
                Antradienis
              </th>
              <th className="monday-lesson lesson">
                <div className="lesson-name" style={{ background: "rgb(26, 180, 26)" }}>Anglų</div>
                <div className="lesson-extra-info">
                  <div className="lesson-class">28</div>
                  <div className="lesson-teacher">DV</div>
                </div>
              </th>
            </tr>

            <tr>
              <th id="monday-lessons" className="lessons">
                Trečiadienis
              </th>
              <th className="monday-lesson lesson">
                <div className="lesson-name" style={{ background: "rgb(26, 180, 26)" }}>Anglų</div>
                <div className="lesson-extra-info">
                  <div className="lesson-class">28</div>
                  <div className="lesson-teacher">DV</div>
                </div>
              </th>
            </tr>

            <tr>
              <th id="monday-lessons" className="lessons">
                Ketvirtadienis
              </th>
              <th className="monday-lesson lesson">
                <div className="lesson-name" style={{ background: "rgb(26, 180, 26)" }}>Anglų</div>
                <div className="lesson-extra-info">
                  <div className="lesson-class">28</div>
                  <div className="lesson-teacher">DV</div>
                </div>
              </th>
            </tr>

            <tr>
              <th id="monday-lessons" className="lessons">
                Penktadienis
              </th>
              <th className="monday-lesson lesson">
                <div className="lesson-name" style={{ background: "rgb(26, 180, 26)" }}>Anglų</div>
                <div className="lesson-extra-info">
                  <div className="lesson-class">28</div>
                  <div className="lesson-teacher">DV</div>
                </div>
              </th>
            </tr>
          </table>
        </div>
      </div>

    </div>
  )
}

export default App
