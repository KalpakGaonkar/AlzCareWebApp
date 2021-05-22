import React , {useState, useEffect} from "react"
import { useTheme } from '@material-ui/core/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Navbar/Navbar';
import fireDb from './../firebase'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Loader from "react-loader-spinner"


function preventDefault(event) {
  event.preventDefault();
}

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  autoHeight: {
    height: "auto",
  },
});

export default function Chart() {
  
 
  var [dateAndTime, setDateAndTime ] = useState()
  var [patientObjects, setPatientObjects] = useState ('')
  
  useEffect(() => {
  
    fireDb.database().ref('patients').orderByKey().limitToLast(1).on("child_added", function(data){
        console.log(data.val().fullName);

        if(data.val() != null){
          setPatientObjects(data.val().fullName)}
        else  {
        setPatientObjects('No patients added')}
    })
    
    
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
  }, [])
  
  const theme = useTheme();
  const classes = useStyles();
  const autoHeightPaper = clsx(classes.paper, classes.autoHeight);
  return (
    <React.Fragment>
      
      <Title><h3>Today</h3></Title>
      <Typography component="p" variant="h4">
      <h4><b>New Patient</b></h4>
      {patientObjects.length == 0 &&
      <Loader type="ThreeDots" color="black" height={30} width={30}  />
      }
      
      {patientObjects.length > 0 &&
      <h5>{patientObjects}</h5>
      }

      
      </Typography>
      
      <Typography color="textSecondary" className={classes.depositContext}>
        <br></br>
      <h5><b>Today's date </b></h5>
        
        <h6>{dateAndTime}</h6>
        </Typography>
      {/* <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Treatment
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer> */}
    
    </React.Fragment>
  );
}