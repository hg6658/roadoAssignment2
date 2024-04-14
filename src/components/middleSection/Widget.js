import './widget.css';
import WW from '../../static/WW.png';
import WA from '../../static/WA.png';
import WB from '../../static/WB.png';
import WC from '../../static/WC.png';
import WD from '../../static/WD.png';
import WE from '../../static/WE.png';
export default function Widget(){
    return <div className="widget">
        <div className='inside'>
            <img src ={WA}/>
            <img src ={WW}/>
            <img src ={WB}/>
            <img src ={WW}/>
            <img src ={WC}/>
            <img src ={WW}/>
            <img src ={WD}/>
            <img src ={WW}/>
            <img src ={WE}/>
        </div>
    </div>
}