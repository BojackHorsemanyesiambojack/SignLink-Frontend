import UniversalCookie from 'universal-cookie';

const Cookie = new UniversalCookie();

const checkCookie = (cookie : string):any=>{
    const checking = Cookie.get(cookie);

    return checking;
}

const writeCookie = (name : string, cookie : string):void => {
    Cookie.set(name, cookie);
}

const deleteCookie = (name: string):void => {
    Cookie.remove(name);
}

export default {checkCookie, writeCookie, deleteCookie};