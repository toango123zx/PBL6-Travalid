import React, { useContext, useEffect, useState } from 'react';
import { GoDatabase } from 'react-icons/go';
import { BsPatchCheck } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import discountAPI from '../../api/discountAPI';
import { APP_CONTEXT } from '../../App';

const SaleDetail = ({ className }) => {
  const { id } = useParams();
  const [saleDetailData, setSaleDetailData] = useState();
  const context = useContext(APP_CONTEXT);
  useEffect(() => {
    const fetchSaleDetail = async () => {
      context.setIsLoading(true);
      try {
        const res = await discountAPI.getDiscountDetail(id);
        if (res?.data) {
          const dateStart = new Date(res.data.start_time);
          const dateEnd = new Date(res.data.end_time);
          setSaleDetailData({
            ...res.data,
            start_time:
              ('0' + dateStart.getUTCHours()).slice(-2) +
              ':' +
              ('0' + dateStart.getUTCMinutes()).slice(-2) +
              ', ' +
              ('0' + dateStart.getUTCDate()).slice(-2) +
              '/' +
              ('0' + (dateStart.getUTCMonth() + 1)).slice(-2) +
              '/' +
              dateStart.getUTCFullYear(),
            end_time:
              ('0' + dateEnd.getUTCHours()).slice(-2) +
              ':' +
              ('0' + dateEnd.getUTCMinutes()).slice(-2) +
              ', ' +
              ('0' + dateEnd.getUTCDate()).slice(-2) +
              '/' +
              ('0' + (dateEnd.getUTCMonth() + 1)).slice(-2) +
              '/' +
              dateEnd.getUTCFullYear(),
          });
        }
      } catch (err) {
        console.log(err);
      }
      context.setIsLoading(false);
    };
    fetchSaleDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`${className} `}>
      {saleDetailData && (
        <>
          <div className="flex justify-center items-center">
            <div className="shadow-full p-4 rounded-md w-[30%]">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-xl">{saleDetailData?.name}</h4>
                {saleDetailData?.supplier && (
                  <div className="px-4 py-1 bg-orange-400 text-white font-semibold rounded-md">
                    {saleDetailData?.supplier.split('_')[1].toUpperCase()}
                  </div>
                )}
              </div>
              <p className="mt-2">
                Valid from <span className="font-semibold">{saleDetailData?.start_time}</span>
              </p>
              <div className="flex justify-between items-center mt-1">
                <p className="flex items-center">
                  <GoDatabase className="text-yellow-400 mr-1" /> Point: 0
                </p>
                <h5 className="text-xl font-semibold text-orange-400">-{saleDetailData.value}% price</h5>
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="flex items-center text-green-400 ">
                  <BsPatchCheck className="mr-1 font-semibold" fontWeight={800} />{' '}
                  <span className="font-semibold mr-1">{saleDetailData?.quantity} </span> codes left
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-[80%] flex justify-around px-6 mt-6">
              <div className="w-1/2">
                <h3 className="text-orange-400 text-xl mt-4 font-semibold">Valid Period</h3>
                <div className="flex justify-between items-center">
                  <h2 className="w-2/12 font-semibold">Start:</h2>
                  <h4 className="w-10/12">{saleDetailData?.start_time}</h4>
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="w-2/12 font-semibold">End:</h2>
                  <h4 className="w-10/12">{saleDetailData?.end_time}</h4>
                </div>
                <h3 className="text-orange-400 text-xl mt-4 font-semibold">Value</h3>
                <h4>Discount {saleDetailData.value}%</h4>
                <h3 className="text-orange-400 text-xl mt-4 font-semibold">Remaining amount</h3>
                <h4>{saleDetailData.quantity} codes left</h4>
              </div>
              <div className="w-1/2">
                <h3 className="text-orange-400 text-xl mt-4 font-semibold">More detail</h3>
                <div className="flex mt-4 items-center">
                  <h3 className="font-semibold text-xl w-4/12">Discount Name</h3>
                  <h4 className="w-8/12">{saleDetailData.name} </h4>
                </div>
                <div className="flex mt-4 items-center">
                  <h3 className="font-semibold text-xl w-4/12">Provider Name</h3>
                  <h4 className="w-8/12">{saleDetailData?.supplier.toUpperCase()}</h4>
                </div>
                <div className="flex mt-4 items-center">
                  <h3 className="font-semibold text-xl w-4/12">Attraction</h3>
                  <h4 className="w-8/12">Ha Long Bay</h4>
                </div>
                <div className="flex mt-4 items-center">
                  <h3 className="font-semibold text-xl w-4/12">Destination</h3>
                  <h4 className="w-8/12">{saleDetailData.product.city} </h4>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default SaleDetail;
