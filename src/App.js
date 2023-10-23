import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header';
import HrDetails from './Components/HR Details/HrDetails';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <HrDetails/>
      </BrowserRouter>
    </>
  );
}

export default App;
