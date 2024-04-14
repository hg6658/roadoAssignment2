
import './StatBar.css';
export default function StatBar(props) {
    console.log(props);
    return <div className="statBar" style={{background:props.data.backgroundColor}}>
    <span>{props.data.label}</span>
    <span>{props.data.data}</span>
    </div>
}