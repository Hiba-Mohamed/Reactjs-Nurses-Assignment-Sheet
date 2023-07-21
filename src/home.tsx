
import {useNavigate} from 'react-router-dom';

export function Home() {

  const navigate = useNavigate();

  const navigateToAccount = () => {
    navigate('/account');
  };

  const navigateLogin = () => {
    navigate('/login');
  };

  return (
    <div className="bg-cover bg-repeat bg-opacity-10" style={{ backgroundImage: `url('images/banner-pic.png')` }}>

      <div className="font-nunito flex flex-row relative max-w-5xl mx-auto">

        <div className="flex flex-col items-center w-screen mb-8">
          <img src="./images/NAS-logo.png" className='w-20' alt="" />
          <img src="./images/nurse-pic.png" className='w-80' alt="" />

          <p className="text-nunito-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">Generate electronic Nurses Assignment Sheets now using NAS</p>

          <div className="flex items-center">
            <button onClick={navigateToAccount} className="bg-lgreen hover:bg-green text-white font-bold py-4 px-8 rounded m-10 lg:text-xl sm:text-l">Create Account</button>
            <button onClick={navigateLogin} className="bg-green hover:bg-lgreen text-white font-bold py-4 px-8 rounded m-10 lg:text-xl sm:text-l">Login</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home;