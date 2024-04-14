import './Sidebar.css';
import TopBar from './sideBar/TopBar.js';
import Cards from './sideBar/cards.js';
import Completed from './sideBar/Completed.js'
export default function Sidebar(){
    return <div className="Sidebar">
        <TopBar/>
        <Cards/>
        <Completed data={{name:'Completed Activities(14)'}} />
        <Completed data={{name:'Scheduled Activities(14)'}}/>
    </div>;
}