import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export function ShiftDatePickerComponent(){
      const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

    const disablePastDates = (date: Date) => {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison
      return date >= currentDate;
    };

    return(
                    <div>
              <h3 className="text-xl font-bold mb-4">Shift Date:</h3>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                filterDate={disablePastDates} // Apply the validation function
                required={true}
                id="shift-date"
              />
            </div>
    )

}

export default ShiftDatePickerComponent