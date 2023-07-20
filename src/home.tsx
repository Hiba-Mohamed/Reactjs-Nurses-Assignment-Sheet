
import {useNavigate} from 'react-router-dom';

export function Home() {

  const navigate = useNavigate();

  const navigateToAccount = () => {
    // 👇️ navigate to /contacts
    navigate('/account');
  };

  const navigateLogin = () => {
    // 👇️ navigate to /
    navigate('/login');
  };

  return (
    <div className="bg-cover bg-repeat bg-opacity-10" style={{ backgroundImage: `url('images/banner-pic.png')` }}>

      <div className="font-nunito font-bold flex flex-row relative max-w-5xl mx-auto pt-20 sm:pt-12 lg:pt-18">

        <div className="flex flex-col items-center w-screen mb-8">

          <h1 className="text-nunito-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white p-6">Welcome to the NAS (Nurses Assignment Sheet)<br></br>Generate electronic Nurses Assignment Sheets now</h1>

          <div className="flex items-center">
            <button onClick={navigateToAccount} className="bg-lgreen hover:bg-green text-white font-bold py-4 px-8 rounded m-10 text-xl">Create Account</button>
            <button onClick={navigateLogin} className="bg-green hover:bg-lgreen text-white font-bold py-4 px-8 rounded m-10 text-xl">Login</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home;