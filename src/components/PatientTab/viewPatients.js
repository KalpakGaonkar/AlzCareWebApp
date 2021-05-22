import React, {useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../Sidebar/Sidebar';
import fireDb from '../../firebase'

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  divider: {
    // Theme Color, or use css color in quote
    background: 'Gainsboro',
},
  
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100ch',
    },
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    margin: 'auto',
  },
  fixedHeight: {
    height: 280,
  },
  autoHeight: {
    height: "auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const ViewPatients = ({match})=>{
  const classes = useStyles();
  var [patientObjects, setPatientObjects] = useState ({})
  const [updates,setUpdates] = useState({})
  const [stageUpdate, setStageUpdate] = useState({})
  const [ name, setName] = useState()
  const [open, setOpen] = React.useState(true);
  const [ patientAppId, setPatientAppId] = useState({})
  const patientID = match.params.id;
  const iniFieldValues = {
    patientAppId:patientID
  }
  
  useEffect(() => {
    fireDb.database().ref(`patients/${patientID}`).on('value', snapshot=>{
        console.log(snapshot.val())
        setPatientObjects({
          ...snapshot.val()
        })
        // console.log(patientObjects)
    } )
}, [])

    // useEffect(()=>{
    //     fetch('http://localhost:3000/api/Viewpatient/'+props.match.params.id)
    //     .then(res => res.json())
    //     .then(
    //         (result)=>{
    //             setPatientObjects(result);
    //         }
    //     )
    // })
    

    const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleUpdate = key => {
    // e.preventDefault();

    fireDb.database().ref(`patients/`).child(`${key}`).update({
      patientUpdates:updates
    })
    // .then(()=>{
    //   alert("Updates are successfully added!")
    // })
    .catch((error)=>{
      alert(error.updates)
    })

    setUpdates("")
  }
  const handleUpdate1 = key => {
    // e.preventDefault();

    fireDb.database().ref(`patients/`).child(`${key}`).update({
      alzStage:stageUpdate
    })
    // .then(()=>{
    //   alert("Updates are successfully added!")
    // })
    .catch((error)=>{
      alert(error.updates)
    })

    setStageUpdate("")
  }
  const handleUpdate2 = key => {
    // e.preventDefault();

    fireDb.database().ref(`patientDocConnection/`).child(`${patientAppId}`).set({
      patientDocId:patientID
    })
    // .then(()=>{
    //   alert("Updates are successfully added!")
    // })
    .catch((error)=>{
      alert(error.updates)
    })

    setPatientAppId("")
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const autoHeightPaper = clsx(classes.paper, classes.autoHeight);

  return (
    
    
        <div className={classes.root}>
      
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          <h6> {}</h6> Patient Details
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            
            <Grid item xs={12} sm={6}>
              <Paper className={autoHeightPaper}>
                <Grid item xs={12}>
                <h2>Patient Information</h2>
    
                <Divider variant="fullWidth" orientation="horizontal" classes={{root: classes.divider}}/>
                <br></br>
                </Grid>                
                <h5><b>Name:</b> &nbsp;&nbsp;{patientObjects.fullName}</h5>
                <br></br>
                <h5><b>Mobile:</b> &nbsp;&nbsp;{patientObjects.mobile}</h5>
                <br></br>
                <h5><b>Email:</b> &nbsp;&nbsp;{patientObjects.email}</h5>
                <br></br>
                <h5><b>Address: </b>&nbsp;&nbsp;{patientObjects.address}</h5>              
                <br></br>
                {/* <h5><b>Patient Key: </b>{patientID}</h5> */}
              </Paper>
            </Grid> 
            <Grid item xs={12} sm={6} justify="center">
              <Paper className={autoHeightPaper}>
              
               <h2>Recent MRI Scans</h2> 
               <Divider orientation="horizontal" classes={{root: classes.divider}} />
               <br></br>
               <Grid container>
               <img src = {patientObjects.imageUrl} height="154" width="154" />
               
               </Grid> 
                 <br></br>
                 <h5><b>Stage: </b>&nbsp;&nbsp;{patientObjects.alzStage}</h5>
                 {/* <br></br> */}
                 
                 </Paper>
            </Grid>
               
               {/* <Grid container item xs={12} sm={6}>
               <p><b>Current Stage: </b>&nbsp;&nbsp;{patientObjects.alzStage}</p>
               </Grid> */}
               

               {/* <table>
                   <tr>
                       <td>Date</td>
                       <td>Name</td>
                       <td>View Scan</td>
                   </tr>
                   <tr>
                       <td>12th Sept</td>
                       <td>{patientObjects.fullName}</td>
                       <td>link</td>
                   </tr>
                            {
                                Object.keys(patientObjects).map(id =>{
                                    return <tr key={id}>
                                        <td><Link to={'/viewpatient/'+id}>{patientObjects[id].fullName}</Link></td>
                                        <td>{patientObjects[id].mobile} </td>
                                        <td>{patientObjects[id].email} </td>
                                        <td>
                                            <a className='btn text-primary'  >sfaf
                                                <FontAwesomeIcon icon='pencil-alt' />
                                            </a>
                                            <a className='btn text-danger' >
                                                <FontAwesomeIcon icon='trash-alt' />
                                            </a>
                                            <a className='btn' >
                                                <FontAwesomeIcon icon='upload' />
                                            </a>
                                            
                                        </td>
                                    </tr>
                                })
                            }
               </table> */}
              
            {/* Recent Deposits */}
            {/* <Grid item xs sm>
              <Paper className={fixedHeightPaper}>
                <h3>Caretaker Contact Info</h3>
              </Paper>
            </Grid> */}
            <Grid item xs={12}>
              <Paper className={autoHeightPaper}>
              <Grid item xs={12}>
                <h2>Latest Updates</h2>
                <Divider orientation="horizontal" classes={{root: classes.divider}}/>
                <br></br>
              </Grid>
                <h5 fontSize="50px"><b>Latest Updates: </b>&nbsp;&nbsp;{patientObjects.patientUpdates}</h5>
                
              </Paper>
            </Grid>
          
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid xs sm>
                <h2>Updates</h2>
                <Divider orientation="horizontal" classes={{root: classes.divider}}/>
                <br></br>
                </Grid>
                <form className={classes.root} noValidate autoComplete="off" onClick={() => handleUpdate(match.params.id)}>
                <Grid item xs sm>
                  <TextField
                    id="filled-textarea"
                    label="Updates"
                    multiline
                    fullWidth
                    variant="filled"
                    onChange={(e) => setUpdates(e.target.value)}
                  />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                  <Button
                    
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.submit}
                  >
                    Update
                  </Button>
                  </Grid>

                </form>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid xs sm>
                <h2>Update Stage (Only if displayed wrong)</h2>
                <Divider orientation="horizontal" classes={{root: classes.divider}}/>
                <br></br>
                </Grid>
                <form className={classes.root} noValidate autoComplete="off" onClick={() => handleUpdate1(match.params.id)}>
                <Grid item xs sm>
                  <TextField
                    id="filled-textarea"
                    label="Update Stage"
                    multiline
                    fullWidth
                    variant="filled"
                    onChange={(e) => setStageUpdate(e.target.value)}
                  />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                  <Button
                    
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.submit}
                  >
                    Update
                  </Button>
                  </Grid>

                </form>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Grid xs sm>
                <h2>Enter Patient Key</h2>
                <Divider orientation="horizontal" classes={{root: classes.divider}}/>
                <br></br>
                </Grid>
                <form className={classes.root} noValidate autoComplete="off" >
                <Grid item xs sm>
                  <TextField
                    id="filled-textarea"
                    label="Add Key"
                    multiline
                    fullWidth
                    variant="filled"
                    onChange={(e) => setPatientAppId(e.target.value)}
                  />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                  <Button
                    
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.submit}
                    onClick={() => handleUpdate2(match.params.id)}
                  >
                    Add
                  </Button>
                  </Grid>

                </form>
              </Paper>
            </Grid>
          </Grid>

        </Container>
      </main>
    </div>
  );
}
export default ViewPatients;



