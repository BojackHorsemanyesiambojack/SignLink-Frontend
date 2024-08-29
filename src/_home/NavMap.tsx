import { ReactElement } from "react";
import Profile from "../assets/Icons/Profile";
import Home from "../assets/Icons/Home";
import Search from "../assets/Icons/Search";
import Messages from "../assets/Icons/Messages";
import Tools from "../assets/Icons/Tools";

export type NavMap = {
    label : string,
    image : ReactElement | null,
    link : string
}

export const NavMapping: NavMap[] = [
    {
        label: 'My profile',
        image: <Profile />,
        link:'/my-profile'
    },
    {
        label: 'Home',
        image: <Home />, 
        link: '/home'
    },
    {
        label: 'Search',
        image: <Search />,
        link: '/search'
    },
    {
        label: 'Messages',
        image: <Messages />,
        link: '/messages'
    },
    {
        label: 'Tools',
        image: <Tools />,
        link: '/tools'
    },
    {
        label: 'Sign out',
        image: null,
        link:'/delete-session'
    }
];