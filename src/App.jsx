
import "./App.css"
import {Routes,Route} from "react-router-dom" 
import Home from "./containers/Home";
import Portfolio from "./containers/Portfolio";
import NoPage from "./containers/NoPage";
import Purposes from "./containers/Purposes";
import Layout from "./containers/Layout";
import AboutUs from "./containers/AboutUs"
import Contacts from "./containers/Contacts"

function App() {
  return (
    <div className=" mx-auto w-[100%]">
    <Routes>
    <Route path="/" element={<Layout/>}>
     <Route index element={<Home/>}/>
      <Route path="purposes"   element={<Purposes/>}/>
      <Route path="portfolio" element={<Portfolio/>} />
      <Route path="aboutus" element={<AboutUs/>} />
      <Route path="contacts" element={<Contacts/>} />
      <Route path="*" element={<NoPage/>} />
  </Route>
    </Routes>
    </div>
  );
}

export default App;
