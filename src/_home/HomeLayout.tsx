import { Outlet, useNavigate } from "react-router-dom";
import LeftNavBar from "../shared/nav/LeftNavBar";
import { useEffect, useState } from "react";
import Sesions from "../utils/sesions/Sesions";
import { signInInput } from "../models/AccountInput";
import fetches from "../utils/fetching/fetches";
import { UserProfileDto } from "../shared/types/accounts";
import toast, { Toaster } from "react-hot-toast";

export default function HomeLayout() {
  const [session, setSession] = useState<signInInput>({
    Email : '',
    Password: ''
  });

  const [sessionData, setSessionData] = useState<UserProfileDto>({
    userId : 0,
    userName : '',
    userBiography : '',
    imageUrl : '',
    firstName: '',
    lastName : '',
    birthDate: ''
  });
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const userData: UserProfileDto = await fetches.getSessionAccountData(session);
      setSessionData(userData);
    } catch (error) {
      toast.error('Error fetching user data: ' + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const redirectIfSessionNotExists = async () => {
      try {
        const check = Sesions.checkSessionExistsAndRedirect();
        if (check == null || check == undefined) {
          navigate('/get-started');
        } else {
          const newSession: signInInput = {
            Email: check.Email,
            Password: check.Password
          };
          setSession(newSession);
        }
      } catch (error) {
        toast.error('Error checking session: ' + error);
        setLoading(false);
      }
    };

    redirectIfSessionNotExists();
  }, []);

  useEffect(() => {
    if (session.Email && session.Password) {
      getUserData();
    }
  }, [session]);

  return (
    <div className="text-white flex">
      <Toaster />
        {loading? null : <LeftNavBar Session = {session} SessionData = {sessionData} />}
        <main className="overflow-auto w-full h-screen">
            <Outlet />
        </main>
    </div>
  )
}
