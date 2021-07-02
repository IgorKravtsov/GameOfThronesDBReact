import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import {Container} from "reactstrap";
import Header from "../header/header";

function App() {
  return (
      <Router>
          <div className='app'>
              <Container>
                  <Header />
              </Container>
          </div>
      </Router>
  );
}

export default App;
