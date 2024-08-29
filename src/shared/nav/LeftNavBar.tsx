import { useNavigate } from 'react-router-dom';
import { NavMap, NavMapping } from '../../_home/NavMap';
import SignLinkLogo from '../../assets/Icons/logo.png';
import { signInInput } from '../../models/AccountInput';
import { Avatar } from 'react-profile-avatar';
import 'react-profile-avatar/dist/index.css';
import { UserProfileDto } from '../types/accounts';

export default function LeftNavBar({Session, SessionData} : {Session : signInInput, SessionData : UserProfileDto}) {
    const navigate = useNavigate();

    const handleNavigate = (link : string):void => {
        navigate(link);
    }
  return (
    <nav className="bg-zinc-950 h-screen  w-1/5 flex flex-col center-all border-r border-neutral-900">
        <div>
            <img src={SignLinkLogo} alt="" className='max-w-28' />
            <h1 className='text-2xl font-bold'>SignLink</h1>
        </div>
        <div className="flex flex-col center-all">
            <p>{SessionData.userName}</p>
            <Avatar className='my-2' />
            <p className='text-sm text-gray-400'>{Session.Email}</p>
        </div>
        <div>
            <ul className='flex flex-col gap-8 py-8'>
                {NavMapping.map((current : NavMap, index) => (
                    <li key={index} className='text-mdl flex center-all text-left'>
                        {current.image}
                        <a className='a-hover-1' onClick={() =>handleNavigate(current.link)}>
                            {current.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}
