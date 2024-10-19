import { useState } from "react";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenu } from "react-icons/hi";

const Nav = () => {
    const [icon, setIcon] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const handleFunction = () => {
        setIcon(!icon);
        setOpen(!isOpen);
    }

    return (
        <>
            <div className="h-fit fixed top-0 left-0 right-0 mt-16 z-10 md:hidden">
                <button onClick={handleFunction} className="p-1 rounded-full shadow-md shadow-zinc-200 bg-white">
                    {icon ? <RxCross2 className='text-4xl md:hidden' /> : <HiOutlineMenu className='text-4xl md:hidden' />}
                </button>
            </div>

            <nav className="w-64 h-screen hidden bg-gray-700 text-white fixed left-0 top-0 bottom-0 md:flex flex-col items-center gap-8 py-12 mt-12">
                <Link to={"/"}>Home</Link>
                <Link to={"/add-course"}>Add Course</Link>
                <Link to={"/courses"}>View Course</Link>
                <Link to={"/about"}>About us</Link>
            </nav>

            <nav className={`w-64 h-screen bg-gray-700 text-white fixed top-0 left-0 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col items-center gap-8 py-12 mt-12">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/add-course"}>Add Course</Link>
                    <Link to={"/courses"}>View Course</Link>
                    <Link to={"/about"}>About us</Link>
                </div>
            </nav>
        </>
    );
};

export default Nav;
