import React from 'react';
import { TbCalendarStats, TbCalendarShare } from 'react-icons/tb';
import { FaRegListAlt } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';
import moment from 'moment';

const AttractionItem = ({ attractionItemData }) => {
  const startTime = moment(attractionItemData.start_time).format('h:mm MMM D, YYYY');
  const endTime = moment(attractionItemData.end_time).format('h:mm MMM D, YYYY');
  return (
    <div className="flex justify-between px-10 py-4 rounded-md shadow-full mb-10">
      <div className="w-7/12">
        <div className="flex">
          <div className="w-1/2 flex items-center">
            <TbCalendarStats fontWeight={600} fontSize={24} />
            <div className="ml-2">
              <h6 className="text-sm">Start Date</h6>
              <h4 className="font-semibold">{startTime}</h4>
            </div>
          </div>
          <div className="w-1/2 flex items-center">
            <TbCalendarShare fontWeight={600} fontSize={24} />
            <div className="ml-2">
              <h6 className="text-sm">End Date</h6>
              <h4 className="font-semibold">{endTime}</h4>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2 flex items-center">
            <FaRegListAlt fontWeight={600} fontSize={24} />
            <div className="ml-2">
              <h6 className="text-sm">Booked</h6>
              <h4 className="font-semibold">{attractionItemData.booked}</h4>
            </div>
          </div>
          <div className="w-1/2 flex items-center text-green-500">
            <FaRegCircleCheck fontWeight={600} fontSize={24} />
            <span className="ml-2 font-semibold">{attractionItemData.status}</span>
          </div>
        </div>
      </div>
      <div className="w-4/12 flex items-center justify-end">
        <div className="text-center">
          <h1 className="text-orange-400 font-semibold text-2xl">{attractionItemData.price} VND</h1>
          <button className="px-10 py-2 mt-2 rounded-full bg-orange-400 font-semibold text-white hover:bg-orange-600">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttractionItem;
