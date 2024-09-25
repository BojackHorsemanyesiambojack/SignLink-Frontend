import { Session } from "../../models/Session";

export type IContextType = {
    user : Session,
    isLoading : boolean,
    setUser : React.Dispatch<React.SetStateAction<Session>>,
    isAuthenticated : boolean,
    setIsAuthenticated : React.Dispatch<React.SetStateAction<boolean>>
    checkAuthUser : () => Promise<boolean>;
};