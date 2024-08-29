import { useEffect } from "react"
import Sesions from "../../utils/sesions/Sesions"
import { useNavigate } from "react-router-dom";

export default function _Void_DeleteSession() {
    const navigate = useNavigate();
    useEffect(() => {
        Sesions.deleteSession();
        navigate('/get-started');
    },[])
  return (
    <>
    </>
  )
}
