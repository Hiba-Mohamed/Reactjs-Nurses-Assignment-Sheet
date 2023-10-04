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
  if(matchingShift){
  return (
    <div>
      <h1>{shiftDate}</h1>
      <h1>{shiftType}</h1>
    </div>
  );
  }

  else{
    return (
    <div className="flex flex-col bg-slate-100 items-center min-h-screen">
      <h1 className="font-nunito text-center text-2xl sm:text-4xl font-bold py-8 items-center">
        Search Result
      </h1>{" "}
      <div className="items-center flex w-full justify-evenly">
        <img src="./images/searcherror.png" alt="" />
      </div>
    </div>
  );}

};

export default SearchResults;
