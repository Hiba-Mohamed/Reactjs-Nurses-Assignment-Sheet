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
const form = useForm<IFormInput>();


  console.log(nurseId)
    const onSubmitEdit: SubmitHandler<IFormInput> = () => {
      console.log("I am edited");
      // 1- find nurse with nurse id in storage
      // 2- update the nurse info with the new inputs.
      // 3- it is expected that the form validation be implemented from the form component itself.
    };
if (ShiftId && nurseId){
    return (

    
      <div className="bg-greygreen font-nunito">
        <h1 className="text-center text-5xl font-bold p-8">You are editing a nurse</h1>{" "}
        <NurseInfoForm onSubmit={onSubmitEdit} Shifturl= {ShiftId} form={form}/>
      </div>
    );}
    else{
      console.log("shift Id and/or nurse Id not found")
    }

}

export default EditNursePage;