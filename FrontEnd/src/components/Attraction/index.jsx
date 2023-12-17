import React, { useEffect, useState, useContext } from 'react';
import AttractionCard from '../AttractionCard';
import { APP_CONTEXT } from '../../App';
import productAPI from '../../api/productAPI';
const sortOptions = [
  {
    label: 'Newest',
    value: 'Newest',
  },
  {
    label: 'Option 2',
    value: 'Option 2',
  },
  {
    label: 'Option 3',
    value: 'Option 3',
  },
];

const Attraction = () => {
  const context = useContext(APP_CONTEXT);
  const [attractionArray, setAttractionArray] = useState([]);

  useEffect(() => {
    const fetchTopDestination = async () => {
      try {
        context.setIsLoading(true);

        const res = await productAPI.getAllProduct();

        if (res?.data?.length > 0) {
          setAttractionArray(res.data);
        } else {
          setAttractionArray([]);
        }
      } catch (err) {
        console.log(err);
      } finally {
        context.setIsLoading(false);
      }
    };

    fetchTopDestination();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h5 className="p-3 bg-orange-400 text-white rounded-3xl font-semibold tracking-wide">Attraction</h5>
        <div>
          <label htmlFor="attraction">Sort by:</label>
          <select id="attraction" defaultValue="Newest" className="font-semibold">
            {sortOptions.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        {attractionArray.map((attraction, index) => {
          return <AttractionCard key={index} data={attraction} />;
        })}
      </div>
    </div>
  );
};

export default Attraction;
