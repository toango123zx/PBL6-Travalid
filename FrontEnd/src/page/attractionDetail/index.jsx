import React, { useEffect, useState, useMemo, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AiTwotoneStar } from 'react-icons/ai';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoCalendarOutline } from 'react-icons/io5';
import { MdOutlineFeedback } from 'react-icons/md';
import { IoIosContacts } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa';
import { FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa';
import AttractionDetail from '../../assets/attration-dettail.png';
import { attractionArray, optionFilterAttraction } from '../../constant';
import { AttractionItem, Rating } from '../../components';
import { Modal } from 'antd';
import productAPI from '../../api/productAPI';
import './AttractionDetail.css';
import { APP_CONTEXT } from '../../App';

const serviceValue = {
  name: 'Lorem Comp.',
  email: 'Services@example.com',
  phoneNumber: '0118003713',
  address: 'K325 Hung Vuong St., Da Nang City',
  taxIdNumber: '0118003713',
};
const options = [
  {
    icon: <IoInformationCircleOutline fontSize={24} />,
    label: 'Information',
    value: 'information',
  },
  {
    icon: <MdOutlineFeedback fontSize={24} />,
    label: 'Ratings',
    value: 'ratings',
  },
  {
    icon: <IoIosContacts fontSize={24} />,
    label: 'Supplier',
    value: 'supplier',
  },
];
const AtractionDetailPage = () => {
  const context = useContext(APP_CONTEXT);
  const { id } = useParams();
  const [content, setContent] = useState(options[0]);
  const [productDetail, setProductDetail] = useState();

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
  const renderContent = useMemo(() => {
    const { star, departureTime, returnTime, notIncluded, included, galleryDescription, galleryImages } =
      attractionArray[0];
    const starsArray = [];
    for (let i = 0; i < star; i++) {
      starsArray.push(<AiTwotoneStar key={i} className="text-yellow-400" />);
    }
    if (productDetail) {
      if (content.value === 'information') {
        return (
          <>
            <div className="flex justify-between mt-6">
              <div>
                <h4 className="text-xl font-semibold">{productDetail.name}</h4>
                <div className="flex items-center">
                  {starsArray}
                  <span className="ml-2">(2.3k review)</span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  <span className="text-orange-400">VND 165.000 </span> <span> / Per Couple</span>
                </h4>
              </div>
            </div>
            <p className="mt-6">{productDetail.description}</p>
            <div className="flex mt-4">
              <h5 className="text-lg font-bold text-orange-500 w-1/4">Destination</h5>
              <h5 className="w-3/4">{productDetail.city}</h5>
            </div>
            <div className="flex mt-4">
              <h5 className="text-lg font-bold text-orange-500 w-1/4">Departure</h5>
              <h5 className="w-3/4">{productDetail.departure}</h5>
            </div>
            <div className="flex mt-4">
              <h5 className="text-lg font-bold text-orange-500 w-1/4">Departure Time</h5>
              <h5 className="w-3/4">{departureTime}</h5>
            </div>
            <div className="flex mt-4">
              <h5 className="text-lg font-bold text-orange-500 w-1/4">Return Time</h5>
              <h5 className="w-3/4">{returnTime}</h5>
            </div>
            <div className="flex mt-4">
              <h5 className="text-lg font-bold text-orange-500 w-1/4">Not Included</h5>
              <div className="w-3/4 ">
                <div className="w-7/12 flex justify-between">
                  {notIncluded.map((notIncludedItem, index) => {
                    return (
                      <div className="w-2/5" key={index}>
                        <h5 className="flex items-center justify-between">
                          {notIncludedItem} <FaRegTimesCircle />
                        </h5>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <h5 className="text-lg font-bold text-orange-500 w-1/4">Included</h5>
              <div className="w-3/4 ">
                <div className="w-7/12 flex justify-between flex-wrap">
                  {included.map((includedItem, index) => {
                    return (
                      <div className="w-2/5" key={index}>
                        <h5 className="flex items-center justify-between">
                          {includedItem} <FaRegCheckCircle />
                        </h5>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-2xl font-semibold mt-24">From our gallery</h4>
              <p className="mt-4">{galleryDescription}</p>
              <div className="mt-3 flex flex-wrap justify-between ">
                {galleryImages.map((image, index) => {
                  return (
                    <div className="w-[30%] mt-4">
                      <img
                        src={image}
                        alt={`gallery-${index}`}
                        className="max-h-[200px] w-full rounded-lg object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mb-6">
              {productDetail.schedule_product.map((item, index) => {
                return <AttractionItem attractionItemData={item} key={index} />;
              })}
            </div>
          </>
        );
      } else if (content.value === 'ratings') {
        return (
          <>
            <div className="flex items-center justify-between mt-6">
              <h2 className="font-semibold text-xl">Product Ratings</h2>
              <button
                onClick={showModal}
                className="bg-orange-400 font-semibold text-white px-6 py-2 rounded-full hover:bg-orange-500"
              >
                Review
              </button>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </div>
            <div className=" mt-2">
              <div>
                <h3 className="font-semibold text-orange-400">
                  <span className="font-extrabold">4.7</span> Out Of <span>5</span>
                </h3>
                <div className="flex justify-between">
                  <div className="flex text-yellow-300 mt-2">
                    <FaStar fontSize={20} />
                    <FaStar fontSize={20} />
                    <FaStar fontSize={20} />
                    <FaStar fontSize={20} />
                    <FaStarHalf fontSize={20} />
                  </div>
                  <div>
                    <select className="font-semibold  px-2 py-1 rounded-full border">
                      {optionFilterAttraction.map((option, index) => {
                        return (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-around flex-wrap">
              <Rating className={`w-2/5 mb-2`} />
              <Rating className={`w-2/5 mb-2`} />
              <Rating className={`w-2/5 mb-2`} />
              <Rating className={`w-2/5 mb-2`} />
              <Rating className={`w-2/5 mb-2`} />
              <Rating className={`w-2/5 mb-2`} />
            </div>
            <div className="flex justify-center items-center">
              <button className="flex items-center font-semibold text-white bg-orange-400 px-6 py-2 rounded-full hover:bg-orange-500">
                More <IoIosArrowDown className="ml-1" />
              </button>
            </div>
          </>
        );
      } else {
        return (
          <div>
            <h2 className="font-semibold text-xl mt-6">Providing This Service</h2>
            <div className="mt-2">
              {Object.keys(productDetail.supplier)?.map((item, index) => {
                if (serviceValue[item]) {
                  return (
                    <div className="flex font-semibold mb-4" key={index}>
                      <h5 className="w-4/12 text-orange-400">
                        {item.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (str) => str.toUpperCase())}:{' '}
                      </h5>
                      <h5 className="w-8/12">{serviceValue[item]}</h5>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        );
      }
    }
  }, [content.value, isModalOpen, productDetail]);
  useEffect(() => {
    const fetchData = async () => {
      context.setIsLoading(true);
      try {
        const res = await productAPI.getProductDetail(id);
        if (res.data) {
          setProductDetail(res.data);
        }
      } catch (err) {
        console.log(err);
      }
      context.setIsLoading(false);
    };
    fetchData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="attraction-detai-page relative overflow-hidden">
      <div
        className="fixed bg-white shadow-full rounded-xl bottom-8 w-[800px]  left-[50%]  mx-auto h-[60px] z-50 flex justify-around"
        style={{ transform: 'translateX(-50%)' }}
      >
        <div className="flex items-center pl-2">
          <IoCalendarOutline fontSize={28} />
          <div className="ml-2 flex-1 pr-2 border-r">
            <h4>Start Date</h4>
            <p className="font-semibold">7:30 Jan 6, 2024</p>
          </div>
        </div>

        <div className="flex items-center pl-2">
          <IoCalendarOutline fontSize={28} />
          <div className="ml-2 flex-1 pr-2 border-r">
            <h4>Start Date</h4>
            <p className="font-semibold">7:30 Jan 6, 2024</p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <h4>Price</h4>
            <p className="font-semibold text-orange-400"> VND 165.000</p>
          </div>
        </div>
        <div className="flex items-center px-2">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
      <div
        className="h-[520px] overflow-hidden flex bg-bottom bg-cover items-center justify-center relative"
        style={{ background: `url(${AttractionDetail})` }}
      >
        <h1 className="attraction-detail-header">LANDSCAPES</h1>
        <h6 className="attraction-detail-slogan">Discover</h6>
        <div className="attraction-detail-filter">
          <div className="flex justify-between">
            {options.map((option, index) => {
              return (
                <div
                  className={`w-1/3 flex items-center justify-center px-8 py-6 hover:bg-white ${
                    content.value === option.value ? 'bg-white text-orange-400' : ''
                  } ${index < 2 ? 'border-r border-white' : ''}`}
                  key={index}
                  onClick={() => setContent(option)}
                >
                  <div className="flex  items-center font-semibold">
                    {option.icon}
                    <span className="ml-2">{option.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="shadow-2xl px-4 py-2 rounded-b-lg">{renderContent}</div>
    </div>
  );
};

export default AtractionDetailPage;
