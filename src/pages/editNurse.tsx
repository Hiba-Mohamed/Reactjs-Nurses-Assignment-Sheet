import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFieldArray, Controller } from "react-hook-form";

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

export const NurseInfoForm = ({
  onSubmit,
  Shifturl,
  form,
}: {
  onSubmit: SubmitHandler<IFormInput>;
  Shifturl: string;
  form: any;
}) => {
  const ShiftId = Shifturl;

  // Retrieve shift data array from localStorage
  const existingDataJSON = localStorage.getItem("startShiftDataArray");
  const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

  console.log("existing Data", existingData);
  console.log("existing Data", existingData);

  // Find the shift data object with the matching shiftId
  const matchingData = existingData.find(
    (data: any) => data.ShiftId === ShiftId
  );

  const shiftData = matchingData;
  console.log("matching Data:", matchingData);
  console.log("matching staff:", matchingData.staff);

  const staffData = matchingData.staff;

  console.log("matching Staff:", staffData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const { fields, append, remove } = useFieldArray({
    name: "assignedPatient",
    control,
  });

  const validateNurseName = (nurseName: string) => {
    // Retrieve existing staff data for the current shift from local storage
    console.log(staffData);

    // Check if nurseName already exists in the staff data
    if (staffData !== 0 && staffData !== undefined) {
      const isDuplicate = staffData.filter(
        (nurse: any) => nurse.nurseData.nurseName === nurseName
      );
console.log("isDuplicate:", isDuplicate)
const DuplicateArrayLength = isDuplicate.length;

console.log("isDuplicate length:", DuplicateArrayLength);

      // Return true if nurseName is not a duplicate, false if it's a duplicate
      if (isDuplicate.length = 2 || isDuplicate.length > 2)  {return "Nurse name already exists in this shift"} 
      else{
        return true;
      }
    }
  };

  const validatePatientName = (patientName: string) => {
    // Retrieve existing staff data for the current shift from local storage

    // Check if the provided patientName already exists in the assignedPatient array
    if (staffData && patientName !== "" && patientName !== undefined) {
      const isDuplicate = staffData.some((nurse: any) =>
        nurse.nurseData.assignedPatient.some(
          (patient: any) => patient.patientName === patientName
        )
      );
      if (isDuplicate) {
        return "patient assigned to different nurse";
      }
      return true;
    }
    // If no duplicate is found  or if the input is empty string in any of the form inputs, return true
    return true;
  };

  const validatePatientRoom = (patientRoom: string) => {
    // Check if the provided patientName already exists in the assignedPatient array
    if (staffData && patientRoom !== "" && patientRoom !== undefined) {
      const isDuplicate = staffData.some((nurse: any) =>
        nurse.nurseData.assignedPatient.some(
          (patient: any) => patient.patientRoom === patientRoom
        )
      );
      if (isDuplicate) {
        return "room assigned to different nurse";
      }
      return true;
    }

    // If no duplicate is found in any of the form inputs, return true
    return true;
  };
  console.log(errors);

  if (ShiftId) {
    // Check if ShiftId is defined

    console.log("shiftData", shiftData);

    console.log(shiftData);
    if (ShiftId) {
      // Check if ShiftId is defined

      console.log("shiftData", shiftData);

      console.log(shiftData);
      if (ShiftId) {
        console.log("staffData", staffData);
        return (
          <div className="bg-greygreen font-nunito relative pb-12 flex flex-row flex-wrap justify-evenly text-sm sm:text-md">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mx-2 max-w-sm sm:max-w-xl"
            >
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Nurse's name
                </label>
                <input
                  {...register("nurseName", {
                    required: true,
                    maxLength: 30,
                    validate: (value: string) => validateNurseName(value),
                  })}
                  type="text"
                  className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
                  id="nurse-name"
                />
                {errors?.nurseName?.type === "required" && (
                  <p className=" text-sm text-peach">This field is required</p>
                )}
                {errors?.nurseName?.type === "maxLength" && (
                  <p className=" text-sm text-peach">
                    Nurse's name cannot exceed 30 characters
                  </p>
                )}
                {errors.nurseName && errors.nurseName.type === "validate" && (
                  <p className=" text-sm text-peach">
                    {errors.nurseName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-row">
                <div className="mb-6 basis-1/2 mr-2">
                  <label className="block text-gray-700 font-bold mb-2">
                    Nurse's break
                  </label>
                  <select
                    {...register("nurseBreak", { required: true })}
                    className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
                    id="nurse-break"
                  >
                    <option value=""></option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                  </select>{" "}
                  {errors?.nurseBreak?.type === "required" && (
                    <p className="text-peach text-sm">This field is required</p>
                  )}
                </div>
                <div className="mb-6 basis-1/2 ml-2">
                  <label className="block text-gray-700 font-bold mb-2">
                    Nurse's relief
                  </label>
                  <input
                    {...register("reliefName", {
                      required: true,
                      maxLength: 20,
                    })}
                    type="text"
                    className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
                    id="relief-name"
                  ></input>
                  {errors?.reliefName?.type === "required" && (
                    <p className=" text-sm text-peach">
                      This field is required
                    </p>
                  )}
                  {errors?.reliefName?.type === "maxLength" && (
                    <p className=" text-sm text-peach">
                      Nurse's relief cannot exceed 30 characters
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mb-6 basis-1/2 mr-2">
                  <label className="block text-gray-700 font-bold mb-2">
                    Extra Duties
                  </label>
                  <input
                    {...register("extraDuties", {
                      required: false,
                      maxLength: 40,
                    })}
                    type="text"
                    className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
                    id="extra-duties"
                  ></input>
                  {errors?.extraDuties?.type === "maxLength" && (
                    <p className=" text-sm text-peach">
                      Extra Duties cannot exceed 40 characters
                    </p>
                  )}
                </div>
                <div className="mb-6 basis-1/2 ml-2">
                  <label className="block text-gray-700 font-bold mb-2">
                    Fire Code
                  </label>
                  <select
                    {...register("fireCode", { required: true })}
                    className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
                    id="fire-code"
                  >
                    <option value=""></option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>{" "}
                  {errors?.fireCode?.type === "required" && (
                    <p className=" text-sm text-peach">
                      This field is required
                    </p>
                  )}
                </div>
              </div>

              <div id="all-patients">
                <label className="block text-gray-700 font-bold mb-2">
                  Assigned Patients Details:
                </label>
                {fields.map((field, index) => (
                  <div key={field.id} className="flex flex-row items-center">
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center mx-2 my-2 mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200">
                        <Controller
                          name={`assignedPatient.${index}.patientRoom`}
                          control={control}
                          defaultValue=""
                          rules={{
                            required: true,
                            maxLength: 20,
                            validate: (value) => validatePatientRoom(value),
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
                            validate: (value) => validatePatientName(value),
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

                      <div className="flex flex-row justify-end justify-center mx-2 mb-4 w-full appearance-none text-nunito-900 bg-white rounded-md block p-3 h-10">
                        {errors?.assignedPatient?.[index]?.patientRoom?.type ===
                          "validate" && (
                          <p className=" text-sm text-peach w-24 appearance-none focus:outline-none">
                            {
                              errors?.assignedPatient?.[index]?.patientRoom
                                ?.message
                            }
                          </p>
                        )}
                        {errors?.assignedPatient?.[index]?.patientName?.type ===
                          "validate" && (
                          <p className=" text-sm text-peach w-24 appearance-none focus:outline-none">
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
                    onClick={() => append({ patientName: "", patientRoom: "" })}
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
        );
      } else {
        console.log("ShiftId is undefined.");
      }
    } else {
      console.log("ShiftId is undefined.");
    }
  }
};


export function EditNursePage() {
  const { ShiftId, nurseId } = useParams();
  const existingDataJSON = localStorage.getItem("startShiftDataArray");
  const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
  const matchingData = existingData.find(
    (data: any) => data.ShiftId === ShiftId
  );
  console.log("matching data from edit nurse page", matchingData);
  const matchingStaff = matchingData.staff;
  console.log("matching staff from edit nurse page", matchingStaff);
  const matchingNurse = matchingStaff.find(
    (nurse: any) => nurse.nurseId === nurseId
  );
  console.log("matching nurse", matchingNurse);
  const matchingNurseData = matchingNurse.nurseData;
  console.log("matching nurse data", matchingNurseData);
  const matchingName = matchingNurseData.nurseName;
  console.log("matching name", matchingName);

  const patientArray = matchingNurseData.assignedPatient;
  console.log("patient array", patientArray);

  if (ShiftId && nurseId) {
    const form = useForm<IFormInput>({
      defaultValues: {
        nurseName: matchingName,
        nurseBreak: matchingNurseData.nurseBreak,
        reliefName: matchingNurseData.reliefName,
        extraDuties: matchingNurseData.extraDuties,
        fireCode: matchingNurseData.fireCode,
        assignedPatient: patientArray,
      },
    });

    console.log("You are editing the nurse with nurseId:", nurseId);

    const onSubmitEdit: SubmitHandler<IFormInput> = () => {
      console.log("I am edited");
      // 1- find nurse with nurse id in storage
      // 2- update the nurse info with the new inputs.
      // 3- it is expected that the form validation be implemented from the form component itself.
    };

    return (
      <div className="bg-greygreen font-nunito min-h-screen lg:px-40 md:px-10 sm:px-10 flex flex-col items-center">
        <h1 className="text-center text-2xl sm:text-3xl p-8 pt-16">
          Editing nurse below
        </h1>{" "}
        <NurseInfoForm onSubmit={onSubmitEdit} Shifturl={ShiftId} form={form} />
        <a
          href={`/manageStaff/${ShiftId}`}
          className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 mb-6 rounded focus:outline-none focus:shadow-outline"
        >
          Cancel
        </a>
      </div>
    );
  } else {
    console.log("shift Id and/or nurse Id not found");
  }
}

export default EditNursePage;
