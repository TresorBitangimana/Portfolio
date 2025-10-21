import "./Contacts.css";

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiHandshake } from "react-icons/si";


function Contacts(){
    return(
        <div className="contacts" id="contacts">
            <div className="contact"><FaLinkedin /></div>
            <div className="contact"><SiHandshake /></div>
            <div className="contact"><FaInstagram /></div>
            <div className="contact"><FaFacebookF /></div>

        </div>           
    );
}

export default Contacts;