import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav class="bg-indigo-200 shadow-lg shadow-indigo-400/50">
      <div class="min-h-5 flex md:justify-around justify-between">
        <div class="logo">
          <img
            class="h-[60px] w-32 py-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30jnqFAw91SfBjXpCuqs7J5H9clJYtAHg-HxR_DT5&s"
            alt="not found"
          />
        </div>
        <div class="md:w-96 w-32 md:block">
        <ul className={`md:flex md:justify-around md:py-4 font-semibold text-xl md:text-base ${open ? "pt-20" : "hidden"}`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Product</li>
            <li>Contact</li>
          </ul>
        </div>
        <div class="md:block hidden relative">
          <input
            type="text"
            class="h-8  pl-8 pr-2 py-1 mt-4 shadow-md order-gray-100 bg-slate-100 rounded w-96"
          />
          <IoSearch class="absolute top-8  transform -translate-y-1/2 h-4 w-5 text-gray-500" />
        </div>

        <div class="md:block hidden">
          <div class="mt-2 flex justify-around w-52 ">
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-10 px-4 border border-gray-400 rounded shadow">
              Login
            </button>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-10 px-4 border border-gray-400 rounded shadow">
              Signup
            </button>
          </div>
        </div>

        <div className="md:hidden block">
          {open ? (
            <IoCloseSharp className="h-9 w-7 mt-3 cursor-pointer" onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu className="h-9 w-7 mt-3 cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
