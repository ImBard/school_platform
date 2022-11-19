import './style.css'
import { Sidebar } from "../../Components/Sidebard/sidebar";
import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <div className="body">
      <Sidebar />
      <div className="main">
        <div className='class'>
          <h1 className='title'>My Classes</h1>
          <Link className='classButton' to={"/"} >
            <h1>Logic and Algorithm</h1>
            <span>Fernando Masanori</span>
          </Link>
          <Link className='classButton' to={"/"} >
            <h1>Discrete Math</h1>
            <span>Reinaldo Arakaki</span>
          </Link>
          <Link className='classButton' to={"/"} >
            <h1>Hardware architecture and organization</h1>
            <span>Antonio Egydio</span>
          </Link>
        </div>

        <div className='calendar'>2</div>

        <div className='homework'>
          <h1 className='title'>Homework</h1>
          <div className='task'>
            <div>
              <h3>Processor structure article</h3>
              <span>Delivery until: 06/12/2022 pts: 0.5</span>
            </div>
            <button>Select</button>
          </div>
        </div>

        <div className='teacher'></div>
      </div>
    </div>
  )
}