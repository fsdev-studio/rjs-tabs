import React, {useState} from 'react';
import './Tabs.css';


function Tabs({
tabs,
whenActive,
whenInActive,
labelContainer,
tabContainer,
type
}){
  const [tab,setTab] = useState(0)


const direction = type === 'classic' ? {flexDirection:'column'} : {flexDirection:'row'};
const labelDirection =  type === 'classic' ? {flexDirection:'row'} : {flexDirection:'column'};
let labelC = {...labelContainer, ...labelDirection} 

  return(
<div className="container" style={direction}>
<div style={labelC}>
<span className="tabBtn" style={tab === 0 ? whenActive : whenInActive} onClick={() => setTab(0)}>{tabs[0].label}</span>
<span className="tabBtn" style={tab === 1 ? whenActive : whenInActive} onClick={() => setTab(1)}>{tabs[1].label}</span>
<span className="tabBtn" style={tab === 2 ? whenActive : whenInActive} onClick={() => setTab(2)}>{tabs[2].label}</span>
</div>
<div style={tabContainer}>
{tabs[tab].tab}
</div>


</div>



  )
}

export default Tabs;
