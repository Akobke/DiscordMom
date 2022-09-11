import logo from './Logo.png';
import './App.css';
import {useState} from 'react';




function App() {

  const [number, setNumber] = useState('');
  const [did, setDid] = useState('');



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
        <h1>
          Send your discord messages to your mom!
        </h1>
        <form >
          <label>
            Your DiscordID
            <br/>
            <input type="text" name="name" value={did} onChange={(e) => {
              setDid(e.target.value)
            }}/>
            <br></br>
            Mothers Phone Number
            <br/>
            <input type="text" name="name" value={number} onChange={(e) => {
              setNumber(e.target.value)
            }}/>
          </label>
          <br/>
          <input type="submit" value="Submit"/>
          </form>
      </header>
    </div>
  );
}

export default App;
