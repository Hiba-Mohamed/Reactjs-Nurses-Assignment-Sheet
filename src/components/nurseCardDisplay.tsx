export function NurseCard() {
  return (
    <div className="flex flex-col m-4">
      <p className="flex flex-col justify-center items-center font-bold">nurseName</p>
      <div className="flex flex-row items-center">
        <p className="p-2 items-center">NurseBreak</p>
        <p className="p-2 items-center">ReliefName</p>
      </div>
      <div className="flex flex-row items-center">
        <p className="p-2 items-center">fireCode</p>
        <p className="p-2 items-center">ExtraDuties</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-center">Assigned Patients</p>
        <div className="flex flex-row">
          <p className="m-2">patientRoom</p>
          <p className="m-2">patientName</p>
        </div>
      </div>
    </div>
  );
}
