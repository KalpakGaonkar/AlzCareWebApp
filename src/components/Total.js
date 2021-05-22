// import React from 'react';
import React , {useState, useEffect} from "react"
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Navbar/Navbar';
import fireDb from './../firebase'
import Loader from "react-loader-spinner"

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {

  var [patientObjects, setPatientObjects] = useState (-1)
  var [dateAndTime, setDateAndTime ] = useState()

  useEffect(() => {
    fireDb.database().ref('patients').once('value', snapshot=>{
      if(snapshot.val() != null)
        setPatientObjects(snapshot.numChildren());
      
      else
      setPatientObjects(0)
        // console.log(a);
    } )
    if (!Date.now) {
      Date.now = function() { return new Date().getTime(); }
  }
  let s = Date();
  
  var array = s.split(" ");
  var text = "";
  for (var i = 0; i < 5; i++)
   {
    text = text + " " + array[i];
    // console.log(text);
    setDateAndTime(text);
  }
  // console.log(array);
  //   console.log(text);
  console.log(patientObjects)
}, [])

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title><h3>Total Patients</h3></Title>
      <Typography component="p" variant="h4">
      <h4><b>Patients being treated currently</b></h4>
      {patientObjects == -1 &&
      <Loader type="ThreeDots" color="black" height={30} width={30}  />
      }
      {patientObjects != -1 &&
      <h1>{patientObjects}</h1>
      
      }
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        <br></br>
        {/* <h5><b>Last updated on: </b></h5>
        
        <h6>{dateAndTime}</h6> */}
      </Typography>
      {/* <div>
        <Link color="primary" href="/patienttab" >
          View Patient List
        </Link>
      </div> */}
    </React.Fragment>
  );
}