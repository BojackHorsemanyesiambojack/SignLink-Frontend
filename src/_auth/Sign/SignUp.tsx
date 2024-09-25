import Form from "../../shared/constants/Form";
import ThemedButton from "../../shared/constants/ThemedButton";
import SignlinkLogo from "../../assets/Icons/logo.png";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signUpFormData } from "./FormData";
import fetches from "../../utils/fetching/fetches";
import Sesions from "../../utils/sesions/Sesions";
import { signInInput } from "../../models/AccountInput";
import routes from "../../utils/api/routes";
import { Session } from "../../models/Session";

export default function SignUp() {
  const [accountData, setAccountData] = useState({
    UserEmail: "",
    UserPassword: "",
    UserName: "",
  });
  const [isCreating, setIsCreating] = useState<boolean>(false);

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
    setIsCreating(true);
    try {
      const url = routes.signUpRoute;
      const response: Response = await fetches.checkSesion(url, accountData);
      if (!response.ok) {
        const errorText = await response.text();
        toast.error(`Error: ${response.statusText || errorText}`);
      } else {
        const newSession: Session = {
          email: accountData.UserEmail,
          password: accountData.UserPassword,
          userName:accountData.UserName,
          device:'',
          created:new Date()
        };
        await Sesions.saveSession(newSession);
        toast.success("Account created correctly");
        if (await Sesions.sesionIsCreated()) {
          navigate("/home");
        }
      }
    } catch (error) {
      toast.error(`Unknowed Error: ${error}`);
    }finally{
      setIsCreating(false);
    }
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
          <Form
            Action="POST"
            Map={signUpFormData}
            HandleChange={handleChange}
            OnSubmit={handleSubmit}
            Values={accountData}
            isLoading = {isCreating}
          />
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
