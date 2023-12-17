import React from 'react';
import { IoArrowRedoOutline } from 'react-icons/io5';
import Booking from '../../assets/icon-booking.png';
import Famous from '../../assets/icon-famous.png';
import Location from '../../assets/icon-location.png';
import Slider from 'react-slick';
import ServiceCard from '../ServiceCard';

const serviceValue = [
  {
    icon: Location,
    title: 'Best Tour Guide',
    description: 'Meet the quality standards you expect',
  },
  {
    icon: Booking,
    title: 'Easy Booking',
    description: 'By adopting technology and best practice to ensure ordering becomes easier',
  },
  {
    icon: Famous,
    title: 'Famous Destinations',
    description: 'Not to be missed',
  },
  {
    icon: Location,
    title: 'Best Tour Guide',
    description: 'Meet the quality standards you expect',
  },
];
const Service = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 3,
    speed: 200,
    autoplay: true,
    arrows: true,
  };
  return (
    <div className="flex mt-40">
      <div className="flex justify-center items-center">
        <div className="w-2/12">
          <h4 className="font-medium text-orange-500 text-lg">Services</h4>
          <p className="w-8/12">Our top value categories for you</p>
          <button className="mt-8 bg-orange-500 px-8 py-2 text-white flex items-center rounded-3xl hover:opacity-80">
            <span className="font-medium mr-1">More</span> <IoArrowRedoOutline />
          </button>
        </div>
        <div className="w-10/12">
          <div className="w-[1000px]">
            <Slider {...settings}>
              {serviceValue.map((service, index) => {
                return <ServiceCard data={service} key={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
