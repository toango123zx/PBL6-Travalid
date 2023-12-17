import React, { useState } from 'react';
import Attractions from '../../assets/attractions.png';
import './Attractions.css';
import { Attraction } from '../../components';
import { BsChevronRight } from 'react-icons/bs';

const AttractionsPage = () => {
  const [searchValue, setSearchValue] = useState({
    destination: '',
    minPrice: '',
    maxPrice: '',
  });
  const handleChange = (e) => {
    setSearchValue({ ...searchValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="attraction-page">
      <div
        className="h-[520px] overflow-hidden flex bg-bottom bg-cover items-center justify-center relative"
        style={{ background: `url(${Attractions})` }}
      >
        <h1 className="attractions-header">ATTRACTIONS</h1>
        <h6 className="attractions-slogan">Discover your love</h6>
        <div className="attractions-filter">
          <h3 className="attractions-filter-title">Find the Adventure of a lifetime</h3>
          <div className="flex justify-between mt-3">
            <div className="w-4/12">
              <h6 className="font-semibold">Destination</h6>
              <input
                type="text"
                value={searchValue.destination}
                onChange={handleChange}
                name="destination"
                className="px-4 py-2 rounded-lg border mt-2 border-slate-600"
                placeholder="Keyword here"
              />
            </div>
            <div className="w-2/12">
              <h6 className="font-semibold">Min Price</h6>
              <input
                type="text"
                value={searchValue.minPrice}
                onChange={handleChange}
                name="minPrice"
                placeholder="0"
                className="px-4 py-2 rounded-lg border mt-2 border-slate-600 w-8/12"
              />
              <span className=" ml-2">VND</span>
            </div>
            <div className="w-2/12">
              <h6 className="font-semibold">Max Price</h6>
              <input
                type="text"
                value={searchValue.maxPrice}
                onChange={handleChange}
                name="maxPrice"
                placeholder="0"
                className="px-4 py-2 rounded-lg border mt-2 border-slate-600 w-8/12"
              />
              <span className=" ml-2">VND</span>
            </div>
            <div className="w-2/12  flex justify-end">
              <div className="mt-8 flex justify-end">
                <button className="px-6 w-full rounded-lg bg-orange-400 text-white hover:opacity-80">Find</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Attraction />
        <div className="mt-16 flex justify-center items-center">
          <button className="flex items-center text-white bg-orange-400 font-semibold px-5 py-2 rounded-3xl hover:opacity-80">
            More <BsChevronRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttractionsPage;
