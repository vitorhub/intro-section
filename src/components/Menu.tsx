import down from '../assets/images/icon-arrow-down.svg'
import todo from '../assets/images/icon-todo.svg'
import calender from '../assets/images/icon-calendar.svg'
import reminders from '../assets/images/icon-reminders.svg'
import planing from '../assets/images/icon-planning.svg'
import './Menu.css'

export default function Menu() {
    var elemento: any = document.getElementById("down2")
    var elementoB: any = document.getElementById("hide1")

    
    elemento?.addEventListener(
        "click",
        ()=>{
            console.log("essa linha executou")
            elementoB.classList.toggle("none")
            elementoB.classList.add("four")
            console.log(elementoB)
        }
    )

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="#" id='down2'>
                            Features
                            <img id='features' src={down} alt="seta down" />
                        </a>
                        <div id='hide1' className='none' >
                            <a href="#"> <img src={todo} alt="todo list" />  TodoList</a>
                            <a href="#"> <img src={calender} alt="todo list" />  Calender</a>
                            <a href="#"> <img src={reminders} alt="todo list" />  Reminders</a>
                            <a href="#"> <img src={planing} alt="todo list" />  Planing</a>
                        </div>
                    </li>
                    <li>
                        <a href="#" className='down'>
                            Company
                            <img src={down} className='company' alt="seta down" />
                        </a>
                        <div className="hide">
                            <a href="#"> History </a>
                            <a href="#"> Our Team </a>
                            <a href="#"> Blog </a>
                        </div>
                    </li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </nav>
        </>
    )
}