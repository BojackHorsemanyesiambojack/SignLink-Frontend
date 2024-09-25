import { useEffect } from "react"
import Sesions from "../../utils/sesions/Sesions"
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function _Void_DeleteSession() {
    const navigate = useNavigate();
    useEffect(() => {
        const deleteSession = async() => {
          try{
            Sesions.deleteSession();
            const sessionExists = await Sesions.sesionIsCreated();
            if(!sessionExists){
              navigate('/get-started')
            }
          }catch(error){
            toast.error(`${error}`);
          }
        }
        deleteSession();
    },[navigate])
  return (
    <>
    <Toaster />
    </>
  )
}
