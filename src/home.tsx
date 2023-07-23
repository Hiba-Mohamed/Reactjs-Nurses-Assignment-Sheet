export function Home() {
  return (
    <div
      className="bg-cover bg-repeat bg-opacity-10"
      style={{ backgroundImage: `url('images/banner-pic.png')` }}
    >
      <div className="font-nunito flex flex-row relative max-w-5xl mx-auto mb-16">
        <div className="flex flex-col items-center w-screen mb-8">
          <img
            src="./images/NAS-logo.png"
            className="w-20"
            alt="Nurses Assignment Sheet logo"
          />
          <img
            src="./images/nurse-pic.png"
            className="w-80"
            alt="A picture of two pictures, on the left two nurses in nursing station, and on the right a picture of a nurse caring for a patient"
          />

          <p className="text-nunito-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            Generate electronic Nurses Assignment Sheets now using NAS
          </p>

          <div className="flex items-center">
            <a
              className="bg-green hover:bg-lgreen text-white font-bold py-4 px-8 rounded m-10 lg:text-xl sm:text-l"
              href="/account"
            >
              Create Account
            </a>
            <a
              href="/login"
              className="bg-green hover:bg-lgreen text-white font-bold py-4 px-8 rounded m-10 lg:text-xl sm:text-l"
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
