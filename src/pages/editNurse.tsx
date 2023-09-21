import NurseInfoForm from "../components/nurseForm";

export function EditNursePage(){
    return (
      <div className="bg-slate-100 font-nunito">
        <h1 className="text-center text-5xl font-bold my-8">Shift Record</h1>{" "}
        <NurseInfoForm />
      </div>
    );

}

export default EditNursePage;