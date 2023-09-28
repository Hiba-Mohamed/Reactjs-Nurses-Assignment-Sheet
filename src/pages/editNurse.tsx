import NurseInfoForm from "../components/nurseForm";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

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


export function EditNursePage(){


const {ShiftId, nurseId} = useParams();


const setFormDefaultValuesToTargetNurseUsingNurseId = (nurseId: string) => {
  const existingDataJSON = localStorage.getItem("startShiftDataArray");
  const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];
         const matchingData = existingData.find(
           (data: any) => data.ShiftId === ShiftId
         );
const matchingNurse = matchingData.find((data:any) => data.staff.nurseId === nurseId);
console.log("matching Nurse:", matchingNurse);
};


if (ShiftId && nurseId){
const form = useForm<IFormInput>({
  defaultValues: {
    nurseName: "Nurse",
    nurseBreak: "First",
    reliefName: "relief",
    extraDuties: "relief",
    fireCode: "A",
  assignedPatient:[{patientName:"ASD", patientRoom: "123"
  }]}
});

console.log("You are editing the nurse with nurseId:",nurseId);





 


const onSubmitEdit: SubmitHandler<IFormInput> = () => {
      console.log("I am edited");

      // set the form default values to the values of the fields from the nurse in local storage that matches 

      // 1- find nurse with nurse id in storage
      // 2- update the nurse info with the new inputs.
      // 3- it is expected that the form validation be implemented from the form component itself.
};





    return (

    
      <div className="bg-greygreen font-nunito min-h-screen">
        <h1 className="text-center text-5xl font-bold p-8 pt-16">You are editing a nurse</h1>{" "}
        <NurseInfoForm onSubmit={onSubmitEdit} Shifturl= {ShiftId} form={form}/>
      </div>
    );}
    else{
      console.log("shift Id and/or nurse Id not found")
    }

}

export default EditNursePage;