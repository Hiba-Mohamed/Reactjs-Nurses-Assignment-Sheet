import ShiftForm from "../components/shiftForm";


export function StartSheet(){
    return (
      <div className="flex flex-wrap justify-evenly font-nunito my-14">
        <p className="w-screen flex flex-col items-center justify-center text-nunito-900 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center m-4">
          Start filling the shift info below to start creating a new shift
        </p>
        <ShiftForm />
      </div>
    );
}

console.log(ShiftForm);