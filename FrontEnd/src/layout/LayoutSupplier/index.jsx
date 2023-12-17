import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { APP_CONTEXT } from '../../App';
import toast from 'react-hot-toast';

const LayoutSupplier = () => {
  const context = useContext(APP_CONTEXT);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context.user) {
      navigate('/auth');
      toast.error('Please Login !!!');
    } else {
      if (context.user.role !== 'travel_supplier') {
        navigate('');
        toast.error('Only travel service providers can access this page');
      }
    }
  }, [context.user, navigate]);
  return <Outlet />;
};
export default LayoutSupplier;
