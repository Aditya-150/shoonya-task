/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ onFilter }) => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    onFilter({ date: newDate, type });
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setType(newType);
    onFilter({ date, type: newType });
  };

  return (
    <div className="flex lg:flex-row flex-col gap-4">
      <div>
        <select
          value={date}
          onChange={handleDateChange}
          aria-placeholder="Filter by date"
          className="p-2 bg-primary text-white placeholder:text-white rounded w-full"
        >
          <option value="">All</option>
          <option value="2023-2024">2023-2024</option>
          <option value="2024-2025">2024-2025</option>
        </select>
      </div>
      <div>
        <select
          value={type}
          onChange={handleTypeChange}
          aria-placeholder="Filter by type"
          className="p-2 bg-primary text-white placeholder:text-white rounded w-full"
        >
          <option value="">All</option>
          <option value="Yoga">Yoga</option>
          <option value="Meditation">Meditation</option>
          <option value="Detox">Detox</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
