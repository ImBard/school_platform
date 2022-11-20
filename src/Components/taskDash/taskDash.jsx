import "./style.css";

export function TaskDash(props) {
  return (
    <div className='task'>
      <div>
        <h3>{props.title}</h3>
        <span>Delivery until: {props.deadline} pts: {props.pts}</span>
      </div>
      <button>Select</button>
    </div>
  )
}