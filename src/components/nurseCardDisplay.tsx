
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



export function NurseCardDisplay({staffData}:{staffData:IFormInput[]}) {

  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      {staffData.map((nurseData: IFormInput, nurseIndex: number) => (
        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 my-4">
          <div key={nurseIndex} className="flex flex-col m-4">
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

            <table>
              <thead>
                <tr className="border border-stone-700 bg-stone-400 text-white">
                  <th className="border border-stone-700 px-2 py-1">Room</th>
                  <th className="border border-stone-700 px-2 py-1">Patient</th>
                </tr>
              </thead>
              <tbody>
                {nurseData.assignedPatient.map(
                  (patient: IPatientData, patientIndex: number) => (
                    <tr key={patientIndex}>
                      <td className="border px-2 py-1">
                        {patient.patientRoom}
                      </td>
                      <td className="border px-2 py-1">
                        {patient.patientName}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NurseCardDisplay;
