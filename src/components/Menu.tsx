import down from '../assets/images/icon-arrow-down.svg'
import todo from '../assets/images/icon-todo.svg'
import calender from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planing from '../assets/images/icon-planning.svg'
import './Menu.css'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Menu() {

    const [isActive, setActive] = useState<boolean>(false);
    const [isActiveB, setActiveB] = useState<boolean>(false);

    const handleToggle = () => {
        setActive(!isActive);
        setActiveB(false)
    };
    const handleToggleB = () => {
        setActiveB(!isActiveB);
        setActive(false)
    };

    return (
        <>
            <nav className='menudesk'>
                <h2 className='snap'>snap</h2>
                <ul>
                    <li className='lifeatures'>
                        <a href="#" onClick={handleToggle}>
                            Features
                            <img id='features' src={down} alt="seta down"
                                className={isActive ? "setadown" : "setaup"}
                            />
                        </a>
                        <div id='hide1' className={isActive ? "show" : "none"} >
                            <a href="#"> <img src={todo} alt="todo list" />  TodoList</a>
                            <a href="#"> <img src={calender} alt="todo list" />  Calender</a>
                            <a href="#"> <img src={reminders} alt="todo list" />  Reminders</a>
                            <a href="#"> <img src={planing} alt="todo list" />  Planing</a>
                        </div>
                    </li>
                    <li className='licompany'>
                        <a href="#" className='down' onClick={handleToggleB}>
                            Company
                            <img src={down}
                                className={isActiveB ? "setabdown" : "setabup"} alt="seta down" />
                        </a>
                        <div className={isActiveB ? "show" : "none"}>
                            <a href="#"> History </a>
                            <a href="#"> Our Team </a>
                            <a href="#"> Blog </a>
                        </div>
                    </li>
                    <div className="careersabout">
                        <li className='careers'><a href="#">Careers</a></li>
                        <li className='about'><a href="#">About</a></li>
                    </div>
                </ul>
                <div className="loginregister">
                    <button className='login'>Login</button>
                    <button className='register'>Register</button>
                </div>
            </nav>
        </>
    )
}