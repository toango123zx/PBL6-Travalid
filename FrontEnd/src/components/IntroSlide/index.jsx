import React from 'react';
import './IntroSlide.css';
import TravelText from '../../assets/Travel.png';
import Plane from '../../assets/plane.png';
const IntroSlide = () => {
  return (
    <div className="flex h-[600px] mb-20">
      <div className="w-3/12 flex flex-col justify-between">
        <img src={Plane} alt="plane" />
        <img src={TravelText} alt="TravelText" className="w-[250px] h-[250px]" />
        <div className="">
          <h1 className="text-statistic">10K+</h1>
          <p className="font-medium text-lg m-0">Satisfied Customers</p>
          <h1 className="text-statistic m-0">100K+</h1>
          <p className="font-medium text-lg">Available products</p>
        </div>
      </div>
      <div className="w-9/12 flex flex-col justify-between">
        <div className="flex items-center">
          <div className="w-[140px] h-[140px] rounded-full bg-yellow-200"></div>
          <div>
            <h1 className="text-title">TRAVEL AND VALID</h1>
            <p className="font-medium">https://Travalid.com</p>
          </div>
          <div className="ml-24">
            <img
              className="w-[300px] h-[300px] rounded-full object-cover"
              src="https://vcdn1-dulich.vnecdn.net/2022/07/18/ha-long-quang-ninh-jpeg-9862-1-1398-8445-1658113194.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=v3wvlCTR82KxbKRSn500dw"
              alt="halong"
            />
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex w-5/12 items-center">
            <img
              className="w-[150px] h-[220px] object-cover rounded-[58px]"
              src="https://file1.dangcongsan.vn/data/0/images/2023/01/06/upload_2675/j4gw7hia.jpeg"
              alt="dong"
            />
            <div className="ml-6">
              <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
              <h5 className="font-medium text-lg mt-4">Tòn Ngô Vlogger</h5>
            </div>
          </div>
          <div className="flex w-5/12 items-center">
            <img
              className="w-[150px] h-[220px] object-cover rounded-[58px]"
              src="https://t3.gstatic.com/images?q=tbn:ANd9GcQWHEE0ilRfTw9lqa4ypVegusUVgg_NMBkXgTm7FFdU3-xXJ-J9"
              alt="dong"
            />
            <div className="ml-6">
              <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry”</p>
              <h5 className="font-medium text-lg mt-4">Tòn Ngô Vlogger</h5>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default IntroSlide;
