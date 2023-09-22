import NurseInfoForm from "../components/nurseForm";

export function EditNursePage(){
    const onSubmitEdit = () =>{
      console.log("I am edited")
      }

    return (

    
      <div className="bg-greygreen font-nunito">
        <h1 className="text-center text-5xl font-bold p-8">You are editing a nurse</h1>{" "}
        <NurseInfoForm onSubmitForm={onSubmitEdit} Shifturl=""/>
      </div>
    );

}

export default EditNursePage;