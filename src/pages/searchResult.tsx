import { useParams } from "react-router-dom";

export const SearchResults = () => {

const { shiftDate, shiftType } = useParams();
  const existingDataJSON = localStorage.getItem("startShiftDataArray");
  const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
  const matchingShift = existingData.find(
    (shift: any) =>
      shift.data.shiftDate === shiftDate && shift.data.shiftType === shiftType
  );

  console.log("matching shift", matchingShift)
  return (
    <div>
      <h1>{shiftDate}</h1>
      <h1>{shiftType}</h1>
    </div>
  );
};

export default SearchResults;
