import logo from './logo.svg';
import './App.css';
import Posts from './Components/Posts'
import {Provider} from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <Provider store = {store}>
    <div className="App">   
      <Posts/>
    </div>
    </Provider>
  );
}

export default App;
