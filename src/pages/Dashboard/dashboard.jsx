import { useState } from 'react';
import { Sidebar } from "../../Components/Sidebard/sidebar";
import { MessageDash } from '../../Components/chatMessageDash/messageDash';
import { Link } from 'react-router-dom';
import { ChatDots } from 'phosphor-react';
import data from "../../../msgDash.json";
import dataTask from "../../../taskDash.json";
import dataProf from "../../../profDash.json";
import './style.css'
import Calendar from "../../assets/calendar.jpg"
import { TaskDash } from '../../Components/taskDash/taskDash';
import { ClassDash } from '../../Components/classDash/classDash';

export function Dashboard() {

  const [users, setUsers] = useState(data.users)
  const [task, setTask] = useState(dataTask.tasks)
  const [profs, setProfs] = useState(dataProf.profs)



  return (
    <div className="body">
      <Sidebar />
      <div className="main">
        <div className='classes'>
            <h1 className='title'>My Classes</h1>
          <div className="listClass">
            {profs.map(prof => {
              return (
                <ClassDash
                  title={prof.title}
                  profName={prof.profName}
                />
              )
            })}
          </div>
        </div>

        <div className='calendar'>
          <img src={Calendar} alt="teste" />
        </div>

        <div className='homework'>
          <h1 className='title'>Homework</h1>
          <div className='tasks'>
            {task.map(task => {
              return (
                <TaskDash
                  deadline={task.deadline}
                  title={task.title}
                  pts={task.pts}
                />
              )
            })}
          </div>
        </div>

        <div className='chat'>
          <div className="card">
            <header className="topCard">
              <h1>Messages</h1>
              <button className="newMessage">
                <ChatDots size={32} />
              </button>
            </header>

            {users.map(user => {
              return (
                <MessageDash
                  name={user.name}
                  time={user.time}
                  img={user.img}
                  msg={user.msg}
                />
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}