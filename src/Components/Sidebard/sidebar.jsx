import { Books, Calendar, GearSix, House, Info, SignOut } from "phosphor-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./style.css"
export function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="platform logo" className="logo" />
      <div className="upButton">
        <Link className="link" to={'/dashboard'}>
          <House size={25} className="icon" /> Home
        </Link>
        <Link className="link" to={'/dashboard'}>
          <Books size={25} className="icon" />Homework
        </Link>
        <Link className="link" to={'/dashboard'}>
          <Calendar size={25} className="icon" /> Calendar
        </Link>
        <Link className="link" to={'/dashboard'}>
          <GearSix size={25} className="icon" /> Settings
        </Link>
      </div>

      <div className="downButton">
        <Link className="link" to={'/dashboard'}>
          <Info size={32} className="icon" /> Support
        </Link>
        <Link className="link" to={'/dashboard'}>
          <SignOut size={32} className="icon" /> Log Out
        </Link>
      </div>
    </div>
  )
}