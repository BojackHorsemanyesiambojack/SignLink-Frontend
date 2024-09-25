import { Outlet, useNavigate } from "react-router-dom";
import TopNavBar from "../shared/nav/TopNavBar";
import { useEffect } from "react";
import Sesions from "../utils/sesions/Sesions";

export default function AuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkActualSession = async() => {
      const check = await Sesions.sesionIsCreated();
      check? navigate('/home') : null;
    }
    checkActualSession();
  }, []);
  return (
    <>
    <TopNavBar />
    <section className="w-full text-white">
        <Outlet />
    </section>
    </>
  )
}
