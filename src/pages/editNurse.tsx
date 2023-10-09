import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NurseInfoForm from "../components/nurseForm";

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


export function EditNursePage() {
  const { ShiftId, nurseId } = useParams();
  const navigate = useNavigate();

        const onSubmitEdit: SubmitHandler<IFormInput> = (data) => {
          console.log("data of the edited nurse", data);
          const targetNurse = staffData.find(
            (nurse: any) => nurse.nurseId === nurseId
          );
          console.log("target nurse", targetNurse);
          targetNurse.nurseData = data;
          localStorage.setItem(
            "startShiftDataArray",
            JSON.stringify(existingData)
          );
          navigate(`/manageStaff/${ShiftId}`);
        };

  // Retrieve shift data array from localStorage
  const existingDataJSON = localStorage.getItem("startShiftDataArray");
  const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

  console.log("existing Data", existingData);
  console.log("existing Data", existingData);

  // Find the shift data object with the matching shiftId
  const matchingData = existingData.find(
    (data: any) => data.ShiftId === ShiftId
  );

  console.log("matching Data:", matchingData);
  console.log("matching staff:", matchingData.staff);

  const staffData = matchingData.staff;
  const validationArray = staffData.filter(
    (nurse: any) => nurse.nurseId !== nurseId
  );
  console.log("validationArray", validationArray);

  console.log("matching Staff:", staffData);
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


    return (
      <div className="bg-greygreen font-nunito min-h-screen lg:px-40 md:px-10 sm:px-10 flex flex-col items-center">
        <h1 className="text-center text-2xl sm:text-3xl p-8 pt-16">
          Editing nurse below
        </h1>{" "}
        <div>
          {" "}
          <NurseInfoForm
            onSubmit={onSubmitEdit}
            Shifturl={ShiftId}
            form={form}
            validationArray={validationArray}
          />
        </div>{" "}
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
