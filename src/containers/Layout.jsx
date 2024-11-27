import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from "../assets/Logo.png"
import vector from "../assets/Vector.png"
import vector2 from "../assets/Vector2.png"
import Select from 'react-select';
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom';
import logo2 from "../assets/logo2.png";
import btn from "../assets/btn1.png"
import "../index.css"
import i1 from "../assets/i1.png"
import i2 from "../assets/i2.png"
import i3 from "../assets/i3.png"
import i4 from "../assets/i4.png"
import { useState } from 'react';
const Layout = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const changeLanguage = (language) => {
        console.log(language);
      i18n.changeLanguage(language);
    };
    const [menuVisible, setMenuVisible] = useState(false);
    const isHome = location.pathname === '/';
    const containerClass = isHome ? 'with-class' : '';
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  return (
    <div className='relative w-[100%]'>
      <div className="fixed w-[100%] z-20">

        <nav className={` flex justify-between px-[8%] py-2 items-center shadow-lg border-b-2 border-b-[#FFFFFF1A] ${window.location.pathname === '/' ?" bg-[#1b1525d6]":"bg-[#fff]"}`}>
       <div className="flex lg:w-[80%] w-[50%] gap-[5%] items-center">
  <div className="">
  <Link className={`text-white  leading-8 ${window.location.pathname === '/' ? '' : 'hidden'}`} to="/"><img className='  w-[80%]' src={logo} alt="" /></Link>
    <Link className={`text-white  leading-8 ${window.location.pathname === '/' ? 'hidden' : ''}`} to="/"><img className='w-[80%]' src={logo2} alt="" /></Link>
  
  </div>
   <ul className={`lg:flex lg:justify-between lg:w-[50%] py-[1%]  items-center m-0 ${containerClass}`}>
  <li className='hidden lg:block'  ><Link className={`text-[14px] text-black leading-8 ${window.location.pathname === '/' ? 'active' : ''}`} to="/">{t("home")}</Link></li>
  <li className='hidden lg:block'> <Link className={` text-[14px] text-black leading-8 ${window.location.pathname === '/purposes' ? 'active' : ''}`} to="/purposes">{t("purposes")}</Link></li>
  <li className='hidden lg:block'><Link className={`  text-[14px] text-black leading-8 ${window.location.pathname === '/portfolio' ? 'active' : ''}`} to="/portfolio">{t("portfolio")}</Link></li>
  <li className='hidden lg:block'><Link className={`  text-[14px] text-black leading-8 w-[10%] ${window.location.pathname === '/aboutus' ? 'active' : ''}`} to="/aboutus">{t("about")}<span className='text-[#ffffff00]'>_</span>{t("us")}</Link></li>
  <li className='hidden lg:block'> <Link className={` text-[14px] text-black leading-8 ${window.location.pathname === '/contacts' ? 'active' : ''}`} to="/contacts">{t("contacts")}</Link></li>
                
            </ul>
            </div>
      <div className="flex items-center gap-3 lg:w-[20%] justify-end">
                <div className={`${window.location.pathname === '/' ? '' : 'hidden'}`}><img className='h-auto' src={vector} alt="" />
                </div>
                <div className={`${window.location.pathname === '/' ? 'hidden' : ''}`}><img className='h-auto' src={vector2} alt="" />
                </div>
                
                <div className="">
                <select className={`bg-transparent border-0 text-black outline-none ${containerClass}`} onChange={e=>{changeLanguage(e.target.value)}} value={i18n.language}>
             <option className='text-black' value="ru">RU</option> 
              <option className='text-black' value="en">EN</option>

      </select>
       </div>

       </div>
   <div className="lg:hidden block ">
    <button onClick={toggleMenu}> <svg xmlns="http://www.w3.org/2000/svg" className='' width="42" height="24" viewBox="0 0 42 24" fill="none">
<rect y="6" width="20" height="2" rx="3" fill={`${window.location.pathname === '/' ? '#ffffff' : '#000000'}`} />
<rect y="11" width="20" height="2" rx="2" fill={`${window.location.pathname === '/' ? '#ffffff' : '#000000'}`} />
<rect y="16" width="20" height="2" rx="2" fill={`${window.location.pathname === '/' ? '#ffffff' : '#000000'}`} />
</svg>
</button>


</div>

        </nav>
        {
  menuVisible && <div className="lg:hidden block bg-[#fff]">
   <ul className=''>
  <li className='border-b text-lg border-[#eee] pb-[2%] px-[10%] text-center '  ><Link className={`text-[10px] text-black leading-8   `} to="/">{t("home")}</Link></li>
  <li className='border-b text-lg border-[#eee] pb-[2%] px-[10%] text-center '> <Link className={` text-[10px] text-black leading-8   `} to="/purposes">{t("purposes")}</Link></li>
  <li className='border-b text-lg border-[#eee] pb-[2%] px-[10%] text-center '><Link className={`  text-[10px] text-black leading-8   `} to="/portfolio">{t("portfolio")}</Link></li>
  <li className='border-b text-lg border-[#eee] pb-[2%] px-[10%] text-center '><Link className={`  text-[10px] text-black leading-8   `} to="/aboutus">{t("about")}<span className='text-[#ffffff00]'>_</span>{t("us")}</Link></li>
  <li className='border-b text-lg border-[#eee] pb-[2%] px-[10%] text-center '> <Link className={` text-[10px] text-black leading-8   `} to="/contacts">{t("contacts")}</Link></li>
             </ul>
    </div>
    }
    </div>
        <Outlet />
        <footer className='bg-[#1B1525] w-[100%] relative py-[1%]'>
            <div className="px-[15%] py-[9%] grid md:grid-cols-4  grid-cols-2 md:py-[3%] gap-[10%]">
                <div className="">
                <Link className={`text-white text-[16px] leading-8`} to="/"><img src={logo} alt="" /></Link>
                    <p className="text-[#777181] text-xs py-[8%] ">{t("text21")}</p>
                    <div className="bg-white p-[3%] flex gap-6">
                        <input className={` border-0 w-[70%]   outline-none`} placeholder={t("text22")} ></input>
                        <img src={btn} alt="" />

                    </div>
                    
                </div>

                <div className="">
                    <p className="text-white text-lg font-semibold">{t("text23")}</p>

                    <ul className={``}>
   
  <li>
    <Link className={`foot text-[12px] text-[#777181] py-1 leading-8 `} to="/">{t("home")}</Link>
  </li>
  <li>
    <Link className={`foot text-[12px] text-[#777181] py-1leading-8 `} to="/purposes">{t("purposes")}</Link>
  </li>
  <li>
    <Link className={`foot text-[12px] text-[#777181] py-1 leading-8 `} to="/portfolio">{t("portfolio")}</Link>
  </li>
  <li>
    <Link className={`foot text-[12px] text-[#777181] py-1 leading-8 `} to="/aboutus">{t("about")}<span className='text-[#eee0]'>_</span>{t("us")}</Link>
  </li>
  <li>
    <Link className={`foot text-[12px] text-[#777181] py-1 leading-8  `} to="/contacts">{t("contacts")}</Link>
  </li>
                
            </ul>
                </div>
<div className="">
                    <p className="text-white text-lg font-semibold">{t("text24")}</p>
                    <p className="text-[12px] text-[#777181] py-1">+992 93 990 3838</p>
                    <p className="text-[12px] text-[#777181] py-1">info@farzin.tj</p>
</div>
<div className="flex gap-[6%] ">
<div className=""><img src={i1} alt="" /></div>
<div className=""><img src={i2} alt="" /></div>
<div className=""><img src={i3} alt="" /></div>
<div className=""><img src={i4} alt="" /></div>
</div>
            </div>
            <div className="bg-[#100D17] py-[1%] text-[#777181] text-center">{t("text25")}</div>
        </footer>
    </div>
  )
  }
export default Layout