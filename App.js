import {BrowserRouter, Route,Routes} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import HomePage from "./components/HomePage";
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  console.log(store)
  return (
   <BrowserRouter>
   <Provider store={store}>
    <Header/>
    <HomePage/>
    </Provider>
    {/* <Routes>
      <Route path="/" element={<MainComponent></MainComponent>}/>
    </Routes> */}
   </BrowserRouter>
  );
}

export default App;
