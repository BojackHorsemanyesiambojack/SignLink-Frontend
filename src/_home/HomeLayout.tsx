import { Outlet, useNavigate } from "react-router-dom";
import LeftNavBar from "../shared/nav/LeftNavBar";
import { useEffect, useState } from "react";
import Sesions from "../utils/sesions/Sesions";
import toast, { Toaster } from "react-hot-toast";
import { Session } from "../models/Session";

export default function HomeLayout() {
  const [session, setSession] = useState<Session>({
    email:'',
    password:'',
    device:'',
    created:new Date(),
    userName:''
  })

  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

const getUserDataAndRedirectIfAccountNotExists = async() => {
  try{
    const check = await Sesions.checkSession();
    if(check){
      const checkOnDb = await Sesions.checkAccountExists(check);
    
    if(!checkOnDb){
      navigate('/get-started');
      return;
    }
    if(check){
      setSession(check);
    }
  }
  }catch(error){
    toast.error(`${error}`)
  }finally{
    setLoading(false);
  }
}

useEffect(() => {
  getUserDataAndRedirectIfAccountNotExists();
},[])

  return (
    <div className="text-white flex">
      <Toaster />
        {loading? null : <LeftNavBar Session = {session} SessionData = {session} />}
        <main className="overflow-auto w-full h-screen">
            <Outlet />
        </main>
    </div>
  )
}
