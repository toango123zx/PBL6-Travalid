import React from 'react';
import contact from '../../assets/contact.jpg';
import { IoCall } from 'react-icons/io5';
import { BsTwitter, BsInstagram, BsGithub, BsFacebook } from 'react-icons/bs';
import { teamInfo } from '../../constant';

const ContactPage = () => {
  return (
    <div className="">
      <div className="flex ">
        <div className="w-1/2">
          {' '}
          <img src={contact} alt="contact" />
        </div>
        <div className="w-1/2 flex items-center">
          <div>
            <h1 className="text-4xl font-semibold text-orange-400">Contact Us</h1>
            <p className="text-xl text-gray-600 tracking-wide mt-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum. ​Ut enim ad minim veniam aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
            <div className="flex mt-4">
              <div className="bg-orange-400 flex items-center justify-center px-4 rounded-full">
                <IoCall fontSize={26} className="text-white" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-semibold">Call Us Anytime</h1>
                <h5 className="text-orange-400 font-semibold text-xl">+84 999 888 111</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="mb-4">
            <div className="lg:w-5/12">
              <h2 className="text-4xl font-bold text-gray-600">Our team</h2>
              <p className="italic text-xl font-medium text-orange-500">Name Team</p>
              <p className="italic text-gray-500">The most (un)perfectly balanced team that you can get!!!</p>
            </div>
          </div>
          <div className="flex justify-around">
            {teamInfo.slice(0, 3).map((member, index) => {
              return (
                <div className="w-1/4 shadow-2xl rounded-md" key={index}>
                  <div className="bg-white  shadow-sm py-4 px-4">
                    <img
                      src={member.avatar}
                      alt={member.username}
                      className="w-[250px] !h-[250px] object-cover object-center rounded-full mb-3 img-thumbnail shadow-sm"
                    />
                    <h5 className="mb-0 text-center">{member.username}</h5>
                    <p className="small text-uppercase text-muted text-center">{member.position}</p>
                    <div className="flex justify-center">
                      <ul className="mt-2 flex p-0">
                        <li className="inline-block ">
                          <BsFacebook fontSize={20} />
                        </li>
                        <li className="inline-block ml-2">
                          <BsGithub fontSize={20} />
                        </li>
                        <li className="inline-block ml-2">
                          <BsInstagram fontSize={20} />
                        </li>
                        <li className="inline-block ml-2">
                          <BsTwitter fontSize={20} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-around mt-10">
            {teamInfo.slice(3, 5).map((member, index) => {
              return (
                <div className="w-1/4 shadow-2xl" key={index}>
                  <div className="bg-white rounded shadow-sm py-4 px-4">
                    <img
                      src={member.avatar}
                      alt={member.username}
                      className="w-[250px] !h-[250px] object-cover object-center rounded-full mb-3 img-thumbnail shadow-sm"
                    />
                    <h5 className="mb-0 text-center">{member.username}</h5>
                    <p className="small text-uppercase text-muted text-center">{member.position}</p>
                    <div className="flex justify-center">
                      <ul className="mt-2 flex p-0">
                        <li className="inline-block ">
                          <BsFacebook fontSize={20} />
                        </li>
                        <li className="inline-block ml-2">
                          <BsGithub fontSize={20} />
                        </li>
                        <li className="inline-block ml-2">
                          <BsInstagram fontSize={20} />
                        </li>
                        <li className="inline-block ml-2">
                          <BsTwitter fontSize={20} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
