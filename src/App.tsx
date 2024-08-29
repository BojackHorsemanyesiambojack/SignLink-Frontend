import { Route, Routes, useNavigate } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import { useEffect, useState } from "react";
import Presentation from "./_auth/presentation/Presentation";
import SignIn from "./_auth/Sign/SignIn";
import HomeLayout from "./_home/HomeLayout";
import Init from "./_home/pages/Init";
import SignTraductor from "./_home/pages/SignTraductor";
import Tools from "./_home/pages/Tools";
import Sesions from "./utils/sesions/Sesions";
import _Void_DeleteSession from "./_home/pages/_Void_DeleteSession";
import Search from "./_home/pages/Search";
import Messages from "./_home/pages/Messages";
import Profile from "./_home/pages/Profile";
import SignUp from "./_auth/Sign/SignUp";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const check = Sesions.checkSessionExistsAndRedirect();
    check? navigate('/home') : navigate('/get-started');
  }, []);

  return (
    <Routes>
      <Route Component={AuthLayout}>
        <Route path="/get-started" Component={Presentation} />
        <Route path="/sign-in" Component={SignIn} />
        <Route path="/sign-up" Component={SignUp} /> 
      </Route>
      <Route Component={HomeLayout}>
        <Route path="/home" Component={Init} />
        <Route path="/tools/sign-traductor" Component={SignTraductor} />
        <Route path="/tools" Component={Tools} />
        <Route path="/delete-session" Component={_Void_DeleteSession} />
        <Route path="/search" Component={Search} />
        <Route path="/messages" Component={Messages} />
        <Route path="/my-profile" Component={Profile} />
      </Route>
    </Routes>
  );
}

export default App;
