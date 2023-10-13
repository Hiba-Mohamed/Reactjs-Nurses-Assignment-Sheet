export function LandingPage (){
    return (
      <div className="min-h-screen items-center bg-neutral-50 font-nunito pt-12 flex flex-col max-w-xl sm:max-w-full">
        <div className="rounded bg-white flex flex-col items-center mx-4 shadow-lg p-4 text-lg max-w-sm sm:max-w-2xl sm:text-2xl text-center font-bold">
          Welcome to the Electronic NAS (Nurses Assignment Sheet)
        </div>
        <div className="rounded bg-white flex flex-col items-center max-w-sm  sm:max-w-2xl mx-4 shadow-lg p-4 text-start mt-20 mb-20 p-12">
          My name is Hiba, a Get Coding Full-Stack Software Developer student.
          Due to my experience in healthcare and my passion for healthcare
          innovation and efficiency, I chose to recreate an Electronic Nurses
          Assignment Sheet for the React.js module of the Get Coding training
          program. I want to express my gratitude to Get Coding coach Mitchell
          Hynes for the guidance and support throughout this project. The first
          version was a simplified vanilla JavaScript version that I completed
          in the introduction module. I'd also like to extend my thanks to Get
          Coding coach Clark Oake, who guided me through the introductory module
          of the program, and UI/UX Get Coding coach Mat Kennedy for providing
          invaluable UI/UX instructions.
        </div>
        <div className="flex flex-row rounded bg-white flex flex-row items-center gap-4 sm:mt-28 max-w-sm mx-4 shadow-lg p-4 text-start text-lg my-4">
          <img src="/images/NAS-logo.png" alt="NAS logo" className="h-12" />
          <p className="font-bold text-xl">Features:</p>
        </div>
        <div className="flex flex-col gap-24 sm:flex-row sm:flex-wrap justify-evenly">
          <div className="flex flex-col rounded bg-white flex flex-row items-center gap-4 max-w-sm mx-4 shadow-lg p-4 text-start my-32">
            <img src="/images/features1.png" alt="" />
            <p></p>
          </div>
          <div className="flex flex-col rounded bg-white flex flex-row items-center gap-4 max-w-sm mx-4 shadow-lg p-4 text-start my-32">
            <img src="/images/features2.png" alt="" />
            <div className="flex flex-row gap-2">
              <img src="/images/NAS-logo.png" alt="" className="h-4" />
              <p>Create current-day and future shifts</p>
            </div>
          </div>
          <div className="flex flex-col rounded bg-white flex flex-row items-center gap-4 max-w-sm mx-4 shadow-lg p-4 text-start my-32">
            <img src="/images/features3.png" alt="" />
            <div className="flex flex-row gap-2">
              <img src="/images/NAS-logo.png" alt="" className="h-4" />
              <p>Your shifts are organized from newest to oldest</p>
            </div>
            <div className="flex flex-row gap-2">
              <img src="/images/NAS-logo.png" alt="" className="h-4" />
              <p>You can always search a specific shift using the search bar</p>
            </div>
          </div>
          <div className="flex flex-col rounded bg-white flex flex-row items-center gap-4 max-w-sm mx-4 shadow-lg p-4 text-start my-32">
            <img src="/images/features4.png" alt="" />
            <div className="flex flex-row gap-2">
              <img src="/images/NAS-logo.png" alt="" className="h-4" />
              <p>Manange shift staff and edit nurse's assignment information</p>
            </div>
          </div>
          <div className="flex flex-col rounded bg-white flex flex-row items-center gap-4 max-w-sm mx-4 shadow-lg p-4 text-start my-32">
            <img src="/images/features5.png" alt="" />
            <div className="flex flex-row gap-2">
              <img src="/images/NAS-logo.png" alt="" className="h-4" />
              <p>
                Duplication safeguards in place to prevent duplication of
                nurse's name, patient's name, and room number
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded bg-white flex flex-row items-center gap-4 max-w-sm mx-4 shadow-lg p-4 text-start my-32">
            <img src="/images/features6.png" alt="" />
            <div className="flex flex-row gap-2">
              <img src="/images/NAS-logo.png" alt="" className="h-4" />
              <p>
                Duplication safeguards in place to prevent shift Duplication
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded bg-white flex flex-row items-center gap-4 max-w-sm mx-4 shadow-lg p-4 text-center my-32">
          <p>
            please use the menu to navigate through, no need to have an account
            to use it as of now.
          </p>
          <a
            href="/home"
            className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {" "}
            Visit NAS home page
          </a>
        </div>
      </div>
    );
}

export default LandingPage;