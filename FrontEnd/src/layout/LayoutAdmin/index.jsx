import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// import { HeaderAdmin, SideBar } from '../../components';
import { APP_CONTEXT } from '../../App';
import toast from 'react-hot-toast';

const LayoutAdmin = () => {
  const context = useContext(APP_CONTEXT);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context.user) {
      navigate('/auth');
      toast.error('Please Login !!!');
    } else {
      if (context.user.role !== 'admin') {
        navigate('');
        toast.error('Only admin can access this page');
      }
    }
  }, [context.user, navigate]);
  return (
    // <div className="flex">
    //   <div className="w-2/12">
    //     <SideBar />
    //   </div>
    //   <div className="w-10/12 flex flex-col">
    //     <HeaderAdmin />
    //     <div className="bg-slate-100 px-6 py-4">
    //       <div className="h-[calc(100vh-88px)] overflow-y-auto bg-white">
    <Outlet />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default LayoutAdmin;
