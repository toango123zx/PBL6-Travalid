import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { AiTwotoneStar, AiFillEye } from 'react-icons/ai';
import './AttractionCard.css';
import { useNavigate } from 'react-router-dom';

const AttractionCard = ({ data }) => {
  const navigate = useNavigate();
  const { id_product, name, city, image, avg_rate, count_complete } = data;
  const starsArray = [];
  for (let i = 0; i < avg_rate; i++) {
    starsArray.push(<AiTwotoneStar key={i} className="text-yellow-400" />);
  }

  return (
    <div
      className="w-[30%] shadow-xl p-3 rounded-lg mt-10 attraction-card hover:cursor-pointer hover:bg-slate-50"
      onClick={() => navigate(`/attractions/${id_product}`)}
    >
      <div className="attraction-card-image">
        <img src={image.replace('file/d/', 'uc?id=').split('/view')[0]} alt={name} />
      </div>
      <div className="mt-2">
        <div>
          <h6 className="flex items-center">
            <CiLocationOn className="mr-1" /> {city}
          </h6>
          <h4 className="text-lg font-semibold">{name}</h4>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex">{starsArray}</div>
          <div className="flex items-center">
            <AiFillEye />
            <span className="ml-1">{count_complete}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
