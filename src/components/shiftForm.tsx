import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  unit: string;
  shiftDate: Date;
  shiftType: string;
}

interface IUnitShiftData {
  unitName: string;
  shiftDate: Date;
  shiftType: string;
}

const ShiftForm = () => {
  const [unitShiftData, setUnitShiftData] = useState<IUnitShiftData[]>(JSON.parse(
       localStorage.getItem("unitShiftData") || "[]"
)); 

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();



  const onSubmit: SubmitHandler<IFormInput> = (data, event) => {
    event?.preventDefault();
    console.log(data);

    // Update the unit shift data in state
    setUnitShiftData([...unitShiftData ]);

    // Save the updated unit shift data to local storage
    localStorage.setItem(
      "unitShiftData",
      JSON.stringify([...unitShiftData])
    );

    // Update the formSubmitted state to true after submission
    setFormSubmitted(true);
  };

  // Function to disable past dates (including today)
  const disablePastDates = (date: Date) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison
    return date >= currentDate;
  };

  return (
    <div className="flex flex-col justify-evenly">
      <div className="mt-8">
        <ul>
          {unitShiftData.length > 0 && (
            <div className="w-screen flex flex-col items-center justify-center text-nunito-900 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center m-4">
              <ul>
                {unitShiftData.map((shift, index) => (
                  <li key={index} className="mb-2">
                    <p>Unit: {shift.unitName}</p>
                    <p>
                      Date: {new Date(shift.shiftDate).toLocaleDateString()}
                    </p>
                    <p>{shift.shiftType}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ul>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 my-4"
        id="unitData-form"
      >
        <div className="mb-4 flex flex-col justify-center">
          <label className="font-bold text-xl">Unit's name:</label>
          <input
            {...register("unit", { required: true, maxLength: 30 })}
            type="text"
            className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block p-3 h-10 shadow-sm sm:text-md focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
          ></input>
          {errors?.unit?.type === "required" && (
            <p className="text-peach">This field is required</p>
          )}
          {errors?.unit?.type === "maxLength" && (
            <p className="text-peach">
              Unit's name cannot exceed 30 characters
            </p>
          )}
        </div>
        <div className="mb-14">
          <div>
            <h3 className="text-xl font-bold mb-4">Shift Date:</h3>
            <DatePicker
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              filterDate={disablePastDates} // Apply the validation function
              {...register("shiftDate", { required: true })}
              id="shift-date"
            />
          </div>
        </div>
        <div className="mb-6 basis-1/2 mr-2">
          <label className="font-bold text-xl">Shift Type:</label>
          <select
            {...register("shiftType", { required: true })}
            className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
          >
            <option value=""></option>
            <option value="Day Shift">Day Shift</option>
            <option value="Night Shift">Night Shift</option>
          </select>{" "}
          {errors?.shiftType?.type === "required" && (
            <p className="text-peach">
              {errors?.shiftType?.message || "This field is required"}
            </p>
          )}
        </div>
        <button
          className="flex justify-center items-center mx-auto bg-green hover:bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          id="unit-shift-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShiftForm;
