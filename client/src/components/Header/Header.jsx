import React, { useEffect, useState } from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import SearchBar from '../SearchBar/SearchBar';


export default function Header({ userInfo = null }) {

    const [searchcategory, setSearchCategory] = useState("");

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const handleSearch = () => {};

    const onClearSearch = () => {
        setSearchCategory("");
    };
    


    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 bg-opacity-50">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logo}
                            className="mr-3 h-10 rounded-lg"
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center lg:order-2 gap-1">
                        {/* searchbar */}
                        <SearchBar 
                            value={searchcategory}
                            onChange={({target}) => {
                                setSearchCategory(target.value);
                            }}
                            handleSearch={handleSearch}
                            onClearSearch={onClearSearch}
                        />

                        <Link
                            to="cart"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <AiOutlineShoppingCart style={{ fontSize: '24px'}}/>
                        </Link>
                        <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
                        
                        
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to='/'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                         border-b border-gray-100
                                        hover:bg-gray-50 lg:hover:bg-transparent
                                         lg:border-0 hover:text-orange-700 lg:p-0 mr-2`
                                    }
                                >
                                    Home
                                </NavLink>
                                
                            </li>
                            <li>
                                <NavLink
                                to='about'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                         border-b border-gray-100
                                        hover:bg-gray-50 lg:hover:bg-transparent
                                         lg:border-0 hover:text-orange-700 lg:p-0 mr-2`
                                    }
                                >
                                    About
                                </NavLink>
                                
                            </li>
                            <li>
                                <NavLink
                                to='contact'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                         border-b border-gray-100
                                        hover:bg-gray-50 lg:hover:bg-transparent
                                         lg:border-0 hover:text-orange-700 lg:p-0 mr-2`
                                    }
                                >
                                    ContactUs
                                </NavLink>
                                
                            </li>
                            <li>
                                <NavLink
                                to='github'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200
                                        ${isActive ? "text-orange-700" : "text-gray-700"}
                                         border-b border-gray-100
                                        hover:bg-gray-50 lg:hover:bg-transparent
                                         lg:border-0 hover:text-orange-700 lg:p-0 mr-2`
                                    }
                                >
                                    GitHub
                                </NavLink>
                                
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

