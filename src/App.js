import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import RadioButtonsGroup from './atoms/radio'
import Test from './atoms/test'
import Tags from './atoms/multiAutocomplete'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">Hello world</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <Test></Test>
        <RadioButtonsGroup></RadioButtonsGroup>
        <Tags></Tags>
      </header>
    </div>
  );
}

export default App;
