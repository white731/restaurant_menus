import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route } from "react-router";
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Container>
        <Route exact path="/" component={Home} />
      </Container>
    </div>
  );
}

export default App;
