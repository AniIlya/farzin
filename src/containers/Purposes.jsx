import React from 'react'
import { useTranslation } from "react-i18next";
import "../index.css"
import klein from "../assets/klein.png"
import img1 from "../assets/im3.png"
import img2 from "../assets/im2.png"
import img3 from "../assets/im1.png"
import { Link } from 'react-router-dom';
import image from "../assets/image1.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import vec from "../assets/Vec.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
const Purposes = () => {
  const { t, i18n } = useTranslation();
     
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="bgpages  py-[7%] md:pt-[13%] pt-[25%] text-center md:text-4xl text-2xl text-white font-semibold">
{t("purposes")}
      </div>
      <div className="relative mb-[10%]">
      <div className=" grid lg:grid-cols-2  gap-3 lg:px-[15%] px-[5%] py-[10%]">
          <div className="">
            <div className="flex gap-3">
              <img src={klein} alt="" />
              <p className='text-black text-lg font-bold tracking-wide'>Farzin Technologies</p>
            </div>
            <p className="text-black text-5xl font-bold tranking-wide">{t("text26")}</p>
          </div>
          <div className="">
           <p className="text-sm text-black leading-relaxed">{t("text27")}</p>
          </div>

</div>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-[15%]">
          <div className="relative">
            <img className='' src={img1} alt="" />
            <div className="absolute top-[70%] bg-white w-[90%] mx-[5%] px-[10%] py-[10%] shadow-[0px 10px 60px 0px #00000012] shadow-2xl">
              <p className='font-bold text-sm text-center'>{t("text28")}</p>
            </div>
          </div>
          <div className="relative">
            <img src={img2} alt="" />
            <div className="absolute top-[70%] bg-white w-[90%] mx-[5%] px-[10%] py-[10%] shadow-[0px 10px 60px 0px #00000012] shadow-2xl">
              <p className='font-bold text-sm text-center'>{t("text29")}</p>
            </div>
          </div>
          <div className="relative">
            <img src={img3} alt="" />
            <div className="absolute top-[70%] bg-white w-[90%] mx-[5%] px-[10%] py-[10%] shadow-[0px 10px 60px 0px #00000012] shadow-2xl">
              <p className='font-bold text-sm text-center'>{t("text30")}</p>
            </div>
          </div>

        </div>
        </div>
        
       <div className="bgpages ">
        <div className="bg-[#1b15259a] text-center py-[6%]">
        <p className="text-center   md:text-2xl text-lg  font-semibold text-[#2BE4AC] ">{t("text31")}</p>
        <p className="lg:text-[60px] text-3xl font-semibold py-[2%] text-center text-white">{t("text32")}</p>
        <Link className="text-white bg-[#6653E8] py-[1%] my-[1%] px-[2%] mt-[1%]" to="/contacts">{t("text33")}</Link>
       </div>
       </div>

<div className="grid lg:grid-cols-2 grid-cols-1  py-[5%] w-[70%] mx-auto gap-7 items-center">
  <div className="">
    <p className="font-semibold text-4xl">{t("text34")}</p>
    <p className="text-[#777181] py-[3%] text-sm">{t("text35")}</p>
  </div>
  <div className="flex items-center">
    <img src={image} alt="" />
    <div className="py-[30%] px-[3%] bg-[#6633F3]"></div>
  </div>
</div>

<div className="sbg py-[5%] grid px-[15%] lg:grid-cols-4 md:grid-cols-2">
<div className="p-[1%] md:border-r md:border-b-0 border-b  text-center border-[#77718169]">
<img className='mx-auto w-[50%]' src={icon1} alt="" />
<p className="text-4xl text-center mt-[-10px] pb-[1%] text-[#2BE4AC]">1+</p>
<p className="font-semibold text-center">{t("text36")}</p>
</div>

<div className="p-[1%] lg:border-r border-b lg:border-b-0  border-[#77718169]">
<img className='mx-auto  w-[50%]' src={icon1} alt="" />
<p className="text-4xl text-center mt-[-10px] pb-[1%] text-[#2BE4AC]">280</p>
<p className="font-semibold text-center">{t("text37")}</p>
</div>

<div className="p-[1%] md:border-r border-b md:border-b-0 border-[#77718169]">
<img className='mx-auto  w-[50%]' src={icon3} alt="" />
<p className="text-4xl text-center mt-[-10px] pb-[1%] text-[#2BE4AC]">89</p>
<p className="font-semibold text-center">{t("text38")}</p>
</div>

<div className="p-[1%]  ">
<img className='mx-auto  w-[50%]' src={icon4} alt="" />
<p className="text-4xl text-center mt-[-10px] pb-[1%] text-[#2BE4AC]">19+</p>
<p className="font-semibold  text-center">{t("text39")}</p>
</div>


</div>

<div className="py-[3%] bg-white"></div>

    </div>
  )
}

export default Purposes