import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route } from "react-router";
import { Container } from 'semantic-ui-react';
import Menus from './components/Menus';

function App() {
  return (
    <div>
      <Container styles={{marginTop: "30px"}}>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/departments/:id/menus" component = {Menus}/> */}
      </Container>
    </div>
  );
}

export default App;
