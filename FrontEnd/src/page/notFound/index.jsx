import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-[400px] flex items-center justify-center text-zinc-500">
      <div>
        <div className="flex justify-center item">
          <FaRegSadTear fontSize={60} />
        </div>
        <div className="text-center text-xl mt-10 font-semibold">
          <h4>The Page you are looking for doesn't exist or an other error occurred.</h4>
          <h4>
            <span onClick={handleBack} className="text-blue-400 hover:text-blue-600 hover:cursor-pointer">
              Go Back
            </span>
            , or head over to to home page to choose a new direction.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
