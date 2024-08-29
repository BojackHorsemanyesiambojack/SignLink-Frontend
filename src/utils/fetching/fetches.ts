import toast from "react-hot-toast";
import { signInInput } from "../../models/AccountInput";

const checkSesion = async (url: string, body: any): Promise<Response> => {
  try {
    const response: Response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const error = {
        status: response.status,
        message: errorBody.message || "Unknown error",
      };
      toast.error("Error initing sesion: " + error.message);
    }

    return response;
  } catch (error) {
    toast.error(`Error while tried to connect to the server: ${error}`);
    throw error;
  }
};

const getSessionAccountData = async (session: signInInput) => {
  const url = `${import.meta.env.VITE_API}Auth/Get-User`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session),
      method: "POST",
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const error = {
        status: response.status,
        message: errorBody.message || "Unknown error",
      };
      toast.error("Error initing sesion: " + error.message);
    } else {
      console.log(response)
      return response.json();
    }
  } catch (err) {
    toast.error(`${err}`);
  }
};

export default { checkSesion, getSessionAccountData };
