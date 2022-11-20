import { Link } from "react-router-dom";
import "./style.css"

export function ClassDash(props) {
  return (
    <Link className='class' to={"/"} >
      <h1>{props.title}</h1>
      <span>{props.profName}</span>
    </Link>
  )
}