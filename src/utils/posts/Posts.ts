import toast from "react-hot-toast";
import routes from "../api/routes"

const loadUserPosts = async(userName:string) => {
    try{
        const baseUrl = routes.listUserPostsRoute;
        const response = await fetch(`${baseUrl}${userName}`);

        return response.json();
    }catch(error){
        if(error instanceof Error){
            toast.error('Unknowed error: ' + error.message);
        }
    }
}

export default {loadUserPosts};