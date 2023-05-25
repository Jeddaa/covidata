import { NavLink } from 'react-router-dom';
import { SiWorldhealthorganization } from 'react-icons/si';
import { FiSettings } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <div className="p-3 text-3xl">
        <SiWorldhealthorganization className="text-white" />
      </div>
      <ul className="flex items-center gap-1">
        <NavLink to="/" className="text-md text-white cursor-pointer hover:text-stone-800 mr-2">
          Countries
        </NavLink>
        <MdKeyboardVoice className="text-white mr-2 mt-1" />
        <FiSettings className="text-white mr-6 mt-1" />
      </ul>
    </nav>
  );
}
