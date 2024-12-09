import "./contact.css"
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import logo from "/logo.png"

const contact = () => {
  return (
    <div className="main-contact" id="contact">
       <div className="contact-socials">
          <div><img src={logo} alt="" /></div>
          <div>Follow Us On&nbsp; <IoLogoLinkedin />&nbsp;&nbsp;<AiFillInstagram />&nbsp;&nbsp;<FaGithub /></div>
       </div>

       <div className="contact-info">
            <div className="cont">
                <h6>Discover</h6>
                <p>Gacuriro</p>
                <p>Nyamata</p>
                <p>Kicukiro</p>
                <p>Gisozi</p>
                <p>Remera</p>
            </div>
            <div className="cont">
                <h6>Quick links</h6>
                <p>Home</p>
                <p>About</p>
                <p>Listings</p>
                <p>Testimonials</p>
                <p>Find places</p>
                <p>Contact</p>
            </div>
            <div className="cont">
                <h6>Contact Us</h6>
                <p>estate.rw@gmail.com</p>
                <p>+250788345487</p>
            </div>
            <div className="cont">
                <h6>Our Address</h6>
                <p>Gisozi,Kigali</p>
                <p>gatuna road KkSt 3 block 1 rwanda</p>
            </div>
       </div>
    </div>
  )
}

export default contact
