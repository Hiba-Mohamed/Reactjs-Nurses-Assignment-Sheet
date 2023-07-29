import DatePickerComponent from "./datePickerComponent";

export function CreateSheet() {
  return (
    <div className="font-nunito relative flex flex-1 flex-col overflow-hidden justify-center items-center mb-12">
      <div className="w-full max-w-xs">
        <div>
          <DatePickerComponent />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Specify a Shift Type:</h3>
          <div className="flex items-center justify-between">
            <span className="ml-3 text-sm font-medium text-gray-900">
              Day Shift
            </span>
            <label className="relative inline-flex items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-800"></div>
              <span className="ml-3 text-sm font-medium text-gray-900">
                purple-800
              </span>
            </label>
          </div>
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nurse's name
            </label>
            <input
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nurse's break
            </label>
            <input
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nurse's relief
            </label>
            <input
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Extra Duties
            </label>
            <input
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Fire Code
            </label>
            <input
              type="text"
              className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
            ></input>
          </div>

          <div id="all-patients">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Assigned Patients Details:
            </label>
            <div className="flex flex-row items-center my-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200">
              <input
                className="w-24 appearance-none focus:outline-none w-full"
                type="text"
                id="room"
                placeholder="Room"
              ></input>
              <input
                className="w-24 appearance-none focus:outline-none p-0"
                type="text"
                id="patient"
                placeholder="Patient"
              ></input>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-lgreen hover:bg-lgreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add patient
            </button>
            <button
              className="bg-green hover:bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add nurse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSheet;
