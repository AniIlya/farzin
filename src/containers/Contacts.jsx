import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../index.css"
import contact from "../assets/contact.png"
import { useTranslation } from "react-i18next";
import MapComponent from '../companents/MapComponent';
const Contacts= () => {
  const { t, i18n } = useTranslation();
     
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const address = 'Душанбе';
  return (
    <div>
        <div className="bgpages  py-[7%] md:pt-[13%] pt-[25%] text-center md:text-4xl text-2xl text-white font-semibold">
        {t("contacts")}
      </div>
      <div className="grid lg:grid-cols-2 lg:py-[5%] md:py-[8%] pb-[10%] pt-[6%] gap-[5%] px-[10%]">
        <div className="">
          <img src={contact} alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <p className=" text-center lg:text-start text-4xl font-semibold">{t("text54")}</p>
          <p className=' text-center lg:text-start py-[2%] text-[#777181] text-lg  '>{t("text55")}</p>
          <p className=' text-center lg:text-start pt-[2%] text-xl    font-semibold'>{t("text56")}</p>
          <p className=' text-center lg:text-start py-[1%] text-[#777181] text-lg    font-'>+992939903838</p>
          <p className=' text-center lg:text-start pt-[2%] text-xl    font-semibold'>{t("text57")}</p>
          <p className=' text-center lg:text-start py-[1%] text-[#777181] text-lg   font-'>info@farzin.tj</p>
          <p className=' text-center lg:text-start pt-[2%] text-xl    font-semibold'>{t("text58")}</p>
         <p className=' text-center  lg:text-start text-[#777181] text-lg  font-'>{t("text59")}</p>
          </div>

          
      </div>
      <div className="bgbg md:px-[25%] px-[15%] py-[5%]">
            <p className="font-bold text-4xl text-center">{t("text60")}</p>
            <div className="grid md:grid-cols-2 py-[5%] gap-[5%]">
              <input className='p-[3%] mt-[2%] md:mt-0    ' placeholder='Имя' type="text" />
              <input className='p-[3%] mt-[2%] md:mt-0  ' placeholder='Адрес эл. почты' type="text" />
              <input className='p-[3%] mt-[2%]' placeholder='Номер телефона' type="text" />
              <input className='p-[3%] mt-[2%] mb-[10%] md:mb-0' placeholder='Тема' type="text" />
            </div>
              <textarea className='w-[100%] p-[3%]' name="" id="" cols="30" rows="6" placeholder='Сообщение'></textarea>
              <div className="flex justify-center"><button className='px-[5%] py-[2%]  text-white my-[2%] bg-[#6653E8] hover:bg-[#5f4be6]'>{t("text61")}</button></div>
          </div>

          <div className="">
            <MapComponent address={address} />
          </div>
          <div className="py-[2%]"></div>
    </div>
  )
}

export default Contacts