import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";


function App() {


    const navigate = useNavigate();


  return (
    <div className="App">
      <header className="App-header">




        <div className="you">
            regien
        </div>

        <div className="you">


            <button onClick={() => {


                navigate('/login')


            }} >

              Login

            </button>
        </div>


          <div className="you">


              <button onClick={() => {


                  navigate('/posts/200')


              }} >

                  Post Show

              </button>
          </div>





          <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit you m <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
