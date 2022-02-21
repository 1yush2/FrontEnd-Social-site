import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Cancel, Mail, Notifications, Search } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: "20px",
    width: "55%",

    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "50%",
    },
  },

  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },

  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },

  badge: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Aayush Site
        </Typography>

        <Typography variant="h6" className={classes.logoSm}>
          Iyush
        </Typography>

        <div className={classes.search}>
          <Search />

          <InputBase
            placeholder="Search..."
            className={classes.input}
            endAdornment={
              <InputAdornment position="end">
                <Cancel
                  sx={{
                    display: { md: "none" },
                  }}
                  onClick={() => setOpen(false)}
                />
              </InputAdornment>
            }
          />
        </div>

        <div className={classes.icons}>
          <Search
            sx={{ display: { md: "none", } }}
            onClick={() => setOpen(true)}
          />

          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>

          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>

          <Avatar>Aa</Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
}
