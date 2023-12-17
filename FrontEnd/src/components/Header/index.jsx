import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { APP_CONTEXT } from '../../App';
import './Header.css';
import AvatarPopover from '../AvatarPopover';

const Header = () => {
  const context = useContext(APP_CONTEXT);
  return (
    <nav className=" z-50 bg-white  fixed top-0 left-0 right-0 ">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4">
        <div className="brand-text w-3/12">
          <Link to="/">
            <span className="text-orange-500">T</span>
            <span>RAVALID</span>
          </Link>
        </div>
        <div className="w-8/12 flex justify-between">
          <ul className="flex w-8/12 justify-between">
            <li className="nav-item ">
              <NavLink
                to="/"
                exact
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'nav-item-active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/attractions"
                exact
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'nav-item-active' : '')}
              >
                Attractions
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/services"
                exact
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'nav-item-active' : '')}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/sales"
                exact
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'nav-item-active' : '')}
              >
                Sales
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/contact"
                exact
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'nav-item-active' : '')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="w-2/12 flex justify-end">
            {context.user && (
              <NavLink
                to="/cart"
                exact
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'nav-item-active mr-4' : 'flex items-center mr-4'
                }
              >
                <AiOutlineShoppingCart fontSize={32} />
              </NavLink>
            )}

            {context.user ? (
              <AvatarPopover user={context.user} />
            ) : (
              <NavLink
                to="/auth"
                className="bg-orange-400 flex items-center text-white font-semibold px-4 py-1 rounded-2xl ml-4 hover:bg-orange-300"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
