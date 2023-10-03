import NurseInfoForm from "../components/nurseForm";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

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
      <div className="bg-greygreen font-nunito min-h-screen lg:px-40 md:px-10 sm:px-10">
        <h1 className="text-center text-2xl sm:text-3xl p-8 pt-16">
          Editing nurse below
        </h1>{" "}
        <NurseInfoForm onSubmit={onSubmitEdit} Shifturl={ShiftId} form={form} />
      </div>
    );
  } else {
    console.log("shift Id and/or nurse Id not found");
  }
}

export default EditNursePage;
