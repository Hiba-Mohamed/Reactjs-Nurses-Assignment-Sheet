import { useNavigate } from "react-router-dom";

export const ShiftListComponent = () => {
       const navigate = useNavigate();

  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  // Retrieve shift data array from localStorage
  const existingDataJSON = localStorage.getItem("startShiftDataArray");
  const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
  // console.log(existingData[0].data.unitName);
  // console.log("existing data from shift List :", existingData);
  // console.log(existingData[2].ShiftId);

  function viewShift(shiftId: string) {
    console.log("View shift", shiftId);
    navigate(`/viewShift/${shiftId}`);
  }

  function editShift(shiftId: string) {
    console.log("edit Shift", shiftId);
        navigate(`/manageStaff/${shiftId}`);

  }

  function deleteShift(shiftId: string) {
    console.log("delete Shift", shiftId);
  }

  if (existingData.length !== 0) {
    return (
      <div className="flex flex-col md:flex-col items-center">
        <div className="flex flex-col lg:flex-col md:flex-col items-center">
          {existingData.map((existingData: any) => (
            <div
              className="my-4 p-4 flex lg:flex-row md:flex-col sm:flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 md:duration-500"
              key={existingData.ShiftId}
            >
              <div className="flex flex-row">
                <div className="p-2">{existingData.data.unitName}</div>
                <div className="p-2">
                  {formatDate(existingData.data.shiftDate)}
                </div>
                <div className="p-2">{existingData.data.shiftType}</div>
              </div>

              <div className="flex flex-row lg:flex-row items-center justify-evenly">
                {" "}
                <button
                  className="mx-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => viewShift(existingData.ShiftId)}
                >
                  View
                </button>
                <button
                  className="mx-2 bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => editShift(existingData.ShiftId)}
                >
                  Edit
                </button>
                <button
                  className="mx-2 bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => deleteShift(existingData.ShiftId)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    console.log("no shifts entered yet");
  }
};

export default ShiftListComponent;
