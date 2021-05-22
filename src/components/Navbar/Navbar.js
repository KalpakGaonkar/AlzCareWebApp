  
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};


// import React from "react"
// import "./Navbar.css";

// const Navbar = ({ sidebarOpen, openSidebar }) => {
//   return (
//     <nav className="navbar">
//       <div className="nav_icon" onClick={() => openSidebar()}>
//         <i className="fa fa-bars" aria-hidden="true"></i>
//       </div>
//       <div className="navbar__left">
//         <a href="#">Events</a>
//         {/* <a href="/patienttab">Your Patients</a> */}
//         <a className="active_link" href="/">
//           Admin
//         </a>
//       </div>
//       <div className="navbar__right">
//         <a href="#">
//           <i className="fa fa-search" aria-hidden="true"></i>
//         </a>
//         <a href="#">
//           <i className="fa fa-clock-o" aria-hidden="true"></i>
//         </a>
//         <a href="#!">
//           <img width="30"  alt="avatar" />
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;