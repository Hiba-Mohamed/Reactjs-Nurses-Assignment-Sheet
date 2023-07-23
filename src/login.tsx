export function Login() {
  return (
    <div
      className="font-nunito relative flex flex-1 flex-col overflow-hidden justify-center items-center mb-12"
      style={{ backgroundImage: `url('images/banner-pic.png')` }}
    >
      <div className="">
        <form action="" className="w-screen max-w-sm">
          <div className="">
            <div className="flex flex-col items-center">
              <img src="./images/NAS-logo.png" className="w-24" alt="" />
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
                Log In
              </h2>
            </div>

            <div className="mb-4">
              <label className="block font-semibold leading-6 text-gray-900 lg:text-xl sm:text-l">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
              ></input>
            </div>
            <div className="">
              <label className="block font-semibold leading-6 text-gray-900 lg:text-xl sm:text-l">
                Password
              </label>
              <input
                type="password"
                id="pass"
                className="mt-2 appearance-none text-nunito-900 bg-white rounded-md block w-full p-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-nunito-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-nunito-200"
              ></input>
            </div>
            <div className="">
              <button className="inline-flex justify-center rounded-lg font-semibold py-2.5 px-4 bg-nunito-900 text-white hover:bg-nunito-700 w-full bg-green mt-6 lg:text-xl sm:text-l">
                Login
              </button>
              <button className="inline-flex justify-center rounded-lg font-semibold py-2.5 px-4 bg-nunito-900 text-white hover:bg-nunito-700 w-full bg-green mt-6 mb-2 lg:text-xl sm:text-l">
                <a href="/createSheet">Login as a guest</a>
              </button>
            </div>
            <div className="flex items-center flex-col">
              <a className="hover:text-green" href="#">
                Forgot password?
              </a>
              <div className="flex flex-col items-center mt-6">
                <p className="lg:text-xl sm:text-l hover:text-green">
                  No account?
                </p>
                <button className="inline-flex justify-center rounded-lg font-semibold py-2.5 px-4 bg-nunito-900 text-white hover:bg-nunito-700 w-full bg-green mb-6 lg:text-xl sm:text-l">
                  <a href="/account">Create an Account</a>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
