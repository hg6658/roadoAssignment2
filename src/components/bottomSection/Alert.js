
import './Alert.css';
import photo from '../../static/photo.png'
export default function Alert(){

    return <div className='alert'>
        <div className='upper'>
            <div id="photo"><img src={photo}/></div>
            <div id="credentials">
                <div id="upperLine">
                    <span><strong>Reefer Temp. out of range</strong></span>
                    <span>13 Feb 24</span>
                </div>
                <div id="lowerLine">
                    <span>Load No : 12454,</span>
                    <span>Bill To : RoaDo demo Bangalore</span>
                </div>
            </div>
        </div>
        <div className='middle'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className='lower'>
            <button id="ignore">Ignore</button>
            <button id="resolve">Resolve</button>
        </div>
    </div>
}