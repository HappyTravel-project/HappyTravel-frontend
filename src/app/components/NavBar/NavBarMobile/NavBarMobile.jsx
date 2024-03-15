import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../Logo/Logo';
import SearchComponent from '../../SearchComponent/SearchComponent';

const NavBarMobile = () => {
    return (
        <nav>
            <div className=" border-b-2 border-blue-600 flex flex-col sm:flex-row items-center justify-between mx-4 sm:mx-8 mt-4 pb-4 sm:pb-0 gap-6 sm:gap-8">

                <div className="flex items-center">
                    <Logo />
                </div>
                <div className='flex flex-row gap-3 '>
                    <SearchComponent />

                    <ul className="fixed bottom-0 left-1/2 transform -translate-x-1/2  w-[350px] h-[62px] bg-yellow-100 rounded-[40px] shadow-[inset_0px_2px_2px_#00dfa240 flex items-center justify-center space-x-4 ">
                        <div className="relative w-[285px] h-[40px] top=[11px] ">
                            <li>
                                <Link href="/admin/home">
                                    <Image
                                        src='./Assets/Home-icon.svg'
                                        alt="Home icon"
                                        width={40} height={40}
                                        className="absolute top-0 left-0 Home-icon] "
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/user">
                                    <Image
                                        src='./Assets/Avatar-icon.svg'
                                        alt="Avatar icon"
                                        width={40} height={40}
                                        className="absolute Avatar-icon top-0 left-[245px]"
                                    />


                                </Link>
                            </li>
                        </div>
                    </ul>
                    </div>    
            </div>


        </nav>
    );
};

export default NavBarMobile;
