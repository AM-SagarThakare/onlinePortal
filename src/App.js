import './App.css';
import HomePage from './Components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrentTest from './Components/CurrentTest';
import ResultPage from './Components/ResultPage';

function App() {
  return (
    <BrowserRouter >
      <Routes>
      {/* <HomePage /> */}
      <Route path='/' element={<HomePage />}></Route>
      <Route path='currentTest' element={<CurrentTest />}></Route>
      <Route path='result' element={<ResultPage />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   {/* <h1>in app</h1>  */}
    // </div>
  );
}

export default App;
