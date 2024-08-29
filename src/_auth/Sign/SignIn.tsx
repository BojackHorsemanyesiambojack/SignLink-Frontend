import Form from "../../shared/constants/Form";
import ThemedButton from "../../shared/constants/ThemedButton";
import { signInFormData } from "./FormData";
import SignlinkLogo from '../../assets/Icons/logo.png';
import { useState } from "react";
import { signInInput } from "../../models/AccountInput";
import { Toaster } from "react-hot-toast";
import fetches from "../../utils/fetching/fetches";
import { useNavigate } from "react-router-dom";
import Sesions from "../../utils/sesions/Sesions";

export default function SignIn() {
  const [accountData, setAccountData] = useState<signInInput>({
    Email : '',
    Password : ''
  });

  const navigate = useNavigate();

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setAccountData({
      ...accountData,
      [name]: value
    });
  };

  const redirect = () => {
    navigate('/home');
  }

  const handleSubmit = async() => {
    event?.preventDefault();
    const apiRoute = import.meta.env.VITE_API + 'Auth/SignIn';
    const result : Response = await fetches.checkSesion(apiRoute, accountData);
    if(result.ok){
      const newSession : signInInput = {
        Email : accountData.Email,
        Password : accountData.Password
      };
      Sesions.saveSession(newSession);
      redirect();
    }
  }

  return (
    <div className="flex justify-evenly">
      <Toaster />
      <div className="flex flex-col items-center w-full pt-16 text-white min-h-screen">
        <h2 className="text-3xl font-semibold mb-6 text-gray-100 flex items-center">
          Iniciar Sesión en SignLink <img src = {SignlinkLogo} alt="signLink logo" className="w-20"/>
        </h2>
        <div className="w-full max-w-md bg-neutral-950 p-6 rounded-lg shadow-md">
          <Form Action="POST" Map={signInFormData} HandleChange={handleChange} OnSubmit = {handleSubmit} Values={accountData}/>
        </div>
        <div className="mt-6 text-gray-400">
          <p>Aún no tienes una cuenta?</p>
        </div>
        <ThemedButton className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
        onClick={() => navigate('/sign-up')}>
          Crear una cuenta
        </ThemedButton>
      </div>
    </div>
  );
}
