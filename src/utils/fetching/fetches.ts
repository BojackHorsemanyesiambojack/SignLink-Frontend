import toast from "react-hot-toast";
import routes from "../api/routes";

const checkSesion = async (url: string, body: any): Promise<Response> => {
  try {
    const response: Response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`Authentication Error: ${error.message}`);
    } else {
      toast.error(`Unexpected error: ${String(error)}`);
    }
    throw error;
  }
};

const getSessionAccountData = async (username : string) => {
  const baseUrl = routes.getUsersRoute;
  alert(baseUrl+username)
  const url = `${baseUrl}${username}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorBody = await response.json();
      const error = {
        status: response.status,
        message: errorBody.message || "Unknown error",
      };
      toast.error("Error initing sesion: " + error.message);
    } else {
      return response.json();
    }
  } catch (err) {
    toast.error(`${err}`);
  }
};

export default { checkSesion, getSessionAccountData };
