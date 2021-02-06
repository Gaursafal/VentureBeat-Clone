import {React,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Modal,Button,Container} from "@material-ui/core";
import {useHistory} from "react-router-dom"
import Google from "./googleLogin"

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useDispatch, useSelector } from "react-redux";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "40%",
    backgroundColor: theme.palette.background.paper,
    //border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 5),
    overflow:"auto",
    justifyContent:"center",
    textAlign:"center"
  },
  closeButton: {
    float: "right",
    cursor: "pointer",
    fontSize: 25,
   
  },
  button: {
    marginBottom:"20px" ,
    overflow:"auto"
  },
  emailText:{
    fontSize:"14px",
    padding:"5px 10px 5px 10px",
    texttransform: "none"
  },
  text:{
    color:"grey"
  },
  heading:{
    marginTop:"25px",
    marginBottom:"50px",
    fontSize:"30px"
  }


}));
function Login() {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(true);
  const isAuth=useSelector((state)=>state.isAuth);
  console.log(isAuth)
  const history=useHistory()
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    
      setOpen(false);
    history.push("/")   
  };

  const body = (
      <Container>
        
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.closeButton} type="button" onClick={handleClose}>
        x
      </div>
      <br/>
      <h2 id="simple-modal-title" className={classes.heading}>Join the VentureBeat Community</h2>
      
      <Button
        color="secondary"
        variant="contained"
        className={classes.button}
        startIcon={<MailOutlineIcon/>}
        style={{height:"auto",width:" auto",borderRadius:"0px"}}
        
      >
          <span
          className={classes.emailText}
          
        >
          Sign in with email
          </span>
      </Button>
      <br/>
      <Google className={classes.button}/>

      <p id="simple-modal-description" className={classes.text}>
      By continuing, you are indicating that you accept our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a>
      </p>
    </div>
    </Container>
  );

  return (
    <div>
      
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default Login;