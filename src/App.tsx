import React from "react";
import OfficeHours from "./OfficeHours";
import "./App.css";
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Office Hours</h1>
        <OfficeHours />
      </div>
    </div>
  );
};

export default App;
