
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import List from './components/List';



function App() {
  const [search, setsearch] = useState("")
  return (
    <div className="App">
      <Navbar setsearch={setsearch}/>
     
      
      <List search={search}/>
       
        
      
    
    </div>
  );
}

export default App;
