import toast from 'react-hot-toast';
import UniversalCookie from 'universal-cookie';

const Cookie = new UniversalCookie();

const checkCookie = (cookie : string):any=>{
    const checking = Cookie.get(cookie);

    return checking;
}

const asyncCheckCookie = (cookie : string):any=>{
    const checking = Cookie.get(cookie);

    return checking;
}

const writeCookie = (name : string, cookie : string):void => {
    Cookie.set(name, cookie);
}

const deleteCookie = (name: string): void => {
    try {
        Cookie.remove(name);
    } catch (error) {
        toast.error(`Error al eliminar el registro '${name}': ` + error);
    }
};

export default {checkCookie, writeCookie, deleteCookie, asyncCheckCookie};