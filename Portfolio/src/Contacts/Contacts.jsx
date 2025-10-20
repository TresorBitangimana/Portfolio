import "./Contacts.css";

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiHandshake } from "react-icons/si";


function Contacts(){
    return(
        <div className="contacts" id="contacts">
            <FaLinkedin />
            <SiHandshake />
            <FaInstagram />
            <FaFacebookF />
        </div>           
    );
}

export default Contacts;