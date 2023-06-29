import { TextField } from '@mui/material';

const Measurement = () => {
  
  const fullTextWidth=true
  

  const measure = {
    "id": 1,
    "state_descriptor": "Disabled",
    "signal_ref": "OP-01",
    "value": 0,
    "ul": 0.01,
    "ll": -0.2,
    "units": "Volts"
  }

  const measLabel="Measurement ID: " + measure.id

  return (
    <TextField
      id="outlined-multiline-flexible"
      label={ measLabel }
      fullWidth={ fullTextWidth }
      defaultValue={ measure.state_descriptor }
      multiline
      maxRows={4}
    />
  );
}
 
export default Measurement