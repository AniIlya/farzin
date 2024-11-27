import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../index.css"
import { useTranslation } from "react-i18next"
import img from "../assets/about.png";
import klein from "../assets/klein.png";
import bg from "../assets/bgbg.png"
import img1 from "../assets/about1.png";
import img2 from "../assets/about2.png";
import img3 from "../assets/about3.png";
import ruka from "../assets/ruka.png"
const AboutUs = () => {
  const { t, i18n } = useTranslation();
     
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
       <div className="bgpages py-[7%] md:pt-[13%] pt-[25%] text-center md:text-4xl text-2xl text-white font-semibold">
       {t("about")} {t("us")}
      </div>
      <div className="grid lg:grid-cols-[47%,53%] md:gap-[8%] gap-[5%] px-[10%] py-[5%] lg:pb-[7%] md:pb-[20%] pb-[40%]">
      <div className="relative ">
        <img className='relative z-10' src={img} alt="" />
        <div className="bg-[#6633F3] z-0 py-[40%] w-[25%] absolute top-[38%] left-[80%]"></div>

      </div>
      <div className="">
      <div className="flex gap-3">
              <img src={klein} alt="" />
              <p className='text-black text-sm font-bold tracking-wide'>Farzin Technologies</p>
            </div>
            <p className="font-semibold text-2xl">{t("text43")}</p>
            <p className='text-[11px] py-[3%]'>{t("text44")}</p>
            <p className="text-[11px] text">{t("text45")}</p>
            <p className='text-[11px] '>{t("text46")}</p>
            <p className='text-[11px] '>{t("text47")}</p>
            <p className='text-[11px] pt-[3%]'>{t("text48")}</p>
            <p className='text-[11px] '>{t("text49")}</p>
      </div>
      </div>

      <div className="bgbg py-[10%]">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[3%] md:gap-[10%] gap-[3%] px-[15%] lg:pb-0 md:pb-[6%] pb-[28%] ">
      <div className="relative ">
            <img className='w-[100%]' src={ruka} alt="" />
            <div className="absolute top-[75%] bg-white text-center  w-[90%] mx-[5%] px-[10%]  lg:h-[15vh] h-[12vh]  flex items-center justify-center shadow-[0px 10px 60px 0px #00000012] shadow-2xl">
              <p className='font-semibold md:text-sm text-xs text-center'>{t("text50")}</p>
            </div>
          </div>

          <div className="relative">
            <img className='w-[100%]' src={img1} alt="" />
            <div className="absolute top-[75%] bg-white w-[90%] mx-[5%] px-[10%] md:h-[15vh] h-[12vh]  flex items-center shadow-[0px 10px 60px 0px #00000012] shadow-2xl">
              <p className='font-semibold md:text-sm text-xs text-center'>{t("text51")}</p>
            </div>
          </div>

          <div className="relative">
            <img className='w-[100%]' src={img2} alt="" />
            <div className="absolute top-[75%] bg-white w-[90%] mx-[5%] px-[10%] md:h-[15vh] h-[12vh]   flex items-center justify-center shadow-[0px 10px 60px 0px #00000012] shadow-2xl">
              <p className='font-semibold md:text-sm text-xs text-center'>{t("text52")}</p>
            </div>
          </div>

          <div className="relative">
            <img className='w-[100%]' src={img3} alt="" />
            <div className="absolute top-[75%] bg-white w-[90%] mx-[5%] px-[10%] md:h-[15vh] h-[12vh] flex items-center justify-center shadow-[0px 10px 60px 0px #00000012] shadow-2xl">
              <p className='font-semibold md:text-sm text-xs text-center'>{t("text53")}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs