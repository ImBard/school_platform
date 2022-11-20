import { Link } from "react-router-dom";
import './style.css';

export function MessageDash(props) {
  return (
    <Link to={"/"} className="messageDash">
      <img className="perfil" src={props.img} alt="Img Perfil" />
      <div className="msgBody">
        <span className="name">{props.name}</span>
        <span className="txt">
          {props.msg}
        </span>
      </div>
      <span className="time">{props.time}</span>
    </Link>
  )
}