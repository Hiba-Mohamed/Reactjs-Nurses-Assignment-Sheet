import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm, SubmitHandler } from "react-hook-form";

interface IShiftSearch {
  shiftDate: Date;
  shiftType: string;
}

export function ShiftHistory() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IShiftSearch>();

  const onSubmit: SubmitHandler<IShiftSearch> = (data, event) => {
    event?.preventDefault();
    console.log(data);
  };

  return (
    <div className="bg-slate-100 font-nunito">
      <div className="relative">
        <div className="space-y-4 flex flex-col items-center w-screen mb-8">
          <h1 className="text-center mt-10 text-4xl font-bold">Shift Record</h1>

          <div className="flex flex-col md:flex-row items-center p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 md:duration-500">
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"></div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="font-bold text-xl">Date:</label>
                <div>
                  <Controller
                    control={control}
                    name="shiftDate"
                    render={({ field }) => (
                      <DatePicker
                        placeholderText=""
                        onChange={(date) => field.onChange(date)}
                        className="w-full px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        selected={field.value}
                      />
                    )}
                  />
                </div>
                <div className="mb-6 basis-1/2 mr-2">
                  <label className="font-bold text-xl">Type:</label>
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
                </div>{" "}
                <div className="flex items-center justify-center bg-cyan-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer text-center">
                  <button
                    className="flex flex-col justify-center text-center"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Article name or keyword..."
              />
            </div>
            <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
              <span>All categorie</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="bg-yellow-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
