import React, { useMemo, useState } from 'react';
import { TableManage } from '../../components';

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
  const [active, setActive] = useState(options[0]);

  const renderOptions = useMemo(() => {
    return (
      <ul className="shadow-xl rounded-md p-4">
        {options.map((item, index) => {
          return (
            <li
              key={index}
              className={`${
                item.value === active.value ? 'bg-red-400 text-white' : ''
              } border-b px-4 py-1 hover:bg-red-500 hover:text-white rounded-md`}
              onClick={() => setActive(item)}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    );
  }, [active.value]);
  return (
    <div className="flex justify-between">
      <div className="w-3/12 font-semibold ">{renderOptions}</div>
      <div className="w-9/12 ml-4">
        <TableManage />
        {active.label}
      </div>
    </div>
  );
};

export default SupplierManageProduct;
