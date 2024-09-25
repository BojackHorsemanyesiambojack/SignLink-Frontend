import Form from "../../shared/constants/Form";
import ThemedButton from "../../shared/constants/ThemedButton";
import { signInFormData } from "./FormData";
import SignlinkLogo from "../../assets/Icons/logo.png";
import { useState } from "react";
import { signInInput } from "../../models/AccountInput";
import toast, { Toaster } from "react-hot-toast";
import fetches from "../../utils/fetching/fetches";
import { useNavigate } from "react-router-dom";
import Sesions from "../../utils/sesions/Sesions";
import { Session } from "../../models/Session";
import routes from "../../utils/api/routes";

export default function SignIn() {
  const [accountData, setAccountData] = useState<signInInput>({
    UserEmail: "",
    UserPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAccountData({
      ...accountData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    event?.preventDefault();
    const apiRoute = routes.signInRoute;

    try {
      const result: Response = await fetches.checkSesion(apiRoute, accountData);

      if (!result.ok) {
        const errorText = await result.text();
        toast.error(`Error: ${result.statusText || errorText}`);
      } else {
        const responseBody = await result.json();

        if(responseBody){
          const newSession: Session = {
            email: responseBody.userEmail,
            password: accountData.UserPassword,
            userName: responseBody.userName,
            device:'',
            created:new Date()
          };
          Sesions.saveSession(newSession);
          navigate('/home')
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(
          `Error while trying to connect to the server: ${error.message}`
        );
      }
    }
  };

  return (
    <div className="flex justify-evenly">
      <Toaster />
      <div className="flex flex-col items-center w-full pt-16 text-white min-h-screen">
        <h2 className="text-3xl font-semibold mb-6 text-gray-100 flex items-center">
          Iniciar Sesión en SignLink{" "}
          <img src={SignlinkLogo} alt="signLink logo" className="w-20" />
        </h2>
        <div className="w-full max-w-md bg-neutral-950 p-6 rounded-lg shadow-md">
          <Form
            Action="POST"
            Map={signInFormData}
            HandleChange={handleChange}
            OnSubmit={handleSubmit}
            Values={accountData}
          />
        </div>
        <div className="mt-6 text-gray-400">
          <p>Aún no tienes una cuenta?</p>
        </div>
        <ThemedButton
          className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={() => navigate("/sign-up")}
        >
          Crear una cuenta
        </ThemedButton>
      </div>
    </div>
  );
}
