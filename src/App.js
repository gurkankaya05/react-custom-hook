import logo from './logo.svg';
import './App.css';
import useWindowSize from './hooks/useWindowSize';
import useFetch from './hooks/useFetch';
import Hello from './components/Hello';
import Hi from './components/Hi';

function App() {



  const {width,height} = useWindowSize();
  const {data,error,loading} = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  return (
    <div className="App">
   

        {width>500 && <img src={logo} className="App-logo" alt="logo" /> }

        {height > 500 &&  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> }
       
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {width} {height}
        </a>
          <p> Hata :  {JSON.stringify(error)} </p> 
      <p> Loading : {JSON.stringify(loading)} </p>  
       <p>Data :  {JSON.stringify(data)} </p> 

            <Hello/>
            <Hi/>
    


      
    </div>
  );
}

export default App;
