import Button from "../Button";
import "./Section.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const Section = ({
  NavLight,
  title,
  text1,
  text2,
  description,
  btnText,
  imgUrl,
  pathWay,
}) => {
  return (
    <main
      className={`main w-full flex items-center justify-center p-10 text-white px-6 ${
        NavLight ? "bg-white" : "bg-gray-900 "
      }`}
    >
      <div
        className={`container grid grid-cols-1 gap-6 md:grid-cols-2 mx-auto} `}
      >
        <div className="flex flex-col justify-center max-w-3xl space-y-4 xl:px-10 text-section">
          <Fade left>
            <h5 className="font-bold text-red-600">{title}</h5>
          </Fade>
          <Fade left>
            <h1
              className={`text-2xl md:text-6xl font-bold lg:max-w-lg ${
                NavLight ? "text-gray-900" : "text-white"
              }`}
            >
              {text1} <br /> {text2}
            </h1>
          </Fade>
          <Fade left>
            <p
              className={`text-sm font-bold max-w-sm ${
                NavLight ? "text-gray-900" : "text-white"
              }`}
            >
              {description}
            </p>
          </Fade>
          <Link to={pathWay}>
            <Button HomePage={true} btnText={btnText} />
          </Link>
        </div>
        <div className="flex items-center justify-center w-full mt-8 border lg:p-5 image-section">
          <img className="w-full max-w-sm md:max-w-lg animate" src={imgUrl} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Section;
