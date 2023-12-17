import React from 'react';
import './Statistic.css';

const Statistic = () => {
  return (
    <div className="mt-40 flex items-center justify-around bg-zinc-100 px-10 py-12 rounded-[40px]">
      <div className="text-center">
        <h4 className="statistic-number">141,432</h4>
        <h5 className="statistic-text">Satisfied Customers</h5>
      </div>
      <div className="text-center">
        <h4 className="statistic-number">12,929</h4>
        <h5 className="statistic-text">Staff</h5>
      </div>
      <div className="text-center">
        <h4 className="statistic-number">1,367</h4>
        <h5 className="statistic-text">Destinations</h5>
      </div>
    </div>
  );
};

export default Statistic;
