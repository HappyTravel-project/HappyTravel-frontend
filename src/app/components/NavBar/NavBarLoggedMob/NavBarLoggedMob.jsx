import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../Logo/Logo';
import SearchComponent from '../../SearchComponent/SearchComponent';
 
const NavBarLoggedMob = () => {
    return (
        <nav>
            <div className=" border-b-2 border-blue-600 flex flex-col sm:flex-row items-center justify-between mx-4 sm:mx-8 mt-4 pb-4 sm:pb-0 gap-6 sm:gap-8">

                <div className="flex items-center">
                    <Logo />
                </div>
                <div className='flex flex-row gap-3 '>
                    <SearchComponent />

                    <ul className="fixed bottom-0 left-1/2 transform -translate-x-1/2  w-[350px] h-[62px] bg-yellow-100 rounded-[40px] shadow-[inset_0px_2px_2px_#00dfa240 flex items-center justify-center space-x-4 ">
                        <div className="relative w-[285px] h-[40px] flex flex-row justify-between">
                            <li>

                                <Link href="/home">
                                    <Image
                                        src='./Assets/Home-icon.svg'
                                        alt="Home icon"
                                        width={40} height={40}
                                        className="Home-icon] "
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/login">
                                    <Image
                                        src='./Assets/Create-icon.svg'
                                        alt="Create icon"
                                        width={40} height={40}
                                        className="Create-icon "
                                    />


                                </Link>
                            </li>
                            <li>
                                <Link href="/Logout">
                                    <Image
                                        src='./Assets/Logout-icon.svg'
                                        alt="Logout icon"
                                        width={50} height={40}
                                        className="Logout-icon "
                                    />


                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>


        </nav >

    );
};

export default NavBarLoggedMob;