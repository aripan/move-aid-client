import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory, useLocation } from "react-router";

const drawerWidth = "25%";
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },

    drawer: {
      width: drawerWidth,
    },

    drawerPaper: {
      width: drawerWidth,
    },

    active: {
      background: "#f4f4f4",
    },

    title: {
      padding: theme.spacing(2),
    },

    appBar: {
      width: `calc(100% - ${drawerWidth})`,
    },

    toolbar: {
      toolbar: theme.mixins.toolbar,
    },

    serviceName: {
      flexGrow: 1,
    },
  };
});

const menuItems1 = [
  {
    text: "Book",
    icon: <ShoppingCartOutlinedIcon color="secondary" />,
    path: "/serviceDetails",
  },
  {
    text: "Booking List",
    icon: <ListAltOutlinedIcon color="secondary" />,
    path: "/serviceDetails/bookingList",
  },
  {
    text: "Review",
    icon: <RateReviewOutlinedIcon color="secondary" />,
    path: "/serviceDetails/review",
  },
];
const menuItems2 = [
  {
    text: "Order List",
    icon: <ShoppingCartOutlinedIcon color="secondary" />,
    path: "/serviceDetails",
  },
  {
    text: "Add Service",
    icon: <ListAltOutlinedIcon color="secondary" />,
    path: "/serviceDetails/bookingList",
  },
  {
    text: "Make Admin",
    icon: <RateReviewOutlinedIcon color="secondary" />,
    path: "/serviceDetails/review",
  },
  {
    text: "Manage Services",
    icon: <RateReviewOutlinedIcon color="secondary" />,
    path: "/serviceDetails/review",
  },
];

const DrawerComponent = ({ children }) => {
  const [menuValue, setMenuValue] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  let menuItems = menuValue ? menuItems2 : menuItems1;
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <Typography className={classes.serviceName}>Welcome</Typography>
          <Typography>Username</Typography>
        </Toolbar>
      </AppBar>
      {/* side bar */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            MoveAid
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                history.push(item.path);
              }}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.toolbar}>
        <div className={classes.page}></div>
        {children}
      </div>
    </div>
  );
};

export default DrawerComponent;
