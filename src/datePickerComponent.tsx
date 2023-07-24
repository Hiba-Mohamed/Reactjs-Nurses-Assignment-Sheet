import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DatePickerComponent;
