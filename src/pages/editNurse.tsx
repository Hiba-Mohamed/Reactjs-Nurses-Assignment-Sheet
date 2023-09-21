import NurseInfoForm from "../components/nurseForm";

export function EditNursePage(){
    return (
      <div className="bg-greygreen font-nunito">
        <h1 className="text-center text-5xl font-bold p-8">You are editing a nurse</h1>{" "}
        <NurseInfoForm />
      </div>
    );

}

export default EditNursePage;