// export default function ViewPatients(props) {
//   const classes = useStyles(props);
// //   const [patient,setPatient] = useState({});
//   var [patientObjects, setPatientObjects] = useState ({})
//   const [updates,setUpdates] = useState({})
//   const [open, setOpen] = React.useState(true);

//     // useEffect(()=>{
//     //     fetch('http://localhost:3000/api/Viewpatient/'+props.match.params.id)
//     //     .then(res => res.json())
//     //     .then(
//     //         (result)=>{
//     //             setPatientObjects(result);
//     //         }
//     //     )
//     // })
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const handleUpdate = (e) => {
//     e.preventDefault();

//     fireDb.database().ref('patients').push({
//       updates:updates
//     })
//     .then(()=>{
//       alert("Updates are successfully added!")
//     })
//     .catch((error)=>{
//       alert(error.updates)
//     })

//     setUpdates("")
//   }
//   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

 
  
//   return (
//     <div className={classes.root}>
//       <h1>({this.props.params.match.id})</h1>
//       <CssBaseline />
//       <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
//         <Toolbar className={classes.toolbar}>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
//             Patient Details
//           </Typography>
//           <IconButton color="inherit">
//             <Badge badgeContent={4} color="secondary">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         classes={{
//           paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
//         }}
//         open={open}
//       >
//         <div className={classes.toolbarIcon}>
//           <IconButton onClick={handleDrawerClose}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </div>
//         <Divider />
//         <List>{mainListItems}</List>
//         <Divider />
//         <List>{secondaryListItems}</List>
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Container maxWidth="lg" className={classes.container}>
//           <Grid container spacing={3}>
//             {/* Chart */}
//             <Grid item xs={12} md={8} lg={9}>
//               <Paper className={fixedHeightPaper}>
//                <h3>Recent MRI Scans</h3>
//                {/* <table>
//                    <tr>
//                        <td>Date</td>
//                        <td>Name</td>
//                        <td>View Scan</td>
//                    </tr>
//                    <tr>
//                        <td>12th Sept</td>
//                        <td>{patientObjects.fullName}</td>
//                        <td>link</td>
//                    </tr>
//                             {
//                                 Object.keys(patientObjects).map(id =>{
//                                     return <tr key={id}>
//                                         <td><Link to={'/viewpatient/'+id}>{patientObjects[id].fullName}</Link></td>
//                                         <td>{patientObjects[id].mobile} </td>
//                                         <td>{patientObjects[id].email} </td>
//                                         <td>
//                                             <a className='btn text-primary'  >sfaf
//                                                 <FontAwesomeIcon icon='pencil-alt' />
//                                             </a>
//                                             <a className='btn text-danger' >
//                                                 <FontAwesomeIcon icon='trash-alt' />
//                                             </a>
//                                             <a className='btn' >
//                                                 <FontAwesomeIcon icon='upload' />
//                                             </a>
                                            
//                                         </td>
//                                     </tr>
//                                 })
//                             }
//                </table> */}
//               </Paper>
//             </Grid>
//             {/* Recent Deposits */}
//             <Grid item xs={12} md={4} lg={3}>
//               <Paper className={fixedHeightPaper}>
//                 <h3>Caretaker Contact Info</h3>
//               </Paper>
//             </Grid>
//             {/* Recent Orders */}
//             <Grid item xs={12}>
//               <Paper className={classes.paper}>
//                 <h3>Updates</h3>
//                 <form className={classes.root} noValidate autoComplete="off" onSubmit={handleUpdate}>
//                   <div>
//                   <TextField
//                     id="filled-textarea"
//                     label="Updates"
//                     multiline
//                     variant="filled"
//                     onChange={(e) => setUpdates(e.target.value)}
//                   />
//                   </div>
//                   <div>
//                   <Button
                    
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                     className={classes.submit}
//                   >
//                     Update
//                   </Button>
//                   </div>

//                 </form>
//               </Paper>
//             </Grid>
//           </Grid>

//         </Container>
//       </main>
//     </div>
//   );
// }


