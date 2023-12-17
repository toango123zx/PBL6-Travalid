import React, { useContext } from 'react';
import { Destination, Header, IntroSlide, Service, Statistic, Footer } from '../../components';
import LoadingPage from '../loading';
import { APP_CONTEXT } from '../../App';

const HomePage = () => {
  const context = useContext(APP_CONTEXT);
  return (
    <div>
      {context.isLoading && <LoadingPage />}
      <div className="max-w-[1200px] mx-auto">
        <Header />
        <div className="mt-[90px]"></div>
        <IntroSlide />
        <Service />
        <Destination />
        <Statistic />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
