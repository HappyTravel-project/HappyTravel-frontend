import Image from "next/image";
import React from "react";

const NextButton = () => {
  return (
    <div className="w-[60px] h-[40px] bg-text-color rounded-[20px] flex items-center justify-center">
      <button className="w-[22px] h-[23px] flex items-center">
        <Image width={14} height={23} className="rotate-[-180.00deg]" alt="Next page" src="/Assets/Vector 3.svg" />
        <Image width={14} height={23} className="rotate-[-180.00deg]" alt="Next page" src="/Assets/Vector 4.svg" />
      </button>
    </div>
  );
};

export default NextButton;
