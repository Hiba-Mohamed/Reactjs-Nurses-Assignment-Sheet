import NurseInfoForm from "../components/nurseForm";

export function EditNursePage(){
    const onSubmitEdit = () =>{
      console.log("I am edited")
      // 1- find nurse with nurse id in storage
      // 2- update the nurse info with the new inputs. 
      // 3- it is expected that the form validation be implemented from the form component itself.
      }

    return (

    
      <div className="bg-greygreen font-nunito">
        <h1 className="text-center text-5xl font-bold p-8">You are editing a nurse</h1>{" "}
        <NurseInfoForm onSubmit={onSubmitEdit} Shifturl=""/>
      </div>
    );

}

export default EditNursePage;