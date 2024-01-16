import { Paper } from "@mui/material";
import {useSnackbar} from 'notistack';
const {enqueueSnackbar} = useSnackbar();
const Snackbar = (menssage) => {
  
  const buttons = [
    {variant:'success',message:'Sucessfully done the operation'},
    {variant:'error',message:'something went wrong'},
    {variant:'warning',message:'something could go wrong'}
  ]
   return(
      
    <Paper>
      {buttons.map((button)=>{
        if(button.variant===menssage){
        <button key={button.variant}
        variant='outlined'
        style={{...styles.button,...styles[button.variant]}}>
          {button.variant}
        </button>
      }
      })}
    </Paper>
    
    );
  };

  export default Snackbar;