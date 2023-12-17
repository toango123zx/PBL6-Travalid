import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import DestinationCard from '../DestinationCard';
import productAPI from '../../api/productAPI';
import { APP_CONTEXT } from '../../App';
import './Destination.css';

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
const Destination = () => {
  const context = useContext(APP_CONTEXT);
  const [topDestination, setTopDestination] = useState([]);

  useEffect(() => {
    const fetchTopDestination = async () => {
      try {
        context.setIsLoading(true);

        const res = await productAPI.getAllProduct();

        if (res?.data?.length > 0) {
          setTopDestination(res.data);
        } else {
          setTopDestination([]);
        }
      } catch (err) {
        console.log(err);
      } finally {
        context.setIsLoading(false);
      }
    };

    fetchTopDestination();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-40">
      <div>
        <h4 className="font-medium text-orange-500 text-lg">Top Destination</h4>
        <p className="font-medium  text-lg">Discover your love</p>
      </div>
      <div className="w-full mt-6">
        <Slider {...settings}>
          {topDestination?.length > 0 &&
            topDestination.map((destination, index) => {
              return <DestinationCard data={destination} key={index} />;
            })}
        </Slider>
      </div>
    </div>
  );
};
export default Destination;
