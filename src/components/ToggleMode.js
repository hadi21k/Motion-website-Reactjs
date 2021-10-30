import { BiToggleLeft, BiToggleRight } from "react-icons/bi";

const ToggleMode = ({ toggle, toggleMode }) => {
  return (
    <div>
      <div
        onClick={toggle}
        className={`fixed transition-all duration-700 z-50 w-16 h-16 text-4xl rounded-full font-bold animate-bounce bottom-10 right-8 `}
      >
        <span
          className={`absolute w-full h-full transition duration-500 border-2 rounded-full ${
            toggleMode ? "border-black" : "border-white"
          }`}
        ></span>
        <div
          className={`absolute flex items-center justify-center  w-full h-full rounded-full ${
            toggleMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
        >
          {toggleMode ? <BiToggleLeft /> : <BiToggleRight />}
        </div>
      </div>
    </div>
  );
};

export default ToggleMode;
