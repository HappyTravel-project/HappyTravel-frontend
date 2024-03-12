import Image from 'next/image';
import React from 'react';

const LogoMobile = () => {
    return (
        <div className='p-7'>
            <Image
                src='./Assets/Logo.svg'
                alt="Logo"
                width={30} height={60} 
                
            />

        </div>
    );
};

export default LogoMobile;