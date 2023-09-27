import Navbar from "./components/Navbar";
import GetLessons from "./components/GetLessons";
import "./css/app.css";

function App() {
  return (
    <div className="app-main-div">
      <Navbar />
      <div className="schedule-container">
        <div className="main">
          <GetLessons />
        </div>
      </div>
    </div>
  );
}

export default App;
