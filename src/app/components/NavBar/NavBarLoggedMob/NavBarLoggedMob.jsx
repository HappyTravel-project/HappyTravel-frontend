import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBarLoggedMob = () => {
    return (
        <nav>
            <ul className="fixed bottom-0 left-1/2 transform -translate-x-1/2  w-[350px] h-[62px] bg-yellow-100 rounded-[40px] shadow-[inset_0px_2px_2px_#00dfa240 flex items-center space-x-2 ml-2 ">

                <div className="w-[50px] h-[40px] top=[11px] left-[33px] ">

                </div>
                <div className=" display flex space-x-16 items-center ">
                    <li>

                        <Link href="/">
                            <Image
                                src='/Assets/Home-icon.svg'
                                alt="Home icon"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <Image
                                src='/Assets/Create-icon.svg'
                                alt="Create icon"
                                width={40}
                                height={40}
                            />


                        </Link>
                    </li>
                    <li>
                        <Link href="/logout">
                            <Image
                                src='/Assets/Logout-icon.svg'
                                alt="Logout icon"
                                width={40}
                                height={40}
                            />


                        </Link>
                    </li>
                </div>
            </ul>

        </nav >
    );
};

export default NavBarLoggedMob;