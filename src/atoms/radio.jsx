import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const array = ['Maleificent', 'Femaleificent', 'Other']

  return (
    <FormControl component="fieldset">
      {console.log('radio value', value)}
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        {array.map((value, index)=>
        <FormControlLabel value={value} control={<Radio />} label={value} />)}
        {/*<FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>
    </FormControl>
  );
}