import React from "react";
import Section from "./Section";
import Image1 from "../images/svg-1.svg";
import Image2 from "../images/svg-2.svg";
import Image3 from "../images/svg-3.svg";
import Image4 from "../images/svg-4.svg";
import Image5 from "../images/svg-5.svg";
import Image6 from "../images/svg-6.svg";
import Image7 from "../images/svg-8.svg";
import Image8 from "../images/svg-7.svg";
const Home = ({ NavLight }) => {
  return (
    <div>
      <Section
        NavLight={NavLight}
        title="Exclusive access"
        text1="Unlimited Transaction"
        text2="with zero fees"
        description="Get access to our exclusive diamond card that allows you to send unlimited transactions without getting charged any fees"
        btnText="Get Started"
        imgUrl={NavLight ? Image2 : Image1}
        pathWay="/signup"
      />
      <Section
        NavLight={NavLight}
        title="100% SECURE"
        text1="Stay protected"
        text2="24/7 anywhere anytime"
        description="We have coved no matter where you are located. Over 140 locations worldwide to ensure you have access anytime "
        btnText="Learn More"
        imgUrl={NavLight ? Image4 : Image5}
        pathWay="/services"
      />
      <Section
        NavLight={NavLight}
        title="EASY SETUP"
        text1="Super fast and simple"
        text2="onboarding process"
        description="Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go"
        imgUrl={NavLight ? Image6 : Image7}
        btnText="Start Now"
        pathWay="/products"
      />
      <Section
        NavLight={NavLight}
        title="DATA ANALYTICS"
        text1="Every transaction is stored"
        text2="on our secure cloud database"
        description="Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime"
        imgUrl={NavLight ? Image3 : Image8}
        btnText="Sign Up Now "
        pathWay="/signup"
      />
    </div>
  );
};

export default Home;
