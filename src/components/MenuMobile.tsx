import down from '../assets/images/icon-arrow-down.svg'
import todo from '../assets/images/icon-todo.svg'
import calender from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planing from '../assets/images/icon-planning.svg'
import hamb from '../assets/images/icon-menu.svg'
import hambclose from '../assets/images/icon-close-menu.svg'
import './MenuMobile.css'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Menu() {

    const [isActive, setActive] = useState<boolean>(false);
    const [isActiveB, setActiveB] = useState<boolean>(false);

    const [open, setOpen] = useState<boolean>(false)

    const handleToggle = () => {
        setActive(!isActive);
    };
    const handleToggleB = () => {
        setActiveB(!isActiveB);
    };

    const openHamb = () => {
        setOpen(!open);
    }

    return (
        <>
            <h2 className='snapmobile'>snap</h2>
            <img src={hamb} alt="hamburger" onClick={openHamb}
                className={open ? "hambclose" : "hambopen"}
            />
            <img src={hambclose} alt="hamburger" onClick={openHamb}
                className={open ? "hambopen" : "hambclose"}
            />
            <nav className={open ? "menuopen" : 'menuclose'} >
                <ul>
                    <li>
                        <a href="#" onClick={handleToggle}>
                            Features
                            <img id='features' src={down} alt="seta down"
                                className={isActive ? "setadown" : "setaup"}
                            />
                        </a>
                        <div className={isActive ? "show" : "none"} >
                            <a href="#"> <img src={todo} alt="todo list" />  TodoList</a>
                            <a href="#"> <img src={calender} alt="todo list" />  Calender</a>
                            <a href="#"> <img src={reminders} alt="todo list" />  Reminders</a>
                            <a href="#"> <img src={planing} alt="todo list" />  Planing</a>
                        </div>
                    </li>
                    <li>
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
                    <li className='careers'><a href="#">Careers</a></li>
                    <li className='about'><a href="#">About</a></li>
                </ul>
                <span className='login'>Login</span>
                <span className='register'>Register</span>
            </nav>
        </>
    )
}