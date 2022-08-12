import "./styles.css";
import React from "react";

/*
  1. Select day, Turn it bold (default "M")
  2. Create a state for each day's tomatoes 🍅 
  3. Increment / decrement should work based
     which day is selected 
*/

const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];

export default function App() {
  const [selectedDay, setSelectedDay] = React.useState("M");
  const [tomatoes, setTomatoes] = React.useState({});

  function addTomato() {
    const newTomatoes = { ...tomatoes };
    const currentDayTomatoes = newTomatoes[selectedDay];
    if (currentDayTomatoes) {
      newTomatoes[selectedDay] = currentDayTomatoes + "🍅";
    } else {
      newTomatoes[selectedDay] = "🍅";
    }
    setTomatoes(newTomatoes);
  }

  function removeTomato() {
    const newTomatoes = { ...tomatoes };
    const currentDayTomatoes = newTomatoes[selectedDay];
    if (currentDayTomatoes) {
      newTomatoes[selectedDay] = currentDayTomatoes.slice(0, -2);
    }
    setTomatoes(newTomatoes);
  }

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        {days.map((day) => (
          <div
            onClick={() => setSelectedDay(day)}
            style={selectedDay === day ? { color: "black" } : {}}
            key={day}
            className="tomato-box"
          >
            <h3>{day}</h3>
            <div className="tomato-day-box">{tomatoes[day]}</div>
          </div>
        ))}
        <div className="buttons-container">
          <div onClick={removeTomato} className="button">
            -
          </div>
          <div onClick={addTomato} className="button">
            +
          </div>
        </div>
      </div>
    </div>
  );
}
