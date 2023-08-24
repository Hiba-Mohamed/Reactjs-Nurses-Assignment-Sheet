import { useForm, SubmitHandler, useFieldArray, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";

interface IPatientData {
  patientName: string;
  patientRoom: string;
}

interface IFormInput {
  nurseName: string;
  nurseBreak: string;
  reliefName: string;
  extraDuties: string;
  fireCode: string;
  assignedPatient: IPatientData[];
}

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export function NurseForm() {
  const { ShiftId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInput>();


    const { fields, append, remove } = useFieldArray({
      name: "assignedPatient",
      control,
    });


  const onSubmit: SubmitHandler<IFormInput> = (nurseData, event) => {
    event?.preventDefault();
    handleSubmittingNurseDataRelatedfunctions();

    console.log(nurseData);
  };

  function handleSubmittingNurseDataRelatedfunctions() {
    preventDuplicateNurseNameAndPatientData();
    makeAndAddNurseDataToLS();
    displayNurseData();
  }

  function preventDuplicateNurseNameAndPatientData() {
    // This function aims to validate the nurse date by comparing the newly entered user input with data in local storage.
    // a- compare the new "nurseName" with all the "nurseName" in local storage, if there is duplication, the function will just stop excuting and prevent the folowing steps from happening
    // b- compare the new "patientName" with all the "patientName" in local storage, if there is duplication, the function will just stop excuting and prevent the folowing steps from happening
    // b- compare the new "patientRoom" with all the "patientRoom" in local storage, if there is duplication, the function will just stop excuting and prevent the folowing steps from happening
  }

  function makeAndAddNurseDataToLS() {
    // after the nurseData had been validated and duplication is checked and cleared, each nurse data with be inserted into an array object called (staff) that will look like this:
    // staff = [{
    //         nurseName: "Ravi",
    //         nurseBreak: "Second",
    //         reliefName: "Max",
    //         fireCode: "A",
    //         extraDuties: "Shift Count",
    //         patients: {
    //           patient1: {
    //             patientName: "140B",
    //             patientRoom: "Green",
    //           },
    //           patient2: {
    //             patientName: "165A",
    //             patientRoom: "Brown",
    //           },
    // {
    //         nurseName: "Ravi",
    //         nurseBreak: "Second",
    //         reliefName: "Max",
    //         fireCode: "A",
    //         extraDuties: "Shift Count",
    //         patients: {
    //           patient1: {
    //             patientName: "140B",
    //             patientRoom: "Green",
    //           },
    //           patient2: {
    //             patientName: "165A",
    //             patientRoom: "Brown",
    //           },
    //         ]
    //      This  "staff" object will be pushed to the "shiftData" object in local storage.
    //      any new added nurses will be added to the "staff" array in local storage
  }

  function displayNurseData() {
    // This function will map through the existing data in local storage and display them 
  }

  function handleEditNurseData() {
    // this function will autopopulate the nurse form with the specified nurse data index from local storage
    // then will essentially call the delete function for the nurse data with the specified index
    // then will call the display data function.
    // when the user is done editing, the rest will be handled by the on-submit function
  }

  function HandleDeleteNurseData() {
    // this function will splice the nurse data with the specified index from local storage
    // then it will call show nurse data function to update the layout.
  }

  function retriveShiftDataLSwithShiftId(ShiftId: string): any {
    // Retrieve shift data array from localStorage
    const existingDataJSON = localStorage.getItem("startShiftDataArray");
    const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

    console.log("existing Data", existingData);

    // Find the shift data object with the matching shiftId
    const matchingData = existingData.find(
      (data: any) => data.ShiftId === ShiftId
    );

    console.log("matching Data:", matchingData);
    return matchingData ? matchingData.data : null;
  }

  if (ShiftId) {
    // Check if ShiftId is defined
    const shiftData = retriveShiftDataLSwithShiftId(ShiftId);

    if (shiftData) {
      return (
        <div className="font-nunito bg-greygreen">
          <div className="flex flex-col items-center justify-center ">
            <div className="text-nunito-900 font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center p-4 bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 py-4 m-8 text-green">
              <p>{shiftData.unitName}</p>
              <div className="flex flex-row items-center">
                {" "}
                <p className="px-4">{formatDate(shiftData?.shiftDate)}</p>
                <p className="px-4">{shiftData.shiftType}</p>
              </div>
            </div>
          </div>
          <div className="font-nunito relative overflow-hidden pb-12">
            <div className="flex flex-row flex-wrap justify-evenly">
              <h1>Viewing Sheet for ID: {ShiftId}</h1>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 my-4"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-md font-bold mb-2">
                    Nurse's name
                  </label>
                  <input
                    {...register("nurseName", {
                      required: true,
                      maxLength: 30,
                    })}
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
                      {...register("reliefName", {
                        required: true,
                        maxLength: 20,
                      })}
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
                      {...register("extraDuties", {
                        required: false,
                        maxLength: 40,
                      })}
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
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
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
                  {fields.map((field, index) => (
                    <div key={field.id} className="flex flex-row items-center">
                      <div className=" flex flex-row items-center mx-2 my-2 mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200">
                        <Controller
                          name={`assignedPatient.${index}.patientRoom`}
                          control={control}
                          defaultValue=""
                          rules={{ required: true, maxLength: 20 }}
                          render={({ field: { onChange, value } }) => (
                            <input
                              className="w-24 appearance-none focus:outline-none w-full"
                              type="text"
                              value={value}
                              onChange={onChange}
                              placeholder="Room"
                            />
                          )}
                        />
                        <Controller
                          name={`assignedPatient.${index}.patientName`}
                          control={control}
                          defaultValue=""
                          rules={{ required: true, maxLength: 20 }}
                          render={({ field: { onChange, value } }) => (
                            <input
                              className="w-24 appearance-none focus:outline-none "
                              type="text"
                              value={value}
                              onChange={onChange}
                              placeholder="Patient"
                            />
                          )}
                        />
                      </div>
                      <div>
                        {" "}
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="bg-white px-2 border border-red-600 rounded-lg text-red-600"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() =>
                        append({ patientName: "", patientRoom: "" })
                      }
                      className="bg-white px-2 border border-green rounded-lg text-green"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-center items-center pt-4">
                  <button
                    className="bg-orange-300 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center p-8">
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save Sheet
            </button>
          </div>
        </div>
      );
      console.log("Shift Data:", shiftData);
    } else {
      console.log("Shift Data not found for the provided shiftId.");
    }
  } else {
    console.log("ShiftId is undefined.");
  }
}

export default NurseForm;
