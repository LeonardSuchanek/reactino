import './App.css';
import AppRouter from './AppRouter';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>

  );
}

export default App;
