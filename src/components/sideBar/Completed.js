import './Completed.css';
export default function Completed(props){
    return (
        <div id="outer">
        <div className='topBar-completed'>
    <h1>{props.data.name}
    </h1>
    <p style={{'text-decoration':'underlined'}}>view all</p>
</div>
     <div id="self-card">
        <div class="tile"><p>Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325</p></div>
        <div class="tile"><p>Aman (Driver) Picked Up goods at Location_Name for Load No. I-I-AAA-1325</p></div>
        <div class="tile"><p>Gurpreet Singh  (Dispatch team) has created Load No. I-I-AAA-1325</p></div>
        <div class="tile"><p>Load No. I-I-AAA-1325 will start added by Gurpreet Singh</p></div>
     </div>
</div>
    );

}