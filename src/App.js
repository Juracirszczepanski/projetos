import './App.css';
import RoutesApp from './Routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <RoutesApp/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
