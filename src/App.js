import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';


function TabOne(){
  return(
    <div style={{display:'flex', flexDirection:'column'}}>
      <h1>Tab One</h1>
      <p>This is the first tab.</p>
      <p>You can add your main content here</p>
    </div>
  )
}
function TabTwo(){
  return(
    <div style={{display:'flex', flexDirection:'row'}}>
      <h1>Tab Two</h1>
    </div>
  )
}

function TabThree(){
  return(
    <div style={{display:'flex', flexDirection:'row'}}>
      <h1>Tab Three</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Tabs
      tabs={[{label:'Tab One',tab:<TabOne/>},{label:'Tab Two',tab:<TabTwo/>},{label:'Tab Three',tab:<TabThree/>}]}
      whenActive={{color:"#FF55FF", fontWeight:'bold',textDecoration:'underline'}}
      whenInActive={{color:"green",fontWeight:"bold"}}
      labelContainer={{display:'flex', width:300}}
      tabContainer={{height:'auto', width:300,padding:3}}
      type={'classic'}
      />
    </div>
  );
}

export default App;
