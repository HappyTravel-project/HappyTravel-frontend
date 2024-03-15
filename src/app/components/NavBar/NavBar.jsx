import Link from 'next/link';
import Image from 'next/image';
import Logo from '../Logo/Logo';
import SearchComponent from '../SearchComponent/SearchComponent';

const NavBar = () => {

    

    return (
        <nav>
            <div className=" border-b-2 border-blue-600 flex flex-col sm:flex-row items-center justify-between mx-4 sm:mx-8 mt-4 pb-4 sm:pb-0 gap-6 sm:gap-8">

                <div className="flex items-center">
                    <Logo />
                </div>
                <div className='flex flex-row gap-3 '>
                    <SearchComponent />
                    <ul className="flex items-center space-x-4">
                        <li>
                            <Link href="/">
                                <Image
                                    src='/Assets/Home-icon.svg'
                                    alt="Home icon"
                                    width={40} height={40}
                                    className="Home-icon"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href="/register">
                                <Image
                                    src='/Assets/Avatar-icon.svg'
                                    alt="Avatar icon"
                                    width={40} height={40}
                                    className="Avatar-icon"
                                />


                            </Link>
                        </li>


                    </ul>
                </div >
            </div >
        </nav >


    );
};

export default NavBar;
