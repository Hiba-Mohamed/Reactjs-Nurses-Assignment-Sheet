export const ShiftListComponent = () =>{
  // Retrieve shift data array from localStorage
  const existingDataJSON = localStorage.getItem("startShiftDataArray");
  const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
  console.log(existingData[0].data.unitName);
  console.log("existing data from shift List :", existingData);
  return (
    <div className="flex flex-col md:flex-col items-center p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 md:duration-500">
      <div>
        <div>{existingData[0].data.unitName}</div>
        {existingData.map(( index:number)=>{
            // <div className="flex flex-col md:flex-col items-center p-4 md:p-6 space-y-4 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 md:duration-500"
            // key={index}>
            //     {existingData[index].data}
            // </div>;
        })}
      </div>
    </div>
  );
}

export default ShiftListComponent