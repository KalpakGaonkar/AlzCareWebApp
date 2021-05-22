import React, { useRef, useState } from "react"
import { Form, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <hr></hr>
        {error && <Alert variant="danger">{error}</Alert>}
           {message && <Alert variant="success">{message}</Alert>}
           <form onSubmit={handleSubmit}>
             <Form.Group id="email">
               <Form.Label>Email</Form.Label>
               <Form.Control type="email" ref={emailRef} required />
             </Form.Group>
           
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Reset Password
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/login" variant="body2">
                Login
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {" Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>

    // <>
    //   <Card>
    //     <Card.Body>
    //       <h2 className="text-center mb-4">Password Reset</h2>
    //       {error && <Alert variant="danger">{error}</Alert>}
    //       {message && <Alert variant="success">{message}</Alert>}
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group id="email">
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control type="email" ref={emailRef} required />
    //         </Form.Group>
    //         <Button disabled={loading} className="w-100" type="submit">
    //           Reset Password
    //         </Button>
    //       </Form>
    //       <div className="w-100 text-center mt-3">
    //         <Link to="/login">Login</Link>
    //       </div>
    //     </Card.Body>
    //   </Card>
    //   <div className="w-100 text-center mt-2">
    //     Need an account? <Link to="/signup">Sign Up</Link>
    //   </div>
    // </>
  )
}
