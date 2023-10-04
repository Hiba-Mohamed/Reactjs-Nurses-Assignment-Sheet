import { useParams } from "react-router-dom";
import ViewNurseCard from "../components/viewNursesComponent";


function formatDate(dateString: string): string {
  // Parse the input date string as "yyyymmdd"
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);

  // Create a JavaScript Date object with the parsed components
  const date = new Date(`${year}-${month}-${day}`);

  // Format the date as "dd month, yyyy"
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return date.toLocaleDateString(undefined, options);
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

export function ViewShift() {
  const { ShiftId } = useParams();


  if (ShiftId) {
    // Check if ShiftId is defined
    const shiftData = retriveShiftDataLSwithShiftId(ShiftId);

    console.log("shiftData", shiftData);

    console.log(shiftData);
    if (ShiftId) {
      const existingDataJSON = localStorage.getItem("startShiftDataArray");
      const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
      const matchingData = existingData.find(
        (data: any) => data.ShiftId === ShiftId
      );

      const staffData = matchingData.staff ?? [];

      console.log("staffData", staffData);

      return (
        <div className="font-nunito bg-greygreen sm:max-w-full min-h-screen">
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
            <ViewNurseCard staffData={staffData} />{" "}
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

export default ViewShift;
