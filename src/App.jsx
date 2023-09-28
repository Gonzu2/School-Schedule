import Navbar from "./components/Navbar";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetLessons from "./components/GetLessons";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./css/app.css";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: Dashboard(),
  },
  {
    path: "/login",
    element: Login(),
  },
  {
    path: "/",
    element: (
      <div className="app-main-div">
        <Navbar showLogin="showLogin"/>
        <div className="schedule-container">
          <div className="main">
            <GetLessons />
          </div>
        </div>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
