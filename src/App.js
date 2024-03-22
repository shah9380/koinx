import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
        <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
