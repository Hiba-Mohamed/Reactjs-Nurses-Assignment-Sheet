import DatePickerComponent from "./datePickerComponent";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  nurseName: string;
  nurseBreak: number;
  reliefName: string;
  extraDuties: string;
  fireCode: string;
  patientName: string;
  patientRoom: string;
}

export function CreateSheet() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="font-nunito relative overflow-hidden mb-12">
      <p className="text-center font-bold text-xl my-4">
        To get started, please select a shift date and type. Then add nurses and
        patients.
      </p>
      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 m-4">
          <div className="mb-14">
            <DatePickerComponent />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Shift Type:</h3>
            <div className="flex flex row items-center justify-evenly">
              <button
                className="bg-yellow hover:bg-dyellow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Day Shift
              </button>
              <button
                className="bg-purple hover:bg-dpurple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Night Shift
              </button>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 my-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nurse's name
            </label>
            <input
              {...register("nurseName", { required: true, maxLength: 20 })}
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nurse's break
            </label>
            <input
              {...register("nurseBreak", { required: true, min: 1, max: 3 })}
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nurse's relief
            </label>
            <input
              {...register("reliefName", { required: true, maxLength: 20 })}
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Extra Duties
            </label>
            <input
              {...register("extraDuties", { required: true, maxLength: 20 })}
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fire Code
            </label>
            <input
              {...register("fireCode", { required: true, maxLength: 1 })}
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
            ></input>
          </div>

          <div id="all-patients">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Assigned Patients Details:
            </label>
            <div className="flex flex-row items-center my-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200">
              <input
                {...register("patientRoom", { required: true, maxLength: 20 })}
                className="w-24 appearance-none focus:outline-none w-full"
                type="text"
                id="room"
                placeholder="Room"
              ></input>
              <input
                {...register("patientName", { required: true, maxLength: 20 })}
                className="w-24 appearance-none focus:outline-none p-0"
                type="text"
                id="patient"
                placeholder="Patient"
              ></input>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-lgreen hover:bg-lgreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add patient
            </button>
            <button
              className="bg-green hover:bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add nurse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSheet;
