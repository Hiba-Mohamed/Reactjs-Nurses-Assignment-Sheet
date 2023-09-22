import {
  useForm,
  SubmitHandler,
  useFieldArray,
  Controller,
} from "react-hook-form";

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

export function retrieveStaffData(ShiftId: string): IFormInput[] {
  const existingDataJSON = localStorage.getItem("startShiftDataArray");
  const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

  const matchingData = existingData.find(
    (data: any) => data.ShiftId === ShiftId
  );

  return matchingData.staff ?? [];
}





export const  NurseInfoForm = ({onSubmit, Shifturl}:{onSubmit:SubmitHandler<IFormInput>, Shifturl:string}) =>{

  const ShiftId = Shifturl;

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


const validateNurseName = (nurseName: string, ShiftId: string) => {
  // Retrieve existing staff data for the current shift from local storage
  const staffData = retrieveStaffData(ShiftId);

  // Check if nurseName already exists in the staff data
  const isDuplicate = staffData.some((staff) => staff.nurseName === nurseName);

  // Return true if nurseName is not a duplicate, false if it's a duplicate
  return isDuplicate ? "Nurse name already exists in this shift" : true;
};

const validatePatientName = (patientName: string, ShiftId: string) => {
  // Retrieve existing staff data for the current shift from local storage
  const staffData = retrieveStaffData(ShiftId);


  // Check if the provided patientName already exists in the assignedPatient array
  if (staffData && patientName !== "") {
    for (const formInput of staffData) {
      if (formInput.assignedPatient) {
        const isDuplicate = formInput.assignedPatient.some(
          (patient) => patient.patientName === patientName
        );

        // If a duplicate is found, return the error message
        if (isDuplicate) {
          return "Duplicate patient name";
        }
      }
    }
  }

  // If no duplicate is found  or if the input is empty string in any of the form inputs, return true
  return true;
};

const validatePatientRoom = (patientRoom: string, ShiftId: string) => {
  // Retrieve existing staff data for the current shift from local storage
  const staffData = retrieveStaffData(ShiftId);

  // Check if the provided patientName already exists in the assignedPatient array
  if (staffData && patientRoom !== "") {
    
    for (const formInput of staffData) {
      if (formInput.assignedPatient) {
        const isDuplicate = formInput.assignedPatient.some(
          (patient) => patient.patientRoom  === patientRoom
      );

        // If a duplicate is found, return the error message
        if (isDuplicate) {
          return "Duplicate patient room";
        }
      }
    }
  }

  // If no duplicate is found in any of the form inputs, return true
  return true;
};
console.log(errors);


  if (ShiftId) {
    // Check if ShiftId is defined
    const shiftData = retriveShiftDataLSwithShiftId(ShiftId);
  
console.log("shiftData", shiftData);

    console.log(shiftData);
   if (ShiftId) {
    // Check if ShiftId is defined
    const shiftData = retriveShiftDataLSwithShiftId(ShiftId);
  
console.log("shiftData", shiftData);

    console.log(shiftData);
    if (ShiftId) {
      const staffData = retrieveStaffData(ShiftId);
      console.log("staffData", staffData);
      return (
        <div className="font-nunito bg-greygreen">
          <div className="font-nunito bg-greygreen">
            <div className="font-nunito relative overflow-hidden pb-12">
              <div className="flex flex-row flex-wrap justify-evenly">
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
                        validate: (value) => validateNurseName(value, ShiftId),
                      })}
                      type="text"
                      className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
                      id="nurse-name"
                    />
                    {errors?.nurseName?.type === "required" && (
                      <p className="text-peach">This field is required</p>
                    )}
                    {errors?.nurseName?.type === "maxLength" && (
                      <p className="text-peach">
                        Nurse's name cannot exceed 30 characters
                      </p>
                    )}
                    {errors.nurseName &&
                      errors.nurseName.type === "validate" && (
                        <p className="text-peach">{errors.nurseName.message}</p>
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
                      <div
                        key={field.id}
                        className="flex flex-row items-center"
                      >
                        <div className="flex flex-col">
                          <div className="flex flex-row items-center mx-2 my-2 mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200">
                            <Controller
                              name={`assignedPatient.${index}.patientRoom`}
                              control={control}
                              defaultValue=""
                              rules={{
                                required: true,
                                maxLength: 20,
                                validate: (value) =>
                                  validatePatientRoom(value, ShiftId),
                              }}
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
                              rules={{
                                required: true,
                                maxLength: 20,
                                validate: (value) =>
                                  validatePatientName(value, ShiftId),
                              }}
                              render={({ field: { onChange, value } }) => (
                                <input
                                  className="w-24 appearance-none focus:outline-none"
                                  type="text"
                                  value={value}
                                  onChange={onChange}
                                  placeholder="Patient"
                                />
                              )}
                            />
                          </div>

                          <div className="flex flex-row justify-end justify-center mx-2 mb-4 w-full appearance-none text-nunito-900 bg-white rounded-md block p-3 h-10 sm:text-sm">
                            {errors?.assignedPatient?.[index]?.patientRoom
                              ?.type === "validate" && (
                              <p className="text-peach w-24 appearance-none focus:outline-none">
                                {
                                  errors?.assignedPatient?.[index]?.patientRoom
                                    ?.message
                                }
                              </p>
                            )}
                            {errors?.assignedPatient?.[index]?.patientName
                              ?.type === "validate" && (
                              <p className="text-peach w-24 appearance-none focus:outline-none">
                                {
                                  errors?.assignedPatient?.[index]?.patientName
                                    ?.message
                                }
                              </p>
                            )}
                          </div>
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
          </div>
        </div>
      );
    } else {
      console.log("ShiftId is undefined.");
    }
  } else {
    console.log("ShiftId is undefined.");
  }
}}

export default NurseInfoForm;