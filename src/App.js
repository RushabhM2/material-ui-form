import './App.css';
import Button from '@material-ui/core/Button';
import RadioButtonsGroup from './atoms/radio'
import Test from './atoms/test'
import Tags from './atoms/multiAutocomplete'
import Root from './Root'

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">Hello world</Button>
      <Test></Test>
      <RadioButtonsGroup></RadioButtonsGroup>
      <Tags></Tags>
      <Root />
    </div>
  );
}

export default App;
