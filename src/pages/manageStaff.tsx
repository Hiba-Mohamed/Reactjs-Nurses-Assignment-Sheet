import {
  useForm,
  SubmitHandler,
  useFieldArray,
  Controller,
} from "react-hook-form";
import { useParams } from "react-router-dom";
import NurseCardDisplay from "../components/nurseCardDisplay";

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

export function NurseForm() {
  const { ShiftId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<IFormInput>();

  const { fields, append, remove } = useFieldArray({
    name: "assignedPatient",
    control,
  });

  const onSubmit: SubmitHandler<IFormInput> = (nurseData, event) => {
    event?.preventDefault();
    makeAndAddNurseDataToLS(nurseData);
    reset();

    console.log(nurseData);
  };

  // function preventDuplicateNurseNameAndPatientData(nurseData: IFormInput) {
  //   // retrieve existing data from local storage
  //   // retrieve current data from the form
  //   //   // a- compare the new "nurseName" with all the "nurseName" in local storage, if there is duplication, the function will just stop excuting and prevent the folowing steps from happening.
  //   //   // b-       *compare the all new "patientName"'s with each other
  //   //   //          *compare all new "patientName"'s with all the "patientName" in local storage
  //   //   //     if there is duplication in any, the function will just stop excuting and prevent the folowing steps from happening.
  //   //   // c-       *compare the all new "patientRoom"'s with each other
  //   //   //          *compare all new "patientRoom"'s with all the "patientRoom" in local storage
  //   //   //     if there is duplication in any, the function will just stop excuting and prevent the folowing steps from happening.
  // }

  function makeAndAddNurseDataToLS(nurseData: IFormInput) {
    // Retrieve the existing shift data array from localStorage
    const existingDataJSON = localStorage.getItem("startShiftDataArray");
    const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

    // Find the shift data object with the matching ShiftId
    const matchingDataIndex = existingData.findIndex(
      (data: any) => data.ShiftId === ShiftId
    );

    if (matchingDataIndex !== -1) {
      // If a matching shift data is found, update its "staff" property
      existingData[matchingDataIndex].staff =
        existingData[matchingDataIndex].staff || [];
      existingData[matchingDataIndex].staff.push(nurseData);

      // Update the localStorage with the modified data
      localStorage.setItem("startShiftDataArray", JSON.stringify(existingData));
    } else {
      console.log("Matching shift data not found for the provided ShiftId.");
    }
  }




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
  if (staffData) {
    for (const formInput of staffData) {
      if (formInput.assignedPatient) {
        const isDuplicate = formInput.assignedPatient.some(
          (patient) => patient.patientName === patientName
        );

        // If a duplicate is found, return the error message
        if (isDuplicate) {
          return "Patient name already assigned in this shift";
        }
      }
    }
  }

  // If no duplicate is found in any of the form inputs, return true
  return true;
};

const validatePatientRoom = (patientRoom: string, ShiftId: string) => {
  // Retrieve existing staff data for the current shift from local storage
  const staffData = retrieveStaffData(ShiftId);

  // Check if the provided patientName already exists in the assignedPatient array
  if (staffData) {
    for (const formInput of staffData) {
      if (formInput.assignedPatient) {
        const isDuplicate = formInput.assignedPatient.some(
          (patient) => patient.patientRoom === patientRoom
        );

        // If a duplicate is found, return the error message
        if (isDuplicate) {
          return "Room number already assigned in this shift";
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

    console.log(shiftData);
    if (ShiftId) {
      const staffData = retrieveStaffData(ShiftId);

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

          <div>
            {" "}
            <NurseCardDisplay staffData={staffData} />{" "}
          </div>

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
                        <div className=" flex flex-row items-center mx-2 my-2 mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200">
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

                          {errors?.assignedPatient?.[index]?.patientRoom
                            ?.type === "validate" && (
                            <p className="text-peach">
                              {
                                errors?.assignedPatient?.[index]?.patientRoom
                                  ?.message
                              }
                            </p>
                          )}

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
                                className="w-24 appearance-none focus:outline-none "
                                type="text"
                                value={value}
                                onChange={onChange}
                                placeholder="Patient"
                              />
                            )}
                          />

                          {errors?.assignedPatient?.[index]?.patientName
                            ?.type === "validate" && (
                            <p className="text-peach">
                              {
                                errors?.assignedPatient?.[index]?.patientName
                                  ?.message
                              }
                            </p>
                          )}
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
        </div>
      );
    } else {
      console.log("ShiftId is undefined.");
    }
  } else {
    console.log("ShiftId is undefined.");
  }
}

export default NurseForm;
