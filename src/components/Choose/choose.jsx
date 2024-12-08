import "./choose.css"
import { FaHouseChimney } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { AiFillPropertySafety } from "react-icons/ai";

const choose = () => {
  return (
    <div className="main-choose">
        <h4>Why Choose Us</h4>
        <p>choosing us is the best thing you can do.</p>
        <div className="choose-info">
           <div className="whyUs">
             <FaHouseChimney />
             <h6>Find your future Home</h6>
             <p>we help you find your dream home with ease and comfort by providing properties.</p>
           </div>

           <div className="whyUs">
             <MdHomeRepairService />
             <h6>Experienced agents</h6>
             <p>we deal with all your real estate needs with our experienced agents.</p>
           </div>
         
           <div className="whyUs">
             <FaMoneyCheckDollar />
             <h6>Buy or Rent Home</h6>
             <p>you can buy or rent your dream home with us with ease and comfort.</p>
           </div>

           <div className="whyUs">
              <AiFillPropertySafety />
             <h6>List your own property</h6>
             <p>make your property available for rent or sale with us and get it listed.</p>
           </div>

        </div>
    </div>
  )
}

export default choose