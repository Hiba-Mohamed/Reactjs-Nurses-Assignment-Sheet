export function Home() {
  return (
    <div
      className="bg-cover bg-repeat bg-opacity-10 h-screen mx-auto"
      style={{ backgroundImage: `url('images/banner-pic.png')` }}
    >
      <div className="font-nunito flex flex-row relative max-w-2xl sm:max-w-5xl mx-auto mb-16 pt-4 pt-24">
        <div className="flex flex-col items-center w-screen mb-8">
          <img
            src="./images/NAS-logo.png"
            className="w-10 sm:w-20"
            alt="Nurses Assignment Sheet logo"
          />
          <img
            src="./images/nurse-pic.png"
            className="w-40 sm:w-80"
            alt="A picture of two pictures, on the left two nurses in nursing station, and on the right a picture of a nurse caring for a patient"
          />

          <p className="text-nunito-900 font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tight text-center p-4">
            Generate electronic Nurses Assignment Sheets now using NAS
          </p>

          <div className="flex items-center flex-col sm:flex-row gap-4">
            <a
              className="bg-slate-200 hover:bg-slate-100 text-cyan-700 font-bold sm:py-4 sm:px-8 py-2 px-4 rounded lg:text-xl text-sm"
              href="/account"
            >
              Create Account
            </a>
            <a
              href="/login"
              className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 sm:py-4 sm:px-8 rounded lg:text-xl text-sm sm:text-lg"
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
