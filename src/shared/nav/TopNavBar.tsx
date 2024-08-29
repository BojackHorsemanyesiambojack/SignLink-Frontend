import { useLocation, useNavigate } from 'react-router-dom';
import PolarBearLogo from '../../assets/Icons/logo.png';

export default function TopNavBar() {
  const navigate = useNavigate();
  const actualRoute = useLocation().pathname;
  return (
    <>
    {actualRoute == '/sign-in' || actualRoute == '/sign-up'?
    null
  :
  <nav className='fixed max-h-16 flex flex-row items-center justify-between bg-zinc-900 w-full text-white
    border-b border-neutral-800'>
        <div className='flex center-all'>
            <img src={PolarBearLogo} alt='SingLinkLogo' className=' max-w-16' />
            <h1 className='text-1xl font-bold'>SignLink</h1>
        </div>
        <div>
            {actualRoute == '/sign-in' || actualRoute == '/sign-up'?
            null:
            <ul className='flex gap-9 p-10 text-sm'>
                <li><a className='a-hover-1' onClick={() => navigate('/sign-in')}>Iniciar Sesion</a></li>
                <li><a className='a-hover-1' onClick={() => navigate('/sign-up')}>Registrarse</a></li>
            </ul>
          }
        </div>
    </nav>}
    </>
  )
}
