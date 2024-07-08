import styled from "./footer.module.css";
import instagram from "../../images/instagram.png";
import telegram from "../../images/telegram.png";
import aparat from "../../images/aparat.svg";
import linkedin from "../../images/linkedin.png";


function Footer() {
  return (
    <div className={styled.container}>
      <img src={instagram}/>
      <img src={telegram}/>
      <img src={aparat}/>
      <img src={linkedin}/>
    </div>
  );
}

export default Footer;
