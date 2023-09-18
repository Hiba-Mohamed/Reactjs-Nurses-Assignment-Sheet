import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm, SubmitHandler, useWatch } from "react-hook-form";
import ShiftListComponent from "../components/shiftListComponent";


interface IShiftSearch {
  shiftDate: Date;
  shiftType: string;
}

export function ShiftHistory() {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IShiftSearch>();

  const onSubmit: SubmitHandler<IShiftSearch> = (data, event) => {
    event?.preventDefault();
    console.log(data);
  };

  console.log(watch("shiftType"));

  return (
    <div className="bg-slate-100 font-nunito">
      <div className="h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-bold">Shift Record</h1>

          <div className="flex flex-col md:flex-col items-center p-4 bg-white rounded-xl shadow-lg">
            <div className="relative">
              <div className="flex items-center pointer-events-none"></div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-row items-center justify-center"
              >
                <div>
                  <Controller
                    control={control}
                    name="shiftDate"
                    render={({ field }) => (
                      <DatePicker
                        placeholderText="Enter shift date"
                        onChange={(date) => field.onChange(date)}
                        className="w-full px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        selected={field.value}
                      />
                    )}
                  />
                </div>
                <div className="basis-1/2 mr-2">
                  <select
                    {...register("shiftType", { required: true })}
                    className={`mx-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200 ${!watch("shiftType") && "opacity-50"}`}
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-slate-400"
                    >
                      Enter shift type
                    </option>
                    <option value="Day Shift">Day Shift</option>
                    <option value="Night Shift">Night Shift</option>
                  </select>{" "}
                  {errors?.shiftType?.type === "required" && (
                    <p className="text-peach">
                      {errors?.shiftType?.message || "This field is required"}
                    </p>
                  )}
                </div>{" "}
                <button
                  className="mx-2 flex items-center justify-center bg-cyan-600 py-2 px-4 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer text-center"
                  type="submit"
                >
                  Search
                </button>
              </form>

            </div>
          </div>
          <ShiftListComponent />
        </div>
      </div>
    </div>
  );
}
