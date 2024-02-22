import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';  
import Home from './pages/home/Home';
import Login from './pages/login/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />         
      </Routes>
    </Router>
  );
};
export default App
