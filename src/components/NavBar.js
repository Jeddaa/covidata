import { NavLink } from 'react-router-dom';
import { SiWorldhealthorganization } from 'react-icons/si';

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <div className="p-3 text-2xl">
        <SiWorldhealthorganization />
      </div>
      <ul className="flex items-center">
        <NavLink to="/" className="text-md text-stone-600 cursor-pointer hover:text-stone-800 mr-6">
          Countries
        </NavLink>
      </ul>
    </nav>
  );
}
