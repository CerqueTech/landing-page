import { Paper } from "@mui/material";
import {useSnackbar} from 'notistack';
const {enqueueSnackbar} = useSnackbar();
const Snackbar = (menssage) => {
  const styles = {
    root:{
      flexGrow:1,
      display:'flex',
      margin:16,
      justifyContent:'center',
      alignItems:'middle'
    },
    button{
      margin:8,
      borderColor:"#43a047"
    },
    success:{
      borderColor:'#43a047',
      color:'#43a046'
    }
    error:{
      borderColor:'#2979ff',
      color:'#2979ff'
    }
    warning{
      borderColor:'#ffa000'
      color:'#ffa000'
    }
  }
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