import { useEffect, useState } from "react";
import Schedule from "./Schedule";

let backend_url = "https://accurate-polarized-girl.glitch.me/";
// let backend_url = "http://localhost:5231/"

const GetLessons = () => {
  const [loading, setLoading] = useState(true);
  const [lessons, setLessons] = useState(null);

  useEffect(() => {
    fetch(`${backend_url}getLessons`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        setLessons(data[0]); // Set the data in your state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Schedule lessons={lessons} />;
};

export default GetLessons;
