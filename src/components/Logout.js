import React, { useState } from "react"
import { Card, Alert, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import {  useHistory, Link } from "react-router-dom"

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Dashboard() {
  const [error, setError] = useState("")
  const {  logout } = useAuth()
  const history = useHistory()
  const classes = useStyles();

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    
      <Container component="main" maxWidth="xs" id='page-content-wrapper'>
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ExitToAppOutlinedIcon />
        </Avatar>
          <Typography component="h1" variant="h5">
            Log Out
          </Typography>
        <div >
        
          <br></br>
          <Typography component="h2" variant="h6">
            Are you sure you want to Log out?
          </Typography>
          <Grid container>
            <Grid item xs>
            <Button variant="link" onClick={handleLogout} align='center'>
              Yes, Log Out
            </Button>
            </Grid>
            <Grid item xs>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
            </Grid>
          </Grid> 
        </div>
        </div>
        <Box mt={8}>
          {/* <Copyright /> */}
        </Box>
      </Container>
      

    )

}