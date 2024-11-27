import React from 'react'
import "../index.css"
import img from "../assets/komp.png"
import { useTranslation } from "react-i18next";
const Portfolio = () => {
  const { t, i18n } = useTranslation();
     
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
 
  return (
    <div>
      <div className="bgpages  py-[7%] md:pt-[13%] pt-[25%] text-center md:text-4xl text-2xl text-white font-semibold">
      {t("portfolio")}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-[5%] gap-[2%] px-[15%]  py-[5%] lg:pb-[7%] md:pb-[20%] pb-[65%]">
    

      <div className="shadow-md">
        <img src={img} alt="" />
        <div className="p-[12%] text-center">
         <p className="font-bold text-lg py-[4%]">Dushanbe-Travel</p>
         <p className="text-[#777181] text-sm font-bold"> {t("text40")} </p>
<p className='text-[#777181] text-sm py-[2%]'>{t("text41")}</p>
<button className='py-[5%] px-[8%] my-[4%] text-sm text-[#9782A2] bg-[#F7F7F9] hover:bg-[#c1c1c29c]'>{t("text42")}</button>
        </div>
      </div>
      <div className="shadow-md">
        <img src={img} alt="" />
        <div className="p-[12%] text-center">
         <p className="font-bold text-lg py-[4%]">Dushanbe-Travel</p>
         <p className="text-[#777181] text-sm font-bold"> {t("text40")} </p>
<p className='text-[#777181] text-sm py-[2%]'>{t("text41")}</p>
<button className='py-[5%] px-[8%] my-[4%] text-sm text-[#9782A2] bg-[#F7F7F9] hover:bg-[#c1c1c29c]'>{t("text42")}</button>
        </div>
      </div>

      <div className="shadow-md">
        <img src={img} alt="" />
        <div className="p-[12%] text-center">
         <p className="font-bold text-lg py-[4%]">Dushanbe-Travel</p>
         <p className="text-[#777181] text-sm font-bold"> {t("text40")} </p>
<p className='text-[#777181] text-sm py-[2%]'>{t("text41")}</p>
<button className='py-[5%] px-[8%] my-[4%] text-sm text-[#9782A2] bg-[#F7F7F9] hover:bg-[#c1c1c29c]'>{t("text42")}</button>
        </div>
      </div>

      <div className="shadow-md">
        <img src={img} alt="" />
        <div className="p-[12%] text-center">
         <p className="font-bold text-lg py-[4%]">Dushanbe-Travel</p>
         <p className="text-[#777181] text-sm font-bold"> {t("text40")} </p>
<p className='text-[#777181] text-sm py-[2%]'>{t("text41")}</p>
<button className='py-[5%] px-[8%] my-[4%] text-sm text-[#9782A2] bg-[#F7F7F9] hover:bg-[#c1c1c29c]'>{t("text42")}</button>
        </div>
      </div>

      <div className="shadow-md">
        <img src={img} alt="" />
        <div className="p-[12%] text-center">
         <p className="font-bold text-lg py-[4%]">Dushanbe-Travel</p>
         <p className="text-[#777181] text-sm font-bold"> {t("text40")} </p>
<p className='text-[#777181] text-sm py-[2%]'>{t("text41")}</p>
<button className='py-[5%] px-[8%] my-[4%] text-sm text-[#9782A2] bg-[#F7F7F9] hover:bg-[#c1c1c29c]'>{t("text42")}</button>
        </div>
      </div>

      <div className="shadow-md">
        <img src={img} alt="" />
        <div className="p-[12%] text-center">
         <p className="font-bold text-lg py-[4%]">Dushanbe-Travel</p>
         <p className="text-[#777181] text-sm font-bold"> {t("text40")} </p>
<p className='text-[#777181] text-sm py-[2%]'>{t("text41")}</p>
<button className='py-[5%] px-[8%] my-[4%] text-sm text-[#9782A2] bg-[#F7F7F9] hover:bg-[#c1c1c29c]'>{t("text42")}</button>
        </div>
      </div>




      
      
    
      </div>
    </div>
  )
}

export default Portfolio