import React from "react";
// import "../Style/feature.css";

const featureCard = ({ id, imgUrl, title, para, active, handleClick }) => (
    <div
        className={` relative text-white ${
            active === id
                ? "flex-[3.5] xs:flex-[5.5] ss:flex-[7.5] sm:flex-[9.5] md:flex-[13.5] "
                : "flex-[0.5] xs:flex-[2] ss:flex-[3] sm:flex-[4] md:flex-[5]"
        } flex items-center justify-center min-w-[170px] h-[700px]  transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
        onClick={() => handleClick(id)}
    >
        <img
            src={imgUrl}
            alt="image"
            className="absolute w-full h-full object-cover rounded-[24px]  xs:rounded-[16px] "
        />

        {active !== id ? (
            <h3 className="font-bold font-roboto  text-[36px]  xs:rounded-[16px] px-9 xs:px-2 xs:pb-2 ss:pb-2 sm:pb-2  md:text-[44px] sm:text-[36px] ss:text-[28px] xs:text-[20px] absolute w-max  z-[1] bottom-[220px]   xs:bottom-0 ss:bottom-0 sm:bottom-0 md:bottom-0 -left-[183px] xs:left-0 ss:left-0  sm:left-0  md:left-0  rotate-[-90deg] xs:rotate-0 ss:rotate-0 sm:rotate-0 md:rotate-0  origin-[0,0]">
                {title}
            </h3>
        ) : (
            <div className="absolute bottom-0 p-8 xs:p-5 flex justify-start w-full flex-col  backdrop-blur-xl bg-black/30 xs:h-full xs:rounded-[16px] ss:h-full ss:rounded-[24px] sm:h-full sm:rounded-[24px] md:h-full md:rounded-[24px] rounded-b-[24px]">
                <p className="font-normal font-spaceGrotesk text-[24px] xs:text-[18px] ">{para}</p>
                <h2 className="mt-[24px] font-roboto font-bold  text-[36px]  md:text-[44px] sm:text-[36px] ss:text-[28px] xs:text-[20px]">
                    {title}
                </h2>
            </div>
        )}
    </div>
);

export default featureCard;
