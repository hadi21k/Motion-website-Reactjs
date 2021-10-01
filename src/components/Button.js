const Button = ({
  btnClick,
  MenuBurger,
  NavBarBtn,
  HomePage,
  btnText,
  footerBtn,
  PriceBtn,
  SignUpBtn,
}) => {
  return (
    <div>
      <button
        onClick={btnClick}
        className={` transition-all duration-500 font-bold 
        ${
          MenuBurger
            ? "w-32 py-4 bg-red-600 hover:bg-gray-900 text-white rounded-lg "
            : ""
        }
        ${
          HomePage
            ? "md:w-32 w-full py-3 bg-blue-600 hover:bg-red-500 text-white"
            : ""
        }
        ${
          NavBarBtn
            ? "px-8 py-2 hover:bg-white hover:text-gray-900 border-white border"
            : ""
        }
        ${
          footerBtn
            ? "bg-red-600 text-white w-64 p-2  rounded hover:bg-red-600 font-bold hover:text-white "
            : ""
        }
        ${
          PriceBtn
            ? "w-full mt-4 hover:bg-red-600 bg-white text-gray-900 hover:text-white py-4 rounded font-bold"
            : ""
        }
        ${
          SignUpBtn
            ? "bg-gray-900 text-white font-bold hover:bg-red-600 w-40 sm:w-64 py-4  rounded"
            : ""
        }
        `}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
