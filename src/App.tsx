import "./App.css";
import AppRouter from "./AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <AppRouter />
      </ScrollToTop>
    </Router>
  );
}

export default App;
