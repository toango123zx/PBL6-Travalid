import React, { useContext, useMemo } from 'react';
import { Popover, Avatar } from 'antd';
import { PiSignOutFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { APP_CONTEXT } from '../../App';
import { toast } from 'react-hot-toast';
import { AiOutlineBarChart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { FaRegAddressCard } from 'react-icons/fa6';
import { RiBillLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';
import { IoWalletOutline } from 'react-icons/io5';
import { LuCreditCard } from 'react-icons/lu';

const optionLinkAdmin = [
  {
    icon: <FaRegAddressCard fontSize={24} />,
    label: 'Accounts',
    url: 'admin/accounts',
  },
  {
    icon: <RiBillLine fontSize={24} />,
    label: 'Order History',
    url: 'admin/order-history',
  },
  {
    icon: <AiOutlineBarChart fontSize={24} />,
    label: 'Statistic',
    url: 'admin/statistic',
  },
  {
    icon: <ImProfile fontSize={24} />,
    label: 'Profile',
    url: 'profile',
  },
  {
    icon: <IoSettingsOutline fontSize={24} />,
    label: 'Setting',
    url: 'setting',
  },
];
const optionLinkSupplier = [
  {
    icon: <LuCreditCard fontSize={24} />,
    label: 'Products',
    url: 'supplier/products',
  },
  {
    icon: <RiBillLine fontSize={24} />,
    label: 'Order History',
    url: 'supplier/order-history',
  },
  {
    icon: <IoWalletOutline fontSize={24} />,
    label: 'Wallet',
    url: 'supplier/wallet',
  },
  {
    icon: <ImProfile fontSize={24} />,
    label: 'Profile',
    url: 'profile',
  },
  {
    icon: <IoSettingsOutline fontSize={24} />,
    label: 'Setting',
    url: 'setting',
  },
];

const optionLinkTraveller = [
  {
    icon: <RiBillLine fontSize={24} />,
    label: 'Order History',
    url: 'order-history',
  },
  {
    icon: <IoWalletOutline fontSize={24} />,
    label: 'Wallet',
    url: 'wallet',
  },
  {
    icon: <ImProfile fontSize={24} />,
    label: 'Profile',
    url: 'profile',
  },
  {
    icon: <IoSettingsOutline fontSize={24} />,
    label: 'Setting',
    url: 'setting',
  },
];
const AvatarPopover = () => {
  const navigate = useNavigate();
  const context = useContext(APP_CONTEXT);

  const content = useMemo(() => {
    let options;
    const handleLogout = () => {
      context.setUser(null);
      localStorage.setItem('TRAVALID_TOKEN', '');
      toast.success('Sign Out successfully !');
      navigate('/auth');
    };
    if (context.user?.role === 'admin') {
      options = optionLinkAdmin;
    } else if (context.user?.role === 'travel_supplier') {
      options = optionLinkSupplier;
    } else {
      options = optionLinkTraveller;
    }
    return (
      <div className="px-4">
        <ul className="py-0 m-0 mt-2">
          {options.map((linkItem, index) => {
            return (
              <li key={index} className="flex justify-start">
                <NavLink
                  to={linkItem.url}
                  exact
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'sidebar-pending'
                      : isActive
                      ? 'text-orange-400 flex items-center  p-2 mt-2 w-full'
                      : 'flex items-center p-2 mt-2 text-gray-400 w-full hover:text-orange-400 hover:bg-sky-100'
                  }
                >
                  <span>{linkItem.icon}</span> <span className="ml-3 font-semibold">{linkItem.label}</span>
                </NavLink>
              </li>
            );
          })}
          <li
            className="flex items-center p-2 mt-2 text-white w-full hover:bg-red-700 bg-red-500 cursor-pointer"
            onClick={handleLogout}
          >
            <PiSignOutFill fontSize={18} />
            <span className="ml-2 font-medium">Logout</span>
          </li>
        </ul>
      </div>
    );
  }, [navigate, context]);
  return (
    <Popover content={content} trigger="click">
      <Avatar
        src={'https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'}
        alt="avatar"
        size="large"
      />
    </Popover>
  );
};

export default AvatarPopover;
