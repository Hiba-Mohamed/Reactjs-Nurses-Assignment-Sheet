export function Home() {
  return (
    <div
      className="bg-cover bg-repeat bg-opacity-10 h-screen mx-auto dark:bg-black"
      // style={{ backgroundImage: `url('images/banner-pic.png')` }}
    >
      <div className="font-nunito flex flex-row relative max-w-3xl sm:max-w-5xl mx-auto mb-16 pt-20">
        <div className="flex flex-col items-center w-screen mb-8">
          <img
            src="/images/NAS-logo.png"
            className="w-10 sm:w-20"
            alt="Nurses Assignment Sheet logo"
          />
          <img
            src="/images/nurse-pic.png"
            className="w-40 sm:w-80"
            alt="A picture of two pictures, on the left two nurses in nursing station, and on the right a picture of a nurse caring for a patient"
          />

          <p className="text-nunito-900 font-extrabold text-lg sm:text-4xl lg:text-4xl tracking-tight text-center p-4 max-w-sm sm:max-w-2xl">
            Generate electronic Nurses Assignment Sheets now using NAS
          </p>

          <div className="flex items-center flex-col sm:flex-row gap-4 sm:pt-4 pt-10">
            <a
              className="bg-slate-200 hover:bg-slate-100 text-cyan-700 font-bold sm:py-4 sm:px-8 py-2 px-4 rounded lg:text-xl text-sm"
              href="/account"
            >
              Create Account
            </a>
            <a
              href="/login"
              className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold sm:py-4 sm:px-14 py-2 px-12 rounded lg:text-xl text-sm"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
