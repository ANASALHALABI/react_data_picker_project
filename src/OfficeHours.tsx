import React, { useState } from "react";
import "./OfficeHours.css";

interface OfficeHour {
  day: string;
  start: string;
  end: string;
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const OfficeHours: React.FC = () => {
  const [hours, setHours] = useState<OfficeHour[]>(
    daysOfWeek.map((day) => ({ day, start: "", end: "" }))
  );
  const [submittedHours, setSubmittedHours] = useState<OfficeHour[] | null>(
    null
  );

  const handleTimeChange = (
    index: number,
    type: "start" | "end",
    value: string
  ) => {
    const newHours = [...hours];
    newHours[index][type] = value;
    setHours(newHours);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedHours(hours);
  };

  const isFormComplete = () => {
    return hours.every((hour) => hour.start && hour.end);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {hours.map((hour, index) => (
          <div className="container-form" key={hour.day}>
            <label>{hour.day}</label>
            <input
              type="time"
              value={hour.start}
              onChange={(e) => handleTimeChange(index, "start", e.target.value)}
            />
            <input
              type="time"
              value={hour.end}
              onChange={(e) => handleTimeChange(index, "end", e.target.value)}
            />
          </div>
        ))}
        <button type="submit" disabled={!isFormComplete()}>
          Submit
        </button>
      </form>
      {submittedHours && (
        <div className="submitted-hours">
          <h3>Submitted Office Hours:</h3>
          <ul>
            {submittedHours.map((hour, index) => (
              <li key={index}>
                {hour.day}: {hour.start} - {hour.end}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OfficeHours;
