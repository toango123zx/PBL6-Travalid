import React, { useContext, useEffect, useState, useCallback } from 'react';
import { SaleCard } from '../../components';
import discountAPI from '../../api/discountAPI';
import { APP_CONTEXT } from '../../App';

const SalesPage = () => {
  const [discountArrays, setDiscountArrays] = useState();
  const context = useContext(APP_CONTEXT);

  const fetchData = useCallback(async () => {
    if (context.isLoading) {
      return;
    }

    context.setIsLoading(true);

    try {
      const res = await discountAPI.getDiscountTraveller();
      if (res.data.length > 0) {
        setDiscountArrays(res.data.slice(0, 15));
      } else {
        setDiscountArrays([]);
      }
    } catch (err) {
      console.log(err);
    }

    context.setIsLoading(false);
  }, [context]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center">
        {discountArrays?.length > 0 &&
          discountArrays.map((discount, index) => {
            return <SaleCard key={index} className="w-[30%]" saleData={discount} />;
          })}
      </div>
    </div>
  );
};

export default SalesPage;
