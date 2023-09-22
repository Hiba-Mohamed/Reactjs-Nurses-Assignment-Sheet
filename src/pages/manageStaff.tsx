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


// const useList = (id:string) =>{
//   const [list, useList] = useState();
//   const editNurse= (ShiftId:string, index:number) =>{
//     const staffData = retrieveStaffData(ShiftId);

//   }
 
//   const deleteShift = () => {};
//   const editShift = () => {};
//   const viewShift = () => {};


// deleteNurse("5d5f9143-a5f6-4ab2-97da-5b48cf35e391", 0);

//   return {list, editNurse, deleteNurse, editShift, deleteShift, viewShift}
// }

// const { list, editNurse, deleteNurse, editShift, deleteShift, viewShift} = useList;

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
  reset,
} = useForm<IFormInput>();


const onSubmitForm: SubmitHandler<IFormInput> = (nurseData, event) => {
  event?.preventDefault();
  makeAndAddNurseDataToLS(nurseData);
  reset();
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
    existingData[matchingDataIndex].staff.push(nurseData);

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
      const staffData = retrieveStaffData(ShiftId);
      console.log("staffData", staffData);
      const nurseId= uuidv4();

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
            <NurseCardDisplay nurseId={nurseId} staffData={staffData} />{" "}
          </div>
          <div>
            {" "}
            <NurseInfoForm onSubmitForm={onSubmitForm} Shifturl={ShiftId} />
          </div>

          <div className="flex flex-col items-center p-8">
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save Sheet
            </button>
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
