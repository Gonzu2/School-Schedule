import Navbar from "./components/Navbar"
import Schedule from "./components/Schedule"
import "./css/app.css"

function App() {

  return (
    <div className="app-main-div">
      <Navbar />

      <div className="schedule-container">
        <div className="main">
          <Schedule />
        </div>
      </div>

    </div>
  )
}

export default App;
