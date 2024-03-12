import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBarLogged = () => {
    return (
        <nav>
            <ul className="flex items-center space-x-4">
                <li>
                    <Link href="/home">
                        <Image
                            src='./Assets/Home-icon.svg'
                            alt="Home icon"
                            width={40} height={40} 
                            className="Home-icon "
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/create">
                        <Image
                            src='./Assets/Create-icon.svg'
                            alt="Create icon"
                            width={40} height={40} 
                            className="Create-icon"
                        />


                    </Link>
                </li>
                <li>
                    <Link href="/Logout">
                        <img
                            src='./Assets/Logout-icon.svg'
                            alt="Logout icon"
                            className="Logout-icon w-[40px] h-[40px]"
                        />


                    </Link>
                </li>

            </ul>
        </nav>
    );
};

export default NavBarLogged;
