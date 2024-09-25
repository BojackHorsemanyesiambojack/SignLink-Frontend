import { createContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import Presentation from "./_auth/presentation/Presentation";
import SignIn from "./_auth/Sign/SignIn";
import SignUp from "./_auth/Sign/SignUp";
import DocsLayout from "./_docs/DocsLayout";
import HomeLayout from "./_home/HomeLayout";
import _Void_DeleteSession from "./_home/pages/_Void_DeleteSession";
import Init from "./_home/pages/Init";
import Messages from "./_home/pages/Messages";
import Search from "./_home/pages/Search";
import SignTraductor from "./_home/pages/SignTraductor";
import Tools from "./_home/pages/Tools";
import Sesions from "./utils/sesions/Sesions";
import MyProfile from "./_home/pages/MyProfile";
import Profile from "./shared/constants/Profile";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkActualSession = async() => {
      const check = await Sesions.checkSession();
      if(!check){
        navigate('/get-started')
      }
    }
    checkActualSession();
  }, []);

  return (
    <Routes>
      <Route Component={AuthLayout}>
        <Route path="/get-started" Component={Presentation} />
        <Route path="/sign-in" Component={SignIn} />
        <Route path="/sign-up" Component={SignUp} /> 
      </Route>
      <Route Component={HomeLayout}>
        <Route path="/" Component={Init} />
        <Route path="/home" Component={Init} />
        <Route path="/tools/sign-traductor" Component={SignTraductor} />
        <Route path="/tools" Component={Tools} />
        <Route path="/search" Component={Search} />
        <Route path="/messages" Component={Messages} />
        <Route path="/my-profile" Component={MyProfile} />
        <Route path="/tools/sign-learn" />
        <Route path="/profiles/:userName" Component={Profile} />
      </Route>
      <Route Component={_Void_DeleteSession} path="/delete-session" />
      <Route Component={DocsLayout}>
        <Route path="/tools/docs"/>
      </Route>
    </Routes>
  );
}

export default App;
