import React from 'react';
import { AiTwotoneStar, AiFillEye } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import './DestinationCard.css';

const DestinationCard = ({ data }) => {
  const { id_product, name, city, image, avg_rate, count_complete } = data;
  const starsArray = [];
  for (let i = 0; i < avg_rate; i++) {
    starsArray.push(<AiTwotoneStar key={i} className="text-yellow-400" />);
  }
  return (
    <div className="w-[300px] h-[350px] px-3 py-4 shadow-2xl rounded-xl flex flex-col justify-between">
      <img
        src={image.replace('file/d/', 'uc?id=').split('/view')[0]}
        alt={name}
        className="rounded-xl h-[200px] object-cover"
      />
      <div className="flex-1 ">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h4 className="flex items-center mt-2">
              <CiLocationOn className="mr-2" fontSize={18} />
              {city}{' '}
            </h4>
            <h4 className="destination-card-name ">
              <Link className="hover:text-orange-400 hover:underline" to={`/attractions/${id_product}`}>
                {name}
              </Link>
            </h4>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">{starsArray}</div>
            <div className="flex items-center">
              <AiFillEye />
              <span className="ml-1">{count_complete}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationCard;
