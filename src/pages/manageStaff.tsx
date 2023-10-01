import NurseInfoForm from "../components/nurseForm";
import { useParams } from "react-router-dom";
import NurseCardDisplay from "../components/nurseCardDisplay";
import { v4 as uuidv4 } from "uuid";
import {
  useForm,
  SubmitHandler,
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



export function NurseForm() {
  const { ShiftId } = useParams();
  const nurseId = uuidv4();


const form = useForm<IFormInput>();


const onSubmitForm: SubmitHandler<IFormInput> = (nurseData, event) => {
  event?.preventDefault();
  makeAndAddNurseDataToLS(nurseData);
  form.reset();
  console.log(nurseData);
};

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
    existingData[matchingDataIndex].staff.push({nurseId, nurseData});

    // Update the localStorage with the modified data
    localStorage.setItem("startShiftDataArray", JSON.stringify(existingData));
  } else {
    console.log("Matching shift data not found for the provided ShiftId.");
  }
}

  if (ShiftId) {
    // Check if ShiftId is defined
    const shiftData = retriveShiftDataLSwithShiftId(ShiftId);
  
console.log("shiftData", shiftData);

    console.log(shiftData);
    if (ShiftId) {

  const existingDataJSON = localStorage.getItem("startShiftDataArray");
  const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
  const matchingData = existingData.find(
    (data: any) => data.ShiftId === ShiftId)

    const staffData =  matchingData.staff ?? [];

   console.log("staffData", staffData);
  
     return (
       <div className="font-nunito bg-greygreen sm:max-w-full">
         <div className="flex flex-col items-center justify-center">
           <div className="text-nunito-900 font-extrabold text-sm sm:text-lg lg:text-3xl tracking-tight text-center py-1 bg-white shadow-lg rounded-lg sm:px-8 sm:pt-6 sm:pb-8 sm:py-4 m-8 text-green">
             <p>{shiftData.unitName}</p>
             <div className="flex sm:flex-row items-center flex-col">
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
         <div>
           {" "}
           <NurseInfoForm
             onSubmit={onSubmitForm}
             Shifturl={ShiftId}
             form={form}
           />
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
