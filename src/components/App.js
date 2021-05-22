import React from "react"
import "./FontAwesomeIcons/Icons"
import Signup from "./Signup"
// import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Logout from "./Logout"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import PatientTab from "./PatientTab/PatientTab"
import Patient from "./PatientTab/Patient"
import PatientForm from './PatientTab/PatientForm'
import ViewPatients from './PatientTab/viewPatients'

function App() {
  return (
      <div >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/logout" component={Logout} />
              <Route path="/patienttab" component={PatientTab} />
              <Route path="/patientForm" component={PatientForm} />
              <Route path="/patient" component={Patient} />
              <Route path="/viewpatient/:id" component={ViewPatients} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App