

import AA from '../../static/AA.png';
import AB from '../../static/AB.png';
import AC from '../../static/AC.png';
import AD from '../../static/AD.png';

export default function TopBar(){
    return <div className='topBar'>
    <h1>Dashboard</h1>
    <div className='accessibility'>
        <img src = {AB}/>
        <img src = {AA}/>
        <img src = {AC}/>
        <img src = {AA}/>
        <img src = {AD}/>
    </div>
</div>;
}