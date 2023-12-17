import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { TbDiscount } from 'react-icons/tb';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { AiOutlineDashboard } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { TbHomeMove } from 'react-icons/tb';
import logo from '../../assets/icon-location.png';

const sideBarArray = [
  {
    icon: <AiOutlineDashboard fontSize={24} />,
    label: 'Dashboard',
    url: '',
  },
  {
    icon: <FiUsers fontSize={24} />,
    label: 'User Manage',
    url: 'manage-user',
  },
  {
    icon: <AiOutlineBarChart fontSize={24} />,
    label: 'Statistic',
    url: 'statistic',
  },
  {
    icon: <TbDiscount fontSize={24} />,
    label: 'Discount Manage',
    url: 'discount',
  },
  {
    icon: <MdOutlineMiscellaneousServices fontSize={24} />,
    label: 'Service',
    url: 'service',
  },
  {
    icon: <TbHomeMove fontSize={24} />,
    label: 'Home',
    url: '/',
  },
];
const SideBar = () => {
  return (
    <div className="px-6 bg-sky-900 h-screen">
      <div className="flex  items-center">
        <img src={logo} alt="logo" className="w-[60px] h-[60px]" />
        <h4 className="font-semibold text-white text-xl ml-2">Travalid</h4>
      </div>
      <ul className="mt-6">
        {sideBarArray.map((sideBarItem, index) => {
          return (
            <li key={index} className="flex ">
              <NavLink
                to={sideBarItem.url}
                exact
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'sidebar-pending'
                    : isActive
                    ? 'text-orange-400 flex items-center  p-2 mt-2 w-full'
                    : 'flex items-center p-2 mt-2 text-white w-full hover:text-orange-400 hover:bg-sky-100'
                }
              >
                <span>{sideBarItem.icon}</span> <span className="ml-3 font-semibold">{sideBarItem.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SideBar;
