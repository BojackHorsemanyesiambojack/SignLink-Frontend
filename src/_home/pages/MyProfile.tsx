import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Sesions from "../../utils/sesions/Sesions";

export default function MyProfile() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string>();

    const getUserName = async() => {
      const sessions = await Sesions.checkSession();
      if(sessions){
        setUserName(sessions.userName);
      }
    }

  useEffect(() => {
    getUserName();
  }, []);

  useEffect(() => {
    navigate(`/profiles/${userName}`)
  },[userName])

  return (
    <>
    </>
  );
}
