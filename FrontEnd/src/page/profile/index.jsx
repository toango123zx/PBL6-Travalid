import React, { useContext, useEffect } from 'react';
import { APP_CONTEXT } from '../../App';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const data = {
  username: 'loremtravel123',
  name: 'Lorem Comp.',
  email: 'loremtravel123@gmail.com',
  phoneNumber: '0934*****82',
  address: 'K325 Hung Vuong St., Da Nang City',
  taxIdNumber: '0118003713',
};
const ProfilePage = () => {
  const context = useContext(APP_CONTEXT);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context.user) {
      navigate('/auth');
      toast.error('Please Login!!!');
    }
  }, [context.user, navigate]);
  return (
    <div className="flex justify-between">
      <div className="w-7/12 ">
        {Object.keys(data).map((item, index) => {
          return (
            <div className="flex font-semibold mb-4" key={index}>
              <h5 className="w-4/12">
                {item.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (str) => str.toUpperCase())}:{' '}
              </h5>
              <h5 className="w-8/12">{data[item]}</h5>
            </div>
          );
        })}
        <div className="flex justify-center items-center mt-6">
          {context.user?.status && (
            <div
              className={`${
                context.user?.status === 'active' ? 'bg-green-400 ' : 'bg-red-400'
              } text-white font-semibold px-6 py-2 rounded-md text-xl`}
            >
              {context.user.status}
            </div>
          )}
        </div>
      </div>
      <div className="w-4/12  py-6 px-4 border rounded-xl mr-4">
        <div className="flex justify-center items-center">
          <img
            className=" w-4/12 rounded-full"
            src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
            alt="avatar"
          />
        </div>
        <div className="mt-6 font-semibold">
          {context.user && <h3 className="text-center">{context.user.username}</h3>}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
