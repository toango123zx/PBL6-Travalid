import React from 'react';
import { GoDatabase } from 'react-icons/go';
import { BsPatchCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SaleCard = ({ className, saleData }) => {
  const date = new Date(saleData.start_time);
  return (
    <div className={`${className} shadow-full p-4 rounded-md mb-4`}>
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-xl">{saleData.name}</h4>
        {saleData?.supplier && (
          <div className="px-4 py-1 bg-orange-400 text-white font-semibold rounded-md">
            {saleData?.supplier.toUpperCase()}
          </div>
        )}
      </div>
      <p className="mt-2">
        Valid from{' '}
        <span className="font-semibold">
          {('0' + date.getUTCHours()).slice(-2) +
            ':' +
            ('0' + date.getUTCMinutes()).slice(-2) +
            ', ' +
            ('0' + date.getUTCDate()).slice(-2) +
            '/' +
            ('0' + (date.getUTCMonth() + 1)).slice(-2) +
            '/' +
            date.getUTCFullYear()}
        </span>
      </p>
      <div className="flex justify-between items-center mt-1">
        <p className="flex items-center">
          <GoDatabase className="text-yellow-400 mr-1" /> Point: {saleData.point}
        </p>
        <h5 className="text-xl font-semibold text-orange-400">-{saleData.value}% price</h5>
      </div>
      <div className="flex justify-between items-center mt-1">
        <p className="flex items-center text-green-400 ">
          <BsPatchCheck className="mr-1 font-semibold" fontWeight={800} />{' '}
          <span className="font-semibold mr-1">{saleData.quantity} </span> codes left
        </p>
        <Link to={`${saleData.id_discount}`} className="underline text-blue-400 hover:text-blue-500">
          View detail
        </Link>
      </div>
    </div>
  );
};

export default SaleCard;
