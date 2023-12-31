import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiBriefcase, TiGroupOutline } from "react-icons/ti";
import { BiBookmark, BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#members">
        <TiBriefcase className="icon" />
      </a>
      <a href="#contact">
        <BiBookmark className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
