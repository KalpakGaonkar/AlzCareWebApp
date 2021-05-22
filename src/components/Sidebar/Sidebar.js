import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EventIcon from '@material-ui/icons/Event';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <a href="/">Dashboard</a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FavoriteOutlinedIcon/>
      </ListItemIcon>
      <a href="/patienttab">My Patients</a>
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <EventIcon/>
      </ListItemIcon>
      <a href="/events">Events</a>
    </ListItem> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleIcon/>
      </ListItemIcon>
      <a href="/update-profile">Update Profile</a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <a href="/logout">Log out</a>
    </ListItem>
  </div>
);
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react"
// import "./Sidebar.css";

// const Sidebar = ({ sidebarOpen, closeSidebar }) => {
//   return (
//     <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
//       <div className="sidebar__title">
//         <div className="sidebar__img">
//           <img src='/SimplifyAlzheimersLogo.jpeg' alt="logo" />
//           <h1>SimplifyAlzheimers</h1>
//         </div>
//         <i
//           onClick={() => closeSidebar()}
//           className="fa fa-times"
//           id="sidebarIcon"
//           aria-hidden="true"
//         ></i>
//       </div>
//       <div className="sidebar__menu">
//         <div className="sidebar__link active_menu_link">
//           <i className="fa fa-home"></i>
//           <a href="/">Dashboard</a>
//         </div>
//         <div className="sidebar__link">
//           <i className="fa fa-wrench"></i>
//           <a href="/patienttab">Your Patients</a>
//         </div>
//         <div className="sidebar__link">
//           <i className="fa fa-wrench"></i>
//           <a href="/update-profile">Update Profile</a>
//         </div>
//         <div className="sidebar__logout">
//           <i className="fa fa-power-off"></i>
//           <a href="/logout">Log out</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;