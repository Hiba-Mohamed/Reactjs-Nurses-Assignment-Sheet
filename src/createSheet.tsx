import DatePickerComponent from "./datePickerComponent";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  unit: string;
  shiftDate: Number;
  shiftType: string;
  nurseName: string;
  nurseBreak: string;
  reliefName: string;
  extraDuties: string;
  fireCode: string;
  patientName: string;
  patientRoom: string;
}

export function CreateSheet() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  // function createUnitObject (){

  //   let unitName = document.getElementById('unit-name').value;
  //   let shiftDate = document.getElementById('');
  //   let shiftType = document.getElementById('shift-type');
  //   let nurseName = document.getElementById('nurse-name');
  // let nurseBreak = document.getElementById('nurse-break');
  // let reliefName = document.getElementById('relief-name');
  // let extraDuties = document.getElementById('extra-duties');
  // let fireCode = document.getElementById('fire-code');
  // let patientName = document.getElementById('patient');
  // let patientRoom = document.getElementById('room');

  // }

  const unit = {
    shift: {
      date: "1/August/2023",
      type: "Night",
      staff: {
        nurse1: {
          nurseName: "Max",
          nurseBreak: "First",
          reliefName: "Bob",
          fireCode: "R",
          extraDuties: "In-charge",
          patients: {
            patient1: {
              patientName: "123B",
              patientRoom: "Smith",
            },
            patient2: {
              patientName: "160A",
              patientRoom: "White",
            },
          },
        },
        nurse2: {
          nurseName: "Ravi",
          nurseBreak: "Second",
          reliefName: "Max",
          fireCode: "A",
          extraDuties: "Shift Count",
          patients: {
            patient1: {
              patientName: "140B",
              patientRoom: "Green",
            },
            patient2: {
              patientName: "165A",
              patientRoom: "Brown",
            },
          },
        },
      },
    },
  };

  return (
    <div className="font-nunito relative overflow-hidden mb-12">
      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 m-4">
          <div className="mb-4 flex flex-col justify-center">
            <label className="font-bold text-xl">Unit's name:</label>
            <input
              {...register("unit", { required: true, maxLength: 30 })}
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block p-3 h-10 shadow-sm sm:text-md focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
              id="unit-name"
            ></input>
            {errors?.nurseName?.type === "required" && (
              <p className="text-peach">This field is required</p>
            )}
            {errors?.nurseName?.type === "maxLength" && (
              <p className="text-peach">
                Unit's name cannot exceed 30 characters
              </p>
            )}
          </div>
          <div className="mb-14">
            <DatePickerComponent />
          </div>
          <div className="mb-6 basis-1/2 mr-2">
            <label className="font-bold text-xl">Shift Type:</label>
            <select
              {...register("shiftType", { required: true })}
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
              id="shift-type"
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
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 my-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Nurse's name
            </label>
            <input
              {...register("nurseName", { required: true, maxLength: 30 })}
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
              id="nurse-name"
            ></input>
            {errors?.nurseName?.type === "required" && (
              <p className="text-peach">This field is required</p>
            )}
            {errors?.nurseName?.type === "maxLength" && (
              <p className="text-peach">
                Nurse's name cannot exceed 30 characters
              </p>
            )}
          </div>

          <div className="flex flex-row">
            <div className="mb-6 basis-1/2 mr-2">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Nurse's break
              </label>
              <select
                {...register("nurseBreak", { required: true })}
                className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
                id="nurse-break"
              >
                <option value=""></option>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
              </select>{" "}
              {errors?.nurseBreak?.type === "required" && (
                <p className="text-peach">This field is required</p>
              )}
            </div>
            <div className="mb-6 basis-1/2 ml-2">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Nurse's relief
              </label>
              <input
                {...register("reliefName", { required: true, maxLength: 20 })}
                type="text"
                className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
                id="relief-name"
              ></input>
              {errors?.reliefName?.type === "required" && (
                <p className="text-peach">This field is required</p>
              )}
              {errors?.reliefName?.type === "maxLength" && (
                <p className="text-peach">
                  Nurse's relief cannot exceed 30 characters
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-row">
            <div className="mb-6 basis-1/2 mr-2">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Extra Duties
              </label>
              <input
                {...register("extraDuties", { required: false, maxLength: 40 })}
                type="text"
                className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
                id="extra-duties"
              ></input>
              {errors?.extraDuties?.type === "maxLength" && (
                <p className="text-peach">
                  Extra Duties cannot exceed 40 characters
                </p>
              )}
            </div>
            <div className="mb-6 basis-1/2 ml-2">
              <label className="block text-gray-700 text-md font-bold mb-2">
                Fire Code
              </label>
              <select
                {...register("fireCode", { required: true })}
                className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
                id="fire-code"
              >
                <option value=""></option>
                <option value="R">R</option>
                <option value="A">A</option>
                <option value="C">C</option>
                <option value="E">E</option>
              </select>{" "}
              {errors?.fireCode?.type === "required" && (
                <p className="text-peach">This field is required</p>
              )}
            </div>
          </div>

          <div id="all-patients">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Assigned Patients Details:
            </label>
            <div className="flex flex-row items-center my-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200">
              <input
                {...register("patientRoom", { required: false, maxLength: 20 })}
                className="w-24 appearance-none focus:outline-none w-full"
                type="text"
                id="room"
                placeholder="Room"
              ></input>
              <input
                {...register("patientName", { required: false, maxLength: 20 })}
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
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSheet;
