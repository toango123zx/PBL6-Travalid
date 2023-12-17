import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import { Popover } from 'antd';

const content = (
  <div>
    <button className="flex items-center hover:bg-slate-100 px-2 py-1">
      <MdOutlineReportGmailerrorred fontSize={18} className="mr-1" /> Report
    </button>
  </div>
);
const Rating = ({ className }) => {
  return (
    <div className={`${className} px-6 py-2 border rounded-lg`}>
      <div className="flex justify-between items-center">
        <div className="flex text-yellow-300">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
        </div>
        <Popover content={content} placement="bottom" trigger="click">
          <button className="hover:bg-slate-100 p-1 rounded-full">
            <MdOutlineMoreHoriz />
          </button>
        </Popover>
      </div>
      <div className="mt-2">
        <h3 className="flex items-center font-semibold">
          Thuan Nguyen
          <span className="text-green-500 ml-2">
            <FaCheckCircle />
          </span>
        </h3>
        <p className="mt-1">"10 diem khong co nhung."</p>
        <p className="text-sm mt-2">Posted on Auguest 14, 2023</p>
      </div>
    </div>
  );
};

export default Rating;
