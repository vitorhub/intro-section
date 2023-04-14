import audio from './assets/images/client-audiophile.svg'
import databiz from './assets/images/client-databiz.svg'
import maker from './assets/images/client-maker.svg'
import meet from './assets/images/client-meet.svg'
import Menu from './components/Menu'
import MenuMobile from './components/MenuMobile'
import './App.css'
import Footer from './components/Footer'

function App() {

  return (
    <>
    
    <div className='container'>
      <Menu />
      <MenuMobile />
      <div className="centro">
        <div className="left">
          <h1>Make <br /> remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button>Learn More</button>
          <div className="base">
            <img src={audio} alt="audio" />
            <img src={databiz} alt="databiz" />
            <img src={maker} alt="maker" />
            <img src={meet} alt="meet" />
          </div>
        </div>
        <div className="right">
          {/* background */}
        </div>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default App
