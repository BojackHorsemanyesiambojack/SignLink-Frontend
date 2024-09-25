import toast from "react-hot-toast";
import routes from "../api/routes"

const getUserByRoute = async(userName:string) => {
    try{
        const url = routes.getUsersRoute;
    const response = await fetch(`${url}${userName}`);
    return response.json()
    }catch(error){
        toast.error(`Error en la red`);
    }
}

export default {getUserByRoute}