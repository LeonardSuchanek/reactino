import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const AppRouter = () => (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
);

export default AppRouter;
