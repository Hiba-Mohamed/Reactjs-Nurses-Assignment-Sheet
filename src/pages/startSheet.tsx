import ShiftForm from "../components/shiftForm";


export function StartSheet(){
    return (
      <div className="flex flex-col items-center sm:pt-32 pt-14 gap-8 font-nunito min-h-screen bg-slate-50">
        <p className="w-screen flex flex-col items-center justify-center text-nunito-900 font-extrabold text-lg sm:text-3xl tracking-tight text-center">Start a New Shift</p>
        <ShiftForm />
      </div>
    );
}

console.log(ShiftForm);