import React, { useState } from 'react';
import { BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { CiBasketball } from 'react-icons/ci';
import './Footer.css';

const Footer = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <footer className="mt-40 py-16 bg-orange-400 text-white">
      <div className="max-w-[1200px] h-[200px] mx-auto flex">
        <div className="flex flex-col justify-between w-3/12 pr-10">
          <div>
            <h6 className="footer-brand">Travalid</h6>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
            </p>
          </div>
          <div>
            <h6>Social media</h6>
            <div className="flex mt-2">
              <AiOutlineInstagram fontSize={16} className="mr-1" />
              <BsFacebook fontSize={16} className="mr-1" />
              <BsGithub fontSize={16} className="mr-1" />
              <BsTwitter fontSize={16} className="mr-1" />
              <CiBasketball fontSize={16} />
            </div>
          </div>
        </div>
        <div className="w-2/12">
          <h6 className="footer-title">Links</h6>
          <ul className="footer-item">
            <li>Discover</li>
            <li>Special Deals</li>
            <li>Services</li>
            <li>Community</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="w-2/12">
          <h6 className="footer-title">Services</h6>
          <ul className="footer-item">
            <li>Blog & Articles</li>
            <li>Term and Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="w-2/12">
          <h6 className="footer-title">Contact</h6>
          <ul className="footer-item">
            <li>Address: 54 Nguyen Luong Bang Lien Chieu, Đa Nang</li>
            <li>Phone: 123 456 7890</li>
            <li>Email: travalid@gmail.com</li>
          </ul>
        </div>
        <div className="w-3/12 px-2">
          <h6 className="footer-title">Join Our Newsletter</h6>
          <div className="flex mt-3">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Your email address"
              className="p-4 text-black"
            />
            <button className="h-[56px] px-4 bg-black">Subscribe</button>
          </div>

          <p className="text-gray-200 mt-4">* Will send you weekly updates for your better tour packages.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
