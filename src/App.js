import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Dashboard from './components/Dashboard.js';
import Sidebar from './components/Sidebar.js';
import { slide as Menu } from 'react-burger-menu';
import G from './static/G.png';
import A from './static/A.png';
import B from './static/B.png';
import C from './static/C.png';
import D from './static/D.png';
import E from './static/E.png';
import F from './static/F.png';
import H from './static/H.png';
import I from './static/I.png';
import J from './static/J.svg';
import K from './static/K.png';
import L from './static/L.png';

const CustomBurgerIcon = () => <img src={G} />;
function App() {

  const customStyles = {
    bmMenu: {
      background: 'white', 
      boxShadow: 'none',
      width: '50px', 
      height: '95vh',
      boxShadow:'box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);',
      borderRadius: '10px'
    },
    bmItemList: {
      background: 'white', 
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    bmBurgerButton:{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      background: 'white',
      width: '50px',
      height: '50px',
      boxShadow:'box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border:'1px solid black',
      borderRadius: '10px'
    }
    
  };


  return (
    <div className="App">
      <Menu customBurgerIcon={ <CustomBurgerIcon /> } styles={customStyles}>
        <a id="home" className="menu-item" href="/"><img src={A} /></a>
        <a id="home" className="menu-item" href="/"><img src={B} /></a>
        <a id="home" className="menu-item" href="/"><img src={C} /></a>
        <a id="home" className="menu-item" href="/"><img src={D} /></a>
        <a id="home" className="menu-item" href="/"><img src={E} /></a>
        <a id="home" className="menu-item" href="/"><img src={F} /></a>
        <a id="home" className="menu-item" href="/"><img src={L} /></a>
        <a id="home" className="menu-item" href="/"><img src={H} /></a>
        <a id="home" className="menu-item" href="/"><img src={I} /></a>
        <a id="home" className="menu-item" href="/"><img src={J} /></a>
        <a id="home" className="menu-item" href="/"><img src={K} /></a>
      </Menu>
      <Dashboard/>
      <Sidebar/>
    </div>
  );
}

export default App;
