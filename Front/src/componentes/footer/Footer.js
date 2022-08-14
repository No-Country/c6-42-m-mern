import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube, faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";



 
class Footer extends React.Component {
  render() {
    return (
    <footer className="bg-primary float-center">
      <a href="#Footer" className="social" ><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
      <a href="#Footer" className="social" ><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
      <a href="#Footer"className="social" ><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
      <a href="#Footer"className="social" ><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
    </footer>
    )
  }
}
    
export default Footer;