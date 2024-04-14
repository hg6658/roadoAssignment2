import './Dashboard.css';
import TopBar  from './topSection/TopBar';
import StatBox from './topSection/StatBox';
import TopBar2 from './middleSection/TopBar';
import TopBar3 from './bottomSection/TopBar';
import Widget from './middleSection/Widget';
import Alert from './bottomSection/Alert';
export default function Dashboard(){
    return <div className="Dashboard">
        <div className='top-section'>
            <TopBar />
            <div className="stats">
                <StatBox data={{name:"Orders"}}/>
                <StatBox data={{name:"Trips"}}/>
                <StatBox data={{name:"Revenue"}}/>
                <StatBox data={{name:"Experiences"}}/>
            </div>
        </div>
        <div className="middle-section">
            <TopBar2 />
            <Widget />
        </div>
        <div className="bottom-section">
            <TopBar3 />
            <div className='alerts'>
                <Alert/>
                <Alert/>
            </div>
        </div>
    </div>;
}