import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';
import { LoadingPage } from '../../page';
import { APP_CONTEXT } from '../../App';

const LayoutDefault = () => {
  const context = useContext(APP_CONTEXT);
  return (
    <div>
      {context.isLoading && <LoadingPage />}
      <div className="max-w-[1200px] mx-auto">
        <Header />
        <div className="mt-[90px]"></div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutDefault;
