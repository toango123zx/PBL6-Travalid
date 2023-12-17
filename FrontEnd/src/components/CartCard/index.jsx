import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Checkbox, Modal } from 'antd';

const CartCard = ({ cartData, checked, onCheckboxChange, cartValue, setCartValue }) => {
  const { id, image, name, location, price, priceOrigin, quantity } = cartData;
  const [numberPeople, setNumberPeople] = useState(quantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChangePeopleButton = (type) => {
    setNumberPeople((prevNumber) => {
      let newNumberPeople = prevNumber;

      if (type === 'addition') {
        newNumberPeople = prevNumber + 1;
      } else if (prevNumber > 0) {
        newNumberPeople = prevNumber - 1;
      }

      const index = cartValue.checked.findIndex((item) => item.id === id);

      if (index !== -1) {
        setCartValue((prevCartValue) => {
          const updatedChecked = [...prevCartValue.checked];
          updatedChecked[index] = {
            ...updatedChecked[index],
            numberPeople: newNumberPeople,
          };
          return {
            ...prevCartValue,
            checked: updatedChecked,
          };
        });
      }

      return newNumberPeople;
    });
  };

  const handleChangePeople = (e) => {
    if (+e.target.value < 0) {
      setNumberPeople(0);
    } else {
      setNumberPeople(e.target.value);
    }
  };

  return (
    <div className="flex px-6 py-4 rounded-xl shadow-full mt-10">
      <div className="w-2/5 flex">
        <Checkbox checked={checked} onChange={onCheckboxChange} />
        <img src={image} alt={name} className="ml-2 w-[140px] h-[140px] object-cover rounded-lg" />
        <div className="ml-2 flex flex-col justify-center mr-2">
          <h5 className="font-semibold">{name}</h5>
          <p className="flex items-center">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="w-2/12 flex flex-col justify-center">
        {priceOrigin && <h5 className="line-through font-semibold">VND {priceOrigin}</h5>}
        <h5 className="font-semibold text-orange-500">VND {price}</h5>
      </div>
      <div className="w-2/12 flex flex-col justify-center">
        <div className="flex w-9/12">
          <button
            className="w-1/4 border border-slate-600 hover:bg-white font-semibold"
            onClick={() => handleChangePeopleButton('subtraction')}
            disabled={!checked}
          >
            -
          </button>
          <input
            className="w-2/4 text-center  border-y border-slate-600 font-semibold"
            type="number"
            value={numberPeople}
            onChange={handleChangePeople}
            readOnly={!checked}
          />
          <button
            className="w-1/4 border border-slate-600 hover:bg-white font-semibold"
            onClick={() => handleChangePeopleButton('addition')}
            disabled={!checked}
          >
            +
          </button>
        </div>
      </div>
      <div className="w-2/12 flex flex-col justify-center">
        {priceOrigin && <h5 className="line-through font-semibold">VND {+priceOrigin * numberPeople}.000</h5>}
        <h5 className="font-semibold text-orange-500">VND {+price * numberPeople}.000</h5>
      </div>
      <div className="w-[10%] flex flex-col justify-center">
        <div className="flex justify-center">
          <button className="bg-red-500 p-2 rounded-lg text-white hover:opacity-80" onClick={showModal}>
            <RiDeleteBin5Line fontSize={22} />
          </button>
        </div>
      </div>
      <Modal title="Confirm delete" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure detete item</p>
      </Modal>
    </div>
  );
};
export default CartCard;
