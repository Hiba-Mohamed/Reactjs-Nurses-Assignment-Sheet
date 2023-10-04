import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface IUnitShiftData {
  unitName: string;
  shiftDate: Date;
  shiftType: string;
}

const ShiftForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IUnitShiftData>();


  const onSubmit: SubmitHandler<IUnitShiftData> = (data, event) => {
    // Format the date as "YYYYMMDD"
    const formattedDate = data.shiftDate
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, "");

        const modifiedData = {
          ...data,
          shiftDate: formattedDate,
        };

    event?.preventDefault();
    console.log(data);
    const ShiftId = uuidv4(); // Generate a unique ID using uuid

    // Retrieve existing data from localStorage or create an empty array
    const existingDataJSON = localStorage.getItem("startShiftDataArray");
    const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
    const existingDatesWithTypes = existingData.map((item: any) => {
      const { shiftDate, shiftType } = item.data; // Remove the first property (unitName)
      return { shiftDate, shiftType }; // Create a new object without the first property
    });
    console.log("existingDatesWithTypes", existingDatesWithTypes);

const currentShift = {
  shiftDate: formattedDate,
  shiftType: data.shiftType,
};

console.log("currentShift", currentShift);

const isDuplicateShift = existingDatesWithTypes.some(
  (item: any) =>
    item.shiftDate === currentShift.shiftDate &&
    item.shiftType === currentShift.shiftType
);
if(!isDuplicateShift){
    existingData.push({ ShiftId, data: modifiedData });

    // Store the updated array back in localStorage
    localStorage.setItem("startShiftDataArray", JSON.stringify(existingData));

    // Redirect to the new page with the unique ID
    navigate(`/manageStaff/${ShiftId}`);
}
else{alert("Duplicate shift, please select a different date, or shift Type")}


  }
   

  // Function to disable past dates (including today)
  const disablePastDates = (date: Date) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison
    return date >= currentDate;
  };


  return (
    <div className="flex flex-col justify-evenly">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 my-4"
        id="unitData-form"
      >
        <div className="mb-4 flex flex-col justify-center">
          <label className="font-bold text-xl">Unit's name:</label>
          <input
            {...register("unitName", { required: true, maxLength: 30 })}
            type="text"
            className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block p-3 h-10 shadow-sm sm:text-md focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
          ></input>
          {errors?.unitName?.type === "required" && (
            <p className="text-peach">This field is required</p>
          )}
          {errors?.unitName?.type === "maxLength" && (
            <p className="text-peach">
              Unit's name cannot exceed 30 characters
            </p>
          )}
        </div>
        <div className="mb-14">
          <div>
            <h3 className="text-xl font-bold mb-4">Shift Date:</h3>
            <Controller
              control={control}
              name="shiftDate"
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  placeholderText=""
                  onChange={(date) => field.onChange(date)}
                  className="w-full px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  filterDate={disablePastDates} // Apply the validation function
                  selected={field.value}
                />
              )}
            />
            {errors?.shiftDate?.type === "required" && (
              <p className="text-peach">
                {errors?.shiftDate?.message || "This field is required"}
              </p>
            )}
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShiftForm;
