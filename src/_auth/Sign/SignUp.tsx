import Form from "../../shared/constants/Form";
import ThemedButton from "../../shared/constants/ThemedButton";
import SignlinkLogo from "../../assets/Icons/logo.png";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signUpFormData, signUpFormDataCredentials, signUpFormProfile } from "./FormData";

export default function SignUp() {
  const [accountData, setAccountData] = useState({
    userName : '',
    userBiography : '',
    imageUrl : '',
    firstName: '',
    lastName : '',
    birthDate: '',
    Email : '',
    Password: ''
  });

  const [actualForm, setActualForm] = useState<number>(0);
  const navigate = useNavigate();

  const nextForm = () =>{
    event?.preventDefault();
    setActualForm(actualForm + 1)
    console.log(accountData)
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAccountData({
      ...accountData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-evenly">
      <Toaster />
      <div className="flex flex-col items-center w-full pt-16 text-white min-h-screen">
        <h2 className="text-3xl font-semibold mb-6 text-gray-100 flex items-center">
          Crear Una cuenta en SignLink{" "}
          <img src={SignlinkLogo} alt="signLink logo" className="w-20" />
        </h2>
        <div className="w-full max-w-md bg-neutral-950 p-6 rounded-lg shadow-md">
          {actualForm == 0?
          <Form
          Action=""
          Map={signUpFormData}
          HandleChange={handleChange}
          OnSubmit={nextForm}
          Values = {accountData}
        />: actualForm == 1?
        <Form
            Action="POST"
            Map={signUpFormDataCredentials}
            HandleChange={handleChange}
            OnSubmit={nextForm}
            Values={accountData}
          />
          :
          <Form
            Action="POST"
            Map={signUpFormProfile}
            HandleChange={handleChange}
            OnSubmit={nextForm}
            Values={accountData}
          />
        }
        </div>
        <div className="mt-6 text-gray-400">
          <p>Ya tienes una cuenta?</p>
        </div>
        <ThemedButton
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={() => navigate("/sign-in")}
        >
          Iniciar Sesion
        </ThemedButton>
      </div>
    </div>
  );
}
