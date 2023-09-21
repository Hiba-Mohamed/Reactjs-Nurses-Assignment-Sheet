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

export function NurseCardDisplay(
  { staffData, nurseId }: { staffData: IFormInput[], nurseId: string }) {
  const { ShiftId } = useParams();
     const deleteNurse = (ShiftId: any, nurseId: string) => {
       // Retrieve shift data array from localStorage
       const existingDataJSON = localStorage.getItem("startShiftDataArray");
       const existingData = existingDataJSON
         ? JSON.parse(existingDataJSON)
         : [];

       console.log("existing Data", existingData);

       // Find the shift data object with the matching shiftId
       const matchingData = existingData.find(
         (data: any) => data.ShiftId === ShiftId
       );

       console.log("matching Data:", matchingData);

       const exsitingNurseArray = matchingData.staff;
       // get the index of the nurse card
       exsitingNurseArray.splice(nurseId, 1);

       const updatedNurseList = exsitingNurseArray;
       console.log("Updated Nurse List", updatedNurseList);
       //  update the local storage
       localStorage.setItem(
         "startShiftDataArray",
         JSON.stringify(existingData)
       );
       window.location.reload();
     };

    const editNurse = (ShiftId: any, nurseId: string) => {
      const existingDataJSON = localStorage.getItem("startShiftDataArray");
      const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

      console.log("existing Data", existingData);

      // Find the shift data object with the matching shiftId
      const matchingData = existingData.find(
        (data: any) => data.ShiftId === ShiftId
      );

      console.log("matching Data:", matchingData);

      const exsitingNurseArray = matchingData.staff;
    
    };
    console.log(nurseId);
  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      {staffData.map((nurseData: IFormInput, nurseIndex:number) => (
        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 my-4">
          <div key={nurseIndex} id={nurseId} className="flex flex-col m-4">
            <div className="flex flex-col justify-center items-center text-center font-bold lg:text-xl md:text-lg sm:text-md">
              {nurseData.nurseName}
            </div>
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="font-semibold text-cyan-700">Break:</td>
                  <td>{nurseData.nurseBreak}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-cyan-700">Relief:</td>
                  <td>{nurseData.reliefName}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-cyan-700">Extra Duties:</td>
                  <td>{nurseData.extraDuties}</td>
                </tr>
                <tr>
                  <td className="font-semibold text-cyan-700">Fire Code:</td>
                  <td className="text-red-500">{nurseData.fireCode}</td>
                </tr>
              </tbody>
            </table>

            {nurseData.assignedPatient.map(
              (patient: IPatientData, patientIndex: number) => (
                <div>
                  <table className="mb-4">
                    <thead>
                      <tr className="border border-stone-700 bg-stone-400 text-white">
                        <th className="border border-stone-700 px-2 py-1">
                          Room
                        </th>
                        <th className="border border-stone-700 px-2 py-1">
                          Patient
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={patientIndex}>
                        <td className="border px-2 py-1">
                          {patient.patientRoom}
                        </td>
                        <td className="border px-2 py-1">
                          {patient.patientName}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            )}

            <div className="flex flex-row justify-evenly items-center">
              <button
                className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => editNurse(ShiftId, nurseId)}
              >
                Edit
              </button>
              <button
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => deleteNurse(ShiftId, nurseId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NurseCardDisplay;
