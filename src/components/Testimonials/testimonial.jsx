import "./testimonial.css"
import { IoMdStar } from "react-icons/io";
import test from "/test.avif"

const testimonial = () => {
  return (
    <div className="main-testimonial" id="feedback">
        <div className="testimonial-info">
            <h4>What our customers are<br />saying us?</h4>
            <p>many customers are happy with our services and<br />
            our agents are always available to help you.</p>
            <div className="ratings">
               <span>7.5k<br/>happy people</span>
               <p>4.6<br/><IoMdStar className="star"/><IoMdStar className="star"/><IoMdStar className="star"/><IoMdStar className="star"/></p>
            </div>
        </div>

        <div className="testimonial-cards">
             <div className="test-card">
                 <div className="card-info">
                    <img src={test} alt="" />
                    <p>KAMANZI Serge <br /> <span>Customer</span></p>
                 </div>
                 <p>im happy with the services provided by this company 
                    and the agents are always available to help me with my property needs and they are very knowledgeable.</p>
             </div>
        </div>
      
    </div>
  )
}

export default testimonial
