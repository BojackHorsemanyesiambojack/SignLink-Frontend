import { Outlet, useNavigate } from "react-router-dom";
import TopNavBar from "../shared/nav/TopNavBar";
import { useEffect } from "react";
import Sesions from "../utils/sesions/Sesions";

export default function AuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const check = Sesions.checkSessionExistsAndRedirect();
    check? navigate('/home') : null;
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
