import { TextField } from '@mui/material';
import { useState } from 'react';

const Paragraph = ( block: para ) => {

  const [para, setPara] = useState(null);
  const [isPending, setIsPending] = useState(true)
//const Paragraph = ( para ) => {
  //useEffect(() => {
    
  //const para = props.para;

    //console.log(para);
    //console.log("paragraph Stringified" + JSON.stringify(para));
    //console.log("paragraph.id" + para.id);
    //console.log("Foreign Key" + para.fkey);
    //console.log("Foreign Key" + (props.fkey));
        
    const fullTextWidth=true;
    
    // const para = {
    //    "id": 1,
    //    "name":"This is a content the FIRST paragraph of the application"
    // }

    const paraLabel="Paragraph ID: " + para.id;

    return (
      <>
        <TextField
            id="outlined-multiline-flexible"
            label={ paraLabel }
            fullWidth={ fullTextWidth }
            defaultValue={ para.name }
            multiline
            maxRows={4}
          /><br></br><br></br>
      </>
      
    );
  //}, [para]);
}
 
export default Paragraph