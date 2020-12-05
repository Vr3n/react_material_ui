import React from 'react';
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    helloThereStyle: {
      fontStyle: "oblique",
      color: "blue",
      fontSize: "30px",
    },
    buttonStyles: {
      color: "green",
      border: 0,
      transition: "all 0.5s ease",
    },
  });

const Home = () => {

    const classes = useStyles();

    return (
        <div>
            <Typography
                className={classes.helloThereStyle}
                variant="h1"
                color="primary"
            >
                Hello Friend!
            </Typography>
            <Button
                className={classes.buttonStyles}
                color="secondary"
                variant="outlined"
            >
                This is a Material Button!
            </Button>
        </div>
    )
}

export default Home
