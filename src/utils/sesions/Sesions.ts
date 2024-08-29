import { signInInput } from "../../models/AccountInput";
import CookiesUtils from "../cookies/CookiesUtils";

const checkSessionExistsAndRedirect = ():signInInput => {
    const sessionExists : signInInput = CookiesUtils.checkCookie('user-session');
    
    return sessionExists;
  };

  const saveSession = (user : signInInput):void => {
    CookiesUtils.writeCookie('user-session', JSON.stringify(user));
  }

  const deleteSession = ():void => {
    CookiesUtils.deleteCookie('user-session');
  }

export default {checkSessionExistsAndRedirect, saveSession, deleteSession};