import React from 'react'
import "../index.css"
import lBack from "../assets/lBack.png"
import rBack from "../assets/rBack.png"
import { t } from 'i18next'
import { useTranslation } from "react-i18next";
import klein from "../assets/klein.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import farzin from "../assets/farzin.png"
const Home = () => {    
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    console.log(language);
  i18n.changeLanguage(language);
};
  return (<div className="w-[100%]">
    <div className='back lg:pt-0 pt-[20%] bg-[#1b1525d6]'>
      
      <div className="  items-end justify-end  grid grid-cols-[60%,40%]  ">
        <div className="grad1 relative flex">
        <img src={rBack} alt="" />
        <p className="absolute text-sm sm:text-2xl md:text-4xl lg:text-6xl md:top-[150px] lg:top-[195px] sm:top-[60px] top-[50px]  left-[72px] font-bold tracking-wide  text-white">{t("text1")}</p>
        </div>
        <div className="grad2 flex items-end justify-end w-[30%] ml-[70%]">
          <img src={lBack} alt="" />
        </div>
         </div>
        </div>
        <div className="relative">
        <div className="bg-[#6633F3] grid lg:grid-cols-[53%,47%] grid-cols-1 gap-10 px-[15%] py-[10%] md:pb-[10%] pb-[20%]">
          <div className="">
            <div className="flex gap-3">
              <img src={klein} alt="" />
              <p className='text-white text-xs font-semibold tracking-wide'>Farzin Technologies</p>
            </div>
            <p className="text-white text-2xl font-semibold tranking-wide">{t("text2")}</p>
          </div>
          <div className="">
           <p className="text-xs text-white">{t("text3")}</p>
          </div>


        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1  md:gap-[5%] gap-[15%] lg:px-[15%] py-[5%] md:pb-[10%] pb-[63%] lg:absolute lg:top-[70%]">
          <div className="relative justify-self-center mt-[-30px] lg:mt-0 sm:justify-self-none">
            <img src={img1} alt="" />
            <div className="absolute top-[70%] bg-white w-[90%] mx-[5%] px-[10%] py-[6%] shadow-[0px 10px 60px 0px #00000012] shadow-2xl">
              <p className='font-bold text-sm text-center'>{t("text4")}</p>
            </div>
          </div>
          <div className="relative justify-self-center sm:justify-self-none">
            <img src={img2} alt="" />
            <div className="absolute top-[70%] bg-white w-[90%] mx-[5%] px-[10%] py-[6%] shadow-[0px 10px 60px 0px #00000012] shadow-2xl">
              <p className='font-bold text-sm text-center'>{t("text5")}</p>
            </div>
          </div>
          <div className="relative justify-self-center  sm:justify-self-none">
            <img src={img3} alt="" />
            <div className="absolute top-[70%] bg-white w-[90%] mx-[5%] px-[10%] py-[10%] shadow-[0px 10px 60px 0px #00000012] shadow-2xl">
              <p className='font-bold text-sm text-center'>{t("text6")}</p>
            </div>
          </div>

        </div>
        </div>

       <div className="grid lg:grid-cols-[45%,55%] grid-cols-1 lg:gap-[94px] gap-[5%] mt-[19%] md:mb-[5%] mb-[30%] mx-[15%]">
        <div className="">
           <img src={img4} alt="" />
        </div>
        <div className="py-[6%]">
          <p className="font-bold text-2xl">{t("text7")}</p>
          <p className="text-2xl text-[#6653E8] py-[5%]">Farzin Technologies</p>
          <p className="text-[#777181] text-sm ">{t("text8")}</p>
        </div>
      
    </div>

    <div className="py-[5%] px-[15%] bg-[#1B1525] pb-[25%] sm:pb-[5%] relative z-1">
       <div className="absolute p-[14%] rounded-full bg-[#ffffff48] top-[-60%] left-[-17%] -z-1">
       </div>
       <div className="absolute p-[16%] rounded-full bg-[#ffffff32] top-[-42%] left-[-17%] -z-1">
</div>
<p className="text-center md:text-[36px] sm:text-2xl text-white font-bold w-[80%] mx-auto">{t("text9")}</p>
<div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[3%] pt-[5%]">
  <div className="bg-white flex items-center justify-center p-[15%] font-semibold text-lg text-center text-[rgba(27, 21, 37, 1)]">{t("text10")}</div>
  <div className="bg-white flex items-center justify-center p-[15%] font-semibold text-lg text-center text-[rgba(27, 21, 37, 1)]">{t("text11")}</div>
  <div className="bg-white flex items-center justify-center p-[15%] font-semibold text-lg text-center text-[rgba(27, 21, 37, 1)]">{t("text12")}</div>
  <div className="bg-white flex items-center justify-center p-[15%] font-semibold text-lg text-center text-[rgba(27, 21, 37, 1)]">{t("text13")}</div>
  
</div>

    </div>

    <div className="bg w-[80%] mx-auto pt-[6%]  ">
<img src={farzin} alt="" />
    </div>
    <div className="w-[70%] mx-auto grid lg:grid-cols-3 gap-[5%] pb-[35%] md:pb-[7%]">
      <div className="">
      <div className="flex gap-[5%]">
        <img src={klein} alt="" />
        <p className=' text-[#6653E8] font-semibold'>{t("text14")}</p>
        
      </div>
<p className="text-[28px] py-[2%] font-bold">
{t("text15")}
        </p></div>
        <div className="">
        <p className="text-[#777181] text-sm ">{t("text16")}</p>
        <p className="text-[#777181] pt-[12%] text-sm ">{t("text17")}</p>
        </div>
      <div className="">
        <div className="">
          <div className="flex justify-between">
          <p className="font-bold text-sm">{t("text18")}</p>
          <p className="text-[#777181]">{} 90%</p>
          </div>
          <div className="w-[100%] bg-[#F7F7F9] rounded-lg">
            <div className={`w-[90%] bg-[#2BE4AC] py-[3%] rounded-lg my-[3%]`}></div>

          </div>

        </div>
        <div className="">
          <div className="flex justify-between">
          <p className="font-bold text-sm">{t("text19")}</p>
          <p className="text-[#777181]">{} 46%</p>
          </div>
          <div className="w-[100%] bg-[#F7F7F9] rounded-lg">
            <div className={`w-[46%] bg-[#2BE4AC] py-[3%] rounded-lg my-[3%]`}></div>

          </div>

        </div>

        <div className="">
          <div className="flex justify-between">
          <p className="font-bold text-sm">{t("text20")}</p>
          <p className="text-[#777181]">{} 60%</p>
          </div>
          <div className="w-[100%] bg-[#F7F7F9] rounded-lg">
            <div className={`w-[60%] bg-[#2BE4AC] py-[3%] rounded-lg my-[3%]`}></div>

          </div>

        </div>
</div>
    </div>


  </div>
  )
}

export default Home