import React, { useState } from "react";
import Button from "../Button";
import { BiWalk } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ NavLight }) => {
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(`${email} is a good mail`);
    console.log("object");
  };
  return (
    <div
      className={` w-full ${NavLight ? "bg-white " : " bg-gray-900"} px-4 py-8 overflow-hidden`}
    >
      <div className="container mx-auto">
        <div className="mb-4 text-center title">
          <h3
            className={`${
              NavLight ? "text-gray-900" : "text-white"
            } font-bold text-xl mb-1`}
          >
            Join our exclusive membership to receive the latest news trends
          </h3>
          <p
            className={`${
              NavLight ? "text-gray-900" : "text-white"
            } font-bold text-sm mb-1`}
          >
            You can unsubscribe at any time
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center py-3 space-y-2 input-feild"
        >
          <input
            className={`w-64 px-2 py-3 font-semibold border-0 rounded ${
              NavLight ? "bg-gray-800 placeholder-white" : "placeholder-black "
            }`}
            type="email"
            onChange={onChange}
            value={email}
            placeholder="Your Email"
          />
          <Button footerBtn={true} btnText="Submit" type="submit" />
        </form>
        <ul className={`grid grid-cols-1 mt-5 md:grid-cols-2 gap-y-10 ${NavLight ? "text-gray-600" : "text-white"}`}>
          <div className="grid grid-cols-2 gap-4 section-1 place-items-center">
            <div>
              <li className="px-4 py-1 text-xl font-bold md:py-2">About Us</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">How it works</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Careers</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Investors</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Terms of Service</li>
            </div>
            <div>
              <li className="px-4 py-1 text-xl font-bold md:py-2">
                Contact Us
              </li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Contact</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Support</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Destination</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Sponsorships</li>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 section-2 place-items-center">
            <div>
              <li className="px-4 py-1 text-xl font-bold md:py-2">Videos</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Submit Videos</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Ambassadors</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Agency</li>
              <li className="px-4 py-1 text-sm font-bold md:py-2">Influencers</li>
            </div>
            <div>
              <li className="px-4 py-1 text-xl font-bold md:py-2">
                Social Media
              </li>
              <a href="https://www.instagram.com/">
                <li className="px-4 py-1 text-sm font-bold md:py-2">Instagram</li>
              </a>
              <a href="https://www.facebook.com/">
                <li className="px-4 py-1 text-sm font-bold md:py-2">Facebook</li>
              </a>
              <a href="https://www.youtube.com/">
                <li className="px-4 py-1 text-sm font-bold md:py-2">Youtube</li>
              </a>
              <a href="https://www.twitter.com/">
                <li className="px-4 py-1 text-sm font-bold md:py-2">Twitter</li>
              </a>
            </div>
          </div>
        </ul>
        <div className="grid mt-5 text-white sm:grid-cols-3 place-items-center xl:px-16 endText">
          <div className="flex items-center py-1 mt-4 space-x-1 text-2xl font-bold text-red-600 title">
            <h3>
              <BiWalk />
            </h3>
            <h3>Motion</h3>
          </div>
          <div className={`font-bold copyright ${NavLight ? "text-gray-900" : "text-white"}`}>
            Motion &copy; {new Date().getFullYear()}
          </div>
          <ul className={`flex items-center py-3 space-x-3 text-2xl text-white md:text-3xl social-icons ${NavLight ? "text-gray-900" : "text-white"}`}>
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/instagram.com">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/linkedin.com">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="/twitter.com">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
