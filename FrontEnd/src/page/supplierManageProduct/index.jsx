import React, { useContext, useEffect, useMemo, useState } from 'react';
import { TableManage } from '../../components';
import productAPI from '../../api/productAPI';
import { APP_CONTEXT } from '../../App';

const options = [
  {
    label: 'Products',
    value: 'products',
  },
  {
    label: 'Schedules',
    value: 'schedules',
  },
  {
    label: 'Discounts',
    value: 'discounts',
  },
];
const SupplierManageProduct = () => {
  const context = useContext(APP_CONTEXT);
  const [active, setActive] = useState(options[0]);
  const [manageData, setManageData] = useState();

  const renderOptions = useMemo(() => {
    let dataSource = [];
    if (manageData) {
      if (active.value === 'products') {
        dataSource = manageData.product;
      } else if (active.value === 'schedules') {
        dataSource = manageData.schedule;
      } else {
        dataSource = manageData.discount;
      }
    }

    return (
      <>
        <div className="w-3/12 font-semibold ">
          <ul className="shadow-xl rounded-md p-4">
            {options.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    item.value === active.value ? 'bg-orange-400 text-white' : ''
                  } border-b px-4 py-1 hover:bg-orange-500 hover:text-white rounded-md`}
                  onClick={() => setActive(item)}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-9/12 ml-4">{manageData && <TableManage dataSource={dataSource} />}</div>
      </>
    );
  }, [active.value, manageData]);

  useEffect(() => {
    const fetchData = async () => {
      context.setIsLoading(true);
      try {
        const res = await productAPI.getSupplierManageProduct();
        if (res.data) {
          setManageData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
      context.setIsLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="flex justify-between">{renderOptions}</div>;
};

export default SupplierManageProduct;
