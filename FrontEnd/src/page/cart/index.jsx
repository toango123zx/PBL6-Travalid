import React, { useContext, useEffect, useMemo, useState } from 'react';
import BgCart from '../../assets/bg-cart.png';
import { Checkbox } from 'antd';
import { HiOutlineTicket } from 'react-icons/hi';
import { cartArray, voucherArray } from '../../constant';
import { CartCard } from '../../components';
import { APP_CONTEXT } from '../../App';
import { useNavigate } from 'react-router-dom';

import './Cart.css';
import toast from 'react-hot-toast';

const CartPage = () => {
  const context = useContext(APP_CONTEXT);
  const navigate = useNavigate();
  const [cartValue, setCartValue] = useState({
    checked: [],
    checkAll: false,
  });

  const [selectedVoucher, setSelectedVoucher] = useState();

  const handleChangeVoucher = (e) => {
    setSelectedVoucher(e.target.value);
  };

  const handleCheckAll = (e) => {
    const { checked } = e.target;
    const updatedChecked = checked ? cartArray : [];

    setCartValue((prevState) => ({
      ...prevState,
      checked: updatedChecked,
      checkAll: checked,
    }));
  };
  const handleCheckboxChange = (cartData) => {
    setCartValue((prevState) => {
      const { checked } = prevState;
      const updatedChecked = checked.map((cart) => cart.id).includes(cartData.id)
        ? checked.filter((cart) => cart.id !== cartData.id)
        : [...checked, cartData];

      const allChecked = cartArray.every((cart) => updatedChecked.map((cartItem) => cartItem.id).includes(cart.id));

      return {
        ...prevState,
        checked: updatedChecked,
        checkAll: allChecked,
      };
    });
  };

  const Bill = useMemo(() => {
    let sum = 0;
    if (cartValue.checked.length > 0) {
      cartValue.checked?.forEach((item) => {
        if (!item.numberPeople) {
          item.numberPeople = 1;
        }
        return (sum += item.numberPeople * +item.price);
      });
    }
    const discount = selectedVoucher ? ((+selectedVoucher.split('%')[0] * sum) / 100).toFixed(3) : 0;
    return (
      <div className="shadow-full p-3 py-4 rounded-xl">
        <div className="flex items-center justify-between">
          <h6 className="font-semibold">Subtotal:</h6>
          <h6>VND {sum}.000</h6>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <h6 className="font-semibold">Discount:</h6>
          <h6>VND -{selectedVoucher && sum > 0 ? discount : '0'}</h6>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <h6 className="flex items-center font-semibold w-1/2">
            <HiOutlineTicket className="text-orange-500 mr-2" fontSize={30} />{' '}
            <span className="text-gray-400">Voucher</span>
          </h6>
          <select defaultValue="" className="text-right" onChange={handleChangeVoucher}>
            {voucherArray.map((voucher, index) => {
              return (
                <option value={voucher.value} key={index}>
                  {voucher.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <h6 className="font-semibold">Saved:</h6>
          <h6 className="text-orange-500">VND -{selectedVoucher && sum > 0 ? discount : '0'}</h6>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <h6 className="font-semibold">Total amount:</h6>
          <h6 className="font-semibold">VND {selectedVoucher && sum > 0 ? (sum - discount).toFixed(3) : '0'}</h6>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="px-4 py-3 rounded-3xl font-semibold text-white bg-orange-400 hover:opacity-80">
            Check out
          </button>
        </div>
      </div>
    );
  }, [cartValue, selectedVoucher]);

  useEffect(() => {
    if (!context.user) {
      navigate('/auth');
      toast.error('Please Login !!!');
    }
    window.scrollTo(0, 0);
  }, [context.user, navigate]);
  return (
    <div className="cart-page">
      <div className="relative">
        <img src={BgCart} alt="bg-cart" />
        <h6 className="cart-page-title">My Booking Cart</h6>
      </div>
      <div className="mt-20 flex justify-between">
        <div className="w-9/12 ">
          <div className="flex px-6 py-4 rounded-xl shadow-full">
            <div className="w-2/5">
              <Checkbox onChange={handleCheckAll} checked={cartValue.checkAll} />
              <span className="ml-2">Product</span>
            </div>
            <div className="w-2/12">
              <span>Unit Price</span>
            </div>
            <div className="w-2/12">
              <span>Quantity</span>
            </div>
            <div className="w-2/12">
              <span>Total Price</span>
            </div>
            <div className="w-[10%] text-center">
              <span>Action</span>
            </div>
          </div>
          <div className="mt-10 max-h-[800px] overflow-y-auto">
            {cartArray.map((cart, index) => {
              return (
                <CartCard
                  key={index}
                  cartData={cart}
                  checked={cartValue.checked.map((cartItem) => cartItem.id).includes(cart.id)}
                  onCheckboxChange={() => handleCheckboxChange(cart)}
                  cartValue={cartValue}
                  setCartValue={setCartValue}
                />
              );
            })}
          </div>
        </div>
        <div className="w-3/12 ml-4">{Bill}</div>
      </div>
    </div>
  );
};

export default CartPage;
