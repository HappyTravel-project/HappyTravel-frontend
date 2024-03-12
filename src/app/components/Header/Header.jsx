import React from 'react';
import SearchComponent from '../SearchComponent/SearchComponent';
import NavBar from '../NavBar/NavBar';
import NavBarMobile from '../NavBar/NavBarMobile/NavBarMobile';
import NavBarLoggedMob from '../NavBar/NavBarLoggedMob/NavBarLoggedMob';

const Header = () => {
    return (

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">

            <SearchComponent />
            <div className="hidden sm:flex">
                <NavBar />

            </div>

            <div className="lg:hidden flex items-center gap-6 sm:gap-8">
                <NavBarMobile />

            </div>
            <div className="sm:hidden flex items-center gap-6 sm:gap-8">
                <NavBarLoggedMob />
            </div>

        </div>
      
    );
};

export default Header;

