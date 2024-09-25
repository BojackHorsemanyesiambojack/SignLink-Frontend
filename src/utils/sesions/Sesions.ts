import { signInInput } from "../../models/AccountInput";
import { Session } from "../../models/Session";
import routes from "../api/routes";
import CookiesUtils from "../cookies/CookiesUtils";
import fetches from "../fetching/fetches";

const checkSession = async():Promise<Session | null> => {
    const sessionExists : Session = await CookiesUtils.asyncCheckCookie('user-session');
    return sessionExists;
  };

  const sesionIsCreated = async():Promise<boolean | null> => {
    let checking : Session = await CookiesUtils.asyncCheckCookie('user-session');
    if(!checking){
      return false;
    }
    return true;
  }

  const checkAccountExists = async(session : Session):Promise<boolean> => {
    const baseUrl = routes.signInRoute;
    const login = {
      UserEmail:session.email,
      UserPassword:session.password
    }
    const response = await fetches.checkSesion(baseUrl,login )
    return response.ok;
  }
  const saveSession = (user : Session):void => {
    CookiesUtils.writeCookie('user-session', JSON.stringify(user));
  }

  const deleteSession = ():void => {
    CookiesUtils.deleteCookie('user-session');
  }

export default {checkSession, saveSession, deleteSession, checkAccountExists, sesionIsCreated};